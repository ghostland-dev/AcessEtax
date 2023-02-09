import { test } from '@japa/runner'

test.group('Auth connexion', () => {
  test('get a paginated list of users', async ({ client }) => {
    const response = await client.get('/auth/v1/connexion')

    console.log(response.body())
  })
})
