const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


// HEALTH CHECK ENDPOINT (Very Important for Front Door)
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DeployX App Service 1</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #0d47a1, #1976d2);
            color: white;
            text-align: center;
          }

          h1 {
            margin-top: 40px;
            font-size: 38px;
            font-weight: bold;
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            width: 70%;
            margin: 40px auto;
          }

          .card {
            background: rgba(255, 255, 255, 0.18);
            padding: 20px;
            border-radius: 16px;
            font-size: 20px;
            font-weight: 600;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }

          .footer {
            margin-top: 40px;
            font-size: 18px;
            opacity: 0.9;
          }
        </style>
      </head>

      <body>
        <h1>Welcome to Team 04 App Service 2</h1>

        <div class="grid">
          <div class="card">Inamul Haque</div>
          <div class="card">Sunny Rathee</div>
          <div class="card">Pratham Singh Sengar</div>
          <div class="card">Satyam Aditya</div>
          <div class="card">Nishtha Yadav</div>
          <div class="card">Luv Pahwa</div>
        </div>

        <div class="footer"> 💙</div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running → http://localhost:${port}`);
});
