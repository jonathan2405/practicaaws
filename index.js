const morgan=require('morgan');
const express=require('express');
const app=express();
const port = 3000
app.use(express.json());
app.use(morgan('combined'));
app.use(morgan('dev'));
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('puerto',4000);



app.set('nombreApp','Aplicacion para manejo de gastos SRI');
console.log(app.get('nombreApp'));

app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.get('/misitio', (req,res)=>{
 res.send('Bienvenido a mi sitio web');
});


   
app.get('/misitio/gastos', (req,res)=>{
    res.json(
        {
        gasto:'Salud',
        monto:14575.60,
        informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
        }
        );
   })

app.get('/misitio/calculo', (req,res)=>{
    console.log(req.body);
    res.send('Calculo impuesto a la renta');
})


app.put('/misitio/usuario/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Datos del usuario '+(req.params.id)+' actualizados');
})

app.post('/misitio/usuario/:id',(req, res)=>{
    console.log(req.body); 
    console.log(req.params);
    res.send('Usuario nuevo registrado');
    })

app.delete('/misitio/usuario/:id', (req,res)=>{
    res.send('Usuario '+ (req.params.id) +' borrado');
});
       
   

app.get('/misitio/about', (req,res)=>{
    res.send('<h1>Acerca de nosotros</h1>');
   });

app.get('/misitio/gastos/vivienda', (req,res)=>{
    res.send('<h1>Página Viviendas</h1>');
})

app.get('/misitio/gastos/salud', (req,res)=>{
    res.send('<h1>Página Salud</h1>');
})



app.listen(port, ()=>{
 console.log('Servidor escuchando en el puerto ' + port);
})

app.listen(app.get('puerto'), ()=>{
    console.log('Nombre de la App',app.get('nombreApp'));
    console.log('Puerto del servidor',app.get('puerto'));
   })
   
