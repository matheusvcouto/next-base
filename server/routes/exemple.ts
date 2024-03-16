import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

export const exemple = new Hono()
.get('/exemple', (c) => {
  return c.json({ mensagem: 'exemple'})
})
.get('/exemple/:id', (c) => {
  const { id } = c.req.param()
  return c.json(id)
})

// or 

exemple.get('/exemple-test', 
  zValidator( 'query',
  z.object({
    name: z.string().min(5, 'minimo de 1')
  })), c => {
  return c.json({ name: c.req.query('name') })
})