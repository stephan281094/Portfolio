const fs = require('fs')
const path = require('path')
const express = require('express')
const compression = require('compression')
const serialize = require('serialize-javascript')
const resolve = (file) => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENV === 'production'
const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

const app = express()

let indexHTML
let renderer
if (isProd) {
  renderer = createRenderer(fs.readFileSync(resolve('./dist/server.js'), 'utf-8'))
  indexHTML = parseIndex(fs.readFileSync(resolve('./dist/_index.html'), 'utf-8'))
} else {
  require('./setup-dev-server')(app, {
    bundleUpdated: (bundle) => {
      renderer = createRenderer(bundle)
    },
    indexUpdated: (index) => {
      indexHTML = parseIndex(index)
    }
  })
}

function createRenderer (bundle) {
  return require('vue-server-renderer').createBundleRenderer(bundle, {
    cache: require('lru-cache')({
      max: 1000,
      maxAge: 1000 * 60 * 15
    })
  })
}

function parseIndex (template) {
  const contentMarker = '{{ marker }}'
  const i = template.indexOf(contentMarker)
  return {
    head: template.slice(0, i),
    tail: template.slice(i + contentMarker.length)
  }
}

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(serve('./public', true))
app.use(compression({ threshold: 0 }))
app.use('/service-worker.js', serve('./dist/service-worker.js'))
app.use('/dist', serve('./dist'))

app.get('*', (req, res) => {
  if (!renderer) {
    return res.end('waiting for compilation... refresh in a moment.')
  }

  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Server', serverInfo)

  var s = Date.now()
  const context = { url: req.url }
  const renderStream = renderer.renderToStream(context)

  renderStream.once('data', () => {
    const {
      title, htmlAttrs, bodyAttrs, link, style, script, noscript, meta
    } = context.meta.inject()

    let head = indexHTML.head
    head = head.replace('{{ meta-html-attrs }}', htmlAttrs.text())
    head = head.replace('{{ meta-meta }}', meta.text())
    head = head.replace('{{ meta-title }}', title.text())
    head = head.replace('{{ meta-link }}', link.text())
    head = head.replace('{{ meta-style }}', style.text())
    head = head.replace('{{ meta-script }}', script.text())
    head = head.replace('{{ meta-noscript }}', noscript.text())
    head = head.replace('{{ meta-body-attrs }}', bodyAttrs.text())

    res.write(head)
  })

  renderStream.on('data', (chunk) => {
    res.write(chunk)
  })

  renderStream.on('end', () => {
    if (context.initialState) {
      res.write(
        `<script>window.__INITIAL_STATE__=${
          serialize(context.initialState, { isJSON: true })
        }</script>`
      )
    }
    res.end(indexHTML.tail)
    console.log(`whole request: ${Date.now() - s}ms`)
  })

  renderStream.on('error', err => {
    if (err && err.code === '404') {
      res.status(404).end('404 | Page Not Found')
      return
    }
    res.status(500).end('Internal Error 500')
    console.error(`error during render : ${req.url}`)
    console.error(err)
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
