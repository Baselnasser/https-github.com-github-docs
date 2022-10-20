import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

import events from './events.js'
import search from './search.js'

const router = express.Router()

router.use('/events', events)

// The purpose of this is for convenience to everyone who runs this code
// base locally but don't have an Elasticsearch server locally.
// In production, this env var is always set but perhaps in a writer's
// local laptop, they don't have an Elasitsearch. Neither a running local
// server or the known credentials to a remote Elasticsearch. Whenever
// that's the case, they can just HTTP proxy to the production server.
if (process.env.ELASTICSEARCH_URL) {
  router.use('/search', search)
} else {
  router.use(
    '/search',
    createProxyMiddleware({
      target: 'https://docs.github.com',
      changeOrigin: true,
      // By default, http-proxy-middleware will `this.logger.info(...)`
      // to say the following:
      //
      //    [HPM] Proxy created: /  -> https://docs.github.com
      //
      // This can be misleading and confusing for anybody starting the
      // server. Besides, in a sense we aren't particularly interested
      // in this proxy from a developer point of view. If you don't
      // have your own ELASTICSEARCH_URL locally, then search functionality
      // isn't what you're developing/debugging.
      logLevel: 'warn',
    })
  )
}

router.get('*', (req, res, next) => {
  res.status(404).json({ error: `${req.path} not found` })
})

export default router
