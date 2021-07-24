const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../database.js');

// obtener todos los clientes
router.get('/cliente', (req, res) => {
  mysqlConnection.query('SELECT * FROM cliente', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// obtener un cliente
router.get('/cliente/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM cliente WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// borrar un cliente
router.delete('/cliente/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM cliente WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Cliente Borrado'});
    } else {
      console.log(err);
    }
  });
});


// registrar un Cliente
router.post('/cliente', (req, res) => {  
const { primernombre, segundonombre, primerapellido,segundoapellido,tipodedocumento,documento,celular,direccion,correo,estado } = req.body;
connection.query('INSERT INTO cliente SET ? ',
{
  primernombre,
  segundonombre,
  primerapellido,
  segundoapellido,
  tipodedocumento,
  documento,
  celular,
  direccion,
  correo,
  estado
}
, (err, rows, fields) => {
if(!err) {
  res.json({status: 'Cliente Agregado'});
} else {
  console.log(err);
}
});
});



// obtener todos los mecanicos
router.get('/mecanico', (req, res) => {
  mysqlConnection.query('SELECT * FROM mecanico', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// obtener un mecanico
router.get('/mecanico/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM mecanico WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// borrar un mecanico
router.delete('/mecanico/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM mecanico WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'mecanico Borrado'});
    } else {
      console.log(err);
    }
  });
});

// registrar un mecanico
router.post('/mecanico', (req, res) => {      
  const { primernombre,segundonombre,primerapellido,segundoapellido,tipodedocumento,documento,celular,direccion,correo,estado } = req.body;
  connection.query('INSERT INTO mecanico SET ? ',
    {
      primernombre,
      segundonombre,
      primerapellido,
      segundoapellido,
      tipodedocumento,
      documento,
      celular,
      direccion,
      correo,
      estado
    }
  , (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Mecanico Agregado'});
    } else {
      console.log(err);
    }
  });
});

// obtener todos los repuestos
router.get('/repuestos', (req, res) => {
  mysqlConnection.query('SELECT * FROM repuestos', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// obtener un repuesto
router.get('/repuestos/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM repuestos WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// borrar un repuesto
router.delete('/repuestos/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM repuestos WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'repuesto Borrado'});
    } else {
      console.log(err);
    }
  });
});

// registrar un repuesto
router.post('/repuestos', (req, res) => {
  const { nombre, precio, cantidad } = req.body;
  connection.query('INSERT INTO repuestos SET ? ',
    {
      nombre,
      precio,
      cantidad
    }
  , (err, rows, fields) => {
    if(!err) {
      res.json({status: 'repuesto Agregado'});
    } else {
      console.log(err);
    }
  });
});

// obtener todos los servicios
router.get('/servicios', (req, res) => {
  mysqlConnection.query('SELECT * FROM servicios', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// obtener un servicio
router.get('/servicios/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM servicios WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// borrar un servicio
router.delete('/servicios/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM servicios WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'servicio Borrado'});
    } else {
      console.log(err);
    }
  });
});

//
router.post('/servicios', (req, res) => {
  const { nombre, precio, cantidad } = req.body;
  connection.query('INSERT INTO servicios SET ? ',
    {
      nombre,
      precio,
      cantidad
    }
  , (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Servicio Agregado'});
    } else {
      console.log(err);
    }
  });
});


module.exports = router;
