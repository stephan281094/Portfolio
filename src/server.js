import { app, router, store } from './app'

const isDev = process.env.NODE_ENV !== 'production'
const meta = app.$meta()

export default (context) => {
  const s = isDev && process.hrtime()

  router.push(context.url)
  context.meta = meta
  const matchedComponents = router.getMatchedComponents()

  if (!matchedComponents.length) {
    return Promise.reject({ code: '404' })
  }

  return Promise.all(matchedComponents.map(component => {
    if (component.preFetch) {
      return component.preFetch(store)
    }
  })).then(() => {
    if (isDev) {
      const end = process.hrtime(s)
      const d = Math.round((end[0] * 1000) + (end[1] / 1000000))
      console.log(`data pre-fetch: ${d}ms`)
    }

    context.initialState = store.state
    return app
  })
}
