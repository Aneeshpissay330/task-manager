import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';
dotenv.config();

const doc = {
    info: {
        title: 'Task Management API',
        version: '1.0.0',
        description: 'API documentation for a task management application'
    },
    host: process.env.SWAGGER_HOST,
    schemes: [process.env.SWAGGER_SCHEME],
    tags: [
        { name: 'Auth', description: 'Authentication endpoints' },
        { name: 'Category', description: 'Category management endpoints' },
        { name: 'Tasks', description: 'Task management endpoints' },
        { name: 'User', description: 'User management endpoints' }
    ]
};

const outputFile = './swagger.json';
const routes = [
    './app.js'
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc).then(async () => {
    await import('./server.js'); // Your project's root file
});