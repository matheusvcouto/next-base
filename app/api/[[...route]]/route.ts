import { app } from '@/server'
import { handle } from 'hono/vercel'

/*
  Para editar o servidor e suas rotas é só acessar a pasta server
*/

export const runtime = 'edge'

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
export const HEAD = handle(app)
export const PATCH = handle(app)
export const OPTIONS = handle(app)