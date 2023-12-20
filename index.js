const express = require('express');
const app = express();
const port = 9000;


const task = [
    {
        id: '123456',
        isCompleted: false,
        descripcion: "hacer aseo"
    },
]
app.get('/task', (req, res) => {
    res.json(task);
  });

  
app.listen(port,()=>
{
    console.log('Servidor Express escuchando en puerto: ', port);
})
