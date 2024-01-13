import { Hono } from 'hono'
// import { cors } from 'hono/cors'

import { exemple } from './routes/exemple'

export const app = new Hono().basePath('/api')

// app.use(
//   '*',
//   cors({
//     origin: '*',
//     exposeHeaders: [
//       'Houston-ChatId',
//       'Houston-AssistantMessageId',
//       'Houston-UserMessageId',
//     ],
//   }),
// )

app.notFound((c) => c.json({ error: 'Not Found' }, 404))

app.get('/', (c) => {
  return c.json('API folder')
})  

app.get('/entry/:id', (c) => {
  const { id } = c.req.param()
  return c.json(id)
})

const routes = app
  .route('/', exemple)

export type Api = typeof routes
export type App = typeof app