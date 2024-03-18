import fastify from 'fastify'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = fastify({
    logger: false
})

app.get('/', async (request, reply) => {
  return 'É dentro'
})

// id Int @id @default(autoincrement())
//   ra String 
//   frequencia Int
//   turma String
//   turmaCodigo String
//   escola String
//   escolaCodigo String
//   cidade String

app.post('/frequencia', {
    schema: {
        body: {
          type: 'object',
          required: ['ra', 'frequencia', 'turma', 'turmaCodigo', 'escola', 'EscolaCOdigo', 'cidade'],
          properties: {
            ra: { type: 'string' }, 
            frequencia : { type: 'int' },
            turma : { type: 'string' }, 
            turmaCodigo : { type: 'string' }, 
            escola : { type: 'string' }, 
            EscolaCOdigo : { type: 'string' }, 
            cidade : { type: 'string' }, 
          }
        }
      }
}, async (req, res) => {
    res.send(req)
})

app.listen({host: '0.0.0.0', port: 8085 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(address)
})

export default app;