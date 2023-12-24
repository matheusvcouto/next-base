import { Hono } from 'hono'

export const exemple = new Hono()
.get('/exemple', (c) => {
  return c.json({ mensagem: 'exemple'})
})
.get('/exemple/:id', (c) => {
  const { id } = c.req.param()
  return c.json(id)
})


// or 

exemple.get('/exemple-test', c => {
  return c.json({ mensager: 'test' })
})