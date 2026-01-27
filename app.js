
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// HEALTH CHECK ENDPOINT (Very Important for Front Door)
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

// HOME PAGE
app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Node.js running on Azure App Service! APP2-SECONDARY🚀</h1>
    <p>This app was deployed using Azure Pipelines CI/CD</p>
    <p>Current time: ${new Date().toLocaleString()}</p>
  `);
});

// START SERVER
app.listen(port, () => {
  console.log(`Server is running → http://localhost:${port}`);
});
