import { cacheControlFactory } from './cache-control.js'

const cacheControl = cacheControlFactory(60 * 60 * 24)

export default function fastHead(req, res, next) {
  const { context } = req
  const { page } = context
  if (page) {
    // Since the *presence* is not affected by the request, we can cache
    // this and allow the CDN to hold on to it.
    cacheControl(res)

    return res.status(200).send('')
  }
  next()
}
