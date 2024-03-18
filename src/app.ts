import fastify from 'fastify'

const app = fastify({
    logger: false
})

app.get('/', async (request, reply) => {
  return 'e ai é dentro teste'
})

app.listen({host: '0.0.0.0', port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(address)
})