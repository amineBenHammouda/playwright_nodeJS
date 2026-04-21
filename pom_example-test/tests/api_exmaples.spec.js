import { test, expect } from '@playwright/test'
import users from '../test-data/usersResponse.json'

test.describe('API verification Examples', () => {
//1) test to verify users endpont is returning expected users
test("verify multiple records returned against stored static response", async ({ request }) => {
    // save raw response in a variable
    const response = await request.get('https://dummyjson.com/users?limit=6&skip=0')

    // parse the response body into a js object with access to the actual data within  the response body
    const responseBody = await response.json()

    // Let's see what is store inside
    //console.log(responseBody)
    expect(response.status()).toBe(200)
    expect(responseBody).toEqual(users)
})

//2) test data for a single user line by line
test("verify single user data line by line", async ({ request }) => {
    const response = await request.get('https://dummyjson.com/users/1')
    const responseBody = await response.json()
    //console.log(responseBody)

    // Assert user's information
    expect(response.status()).toBe(200)
    expect(responseBody.id).toBe(1)
    expect(responseBody.email).toBe("emily.johnson@x.dummyjson.com")
    expect(responseBody.firstName).toBe("Emily")
    expect(responseBody.lastName).toBe("Johnson")
})
    // 3) test for POST request
test("verify POST request", async ({ request }) => {
    const newUser = {
            "name": "Nicolas",
            "email": "nico@gmail.com",
            "password": "1234",
            "avatar": "https://picsum.photos/800"
          }
    const response = await request.post('https://api.escuelajs.co/api/v1/users/', {
        data: newUser
    })
    const responseBody = await response.json()
    console.log(responseBody)

    // Verify the response status
    expect(response.status()).toBe(201)
    expect(responseBody.name).toBe(newUser.name)
    expect(responseBody.email).toBe(newUser.email)
    expect(responseBody.password).toBe(newUser.password)
    expect(responseBody.avatar).toBe(newUser.avatar)
})
    // 4) test for PUT request
test("verify PUT request", async ({ request }) => {
    const seedUser = {
        "name": "Nicolas Seed",
        "email": `nico.seed.${Date.now()}@gmail.com`,
        "password": "1234",
        "avatar": "https://picsum.photos/800"
    }
    const createResponse = await request.post('https://api.escuelajs.co/api/v1/users/', {
        data: seedUser
    })
    const createdUser = await createResponse.json()

    const updatedUser = {
        "name": "Nicolas Updated",
        "password": "1234Updated"
    }
    const response = await request.put(`https://api.escuelajs.co/api/v1/users/${createdUser.id}`, {
        data: updatedUser
    })
    const responseBody = await response.json()
    console.log(responseBody)

    // Verify the response status
    expect(response.status()).toBe(200)
    expect(responseBody.name).toBe(updatedUser.name)
    expect(responseBody.password).toBe(updatedUser.password)
})

    // 5) test for DELETE request
test("verify DELETE request", async ({ request }) => {
    const seedUser = {
        "name": "Nicolas To Delete",
        "email": `nico.delete.${Date.now()}@gmail.com`,
        "password": "1234",
        "avatar": "https://picsum.photos/800"
    }
    const createResponse = await request.post('https://api.escuelajs.co/api/v1/users/', {
        data: seedUser
    })
    const createdUser = await createResponse.json()

    const response = await request.delete(`https://api.escuelajs.co/api/v1/users/${createdUser.id}`)

    expect(response.status()).toBe(200)
    })
})