# Express Redis CRUD Sample Application

Simple Express.js server to practice CRUD operations with Redis. This project demonstrates how to set up a basic RESTful API using Node.js, Express, and Redis for creating, reading, updating, and deleting data. Ideal for beginners looking to understand Redis integration with Node.js.

## Run

- Fork or clone this repository, and install required module with the command `npm install`.

- Find your Redis client configuration.

    The application uses Redis cloud(free) database. Therefore, you can create your own Redis account for free and test it.

    You will see the free database is already ready for you.

    Find your configuration here. And copy/paste it on the line 7-9 of `index.js`.

- Run server - `node index.js`

## Endpoint/Postman

Check if the application with Postman.

- Create (POST)

    http://localhost:3000/set

    `body`
    ```
    {
        "key": "exampleKey",
        "value": "exampleValue"
    }
    ```
    
- Read (GET)

    http://localhost:3000/get/exampleKey
    
- Update (PUT)

    http://localhost:3000/update/exampleKey

    `body`
    ```
    {
        "key": "exampleKey",
        "value": "newValue"
    }
    ```
    
- Delete (DELETE)

    http://localhost:3000/delete/exampleKey

