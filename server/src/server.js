const express = require('express'); 
const path = require('path'); 
const MetaAuth = require('meta-auth'); 

const app = express(); 
const bodyParser = require('body-parser'); 
const metaAuth = new MetaAuth(); 

let address; 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/login', (req, res) => { 
    console.log("received");
    res.send({ 
        message: 'SUCCESS'
    })
})

// app.get('/',(req, res)=> { 
//     res.sendFile(path.join(__dirname + '/index.html')); 
// })

// Login Function 
app.get('/login/:MetaAddress', metaAuth, (req, res) => {
    // Request a message from the server
    if (req.metaAuth && req.metaAuth.challenge) {
      res.send(req.metaAuth.challenge)
    }
  });

// Meta Mask Authentication 
app.get('/auth/:MetaMessage/:MetaSignature', metaAuth, (req,res)=> { 
    if(req.metaAuth && req.metaAuth.recovered){ 
        res.send(req.metaAuth.recovered); 
    } else { 
        res.status(400);
    }
})

app.listen(8081, ()=>{
    console.log("Listening on 8081"); 
})