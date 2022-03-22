import swaggerAutogen from 'swagger-autogen';

const outputFile = 'app/swagger-output.json';
const endpointsFiles = ['app/app.js'];

swaggerAutogen()(outputFile, endpointsFiles);
