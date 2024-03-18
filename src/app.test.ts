import app from './app';

test('Teste da rota GET /', async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/'
  });
  expect(response.statusCode).toBe(200);
  expect(response.payload).toEqual('Hello, world!');
});
