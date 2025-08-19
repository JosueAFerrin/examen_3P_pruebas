const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//endpoint de respuesta
app.get('/', (req, res) => {
  res.send('Integracion continua funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});