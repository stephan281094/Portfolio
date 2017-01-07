import { app, router, store } from './app'

const isDev = process.env.NODE_ENV !== 'production'
const meta = app.$meta()

export default (context) => {
  const s = isDev && Date.now()

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
    isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
    context.initialState = store.state
    return app
  })
}
