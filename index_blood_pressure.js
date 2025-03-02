const port = 2286;

const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const path=require('path');
app.use(express.static(path.join(__dirname,"")));

let db_M = require('../blood_database');
global.db_pool=db_M.pool;

global.htmlspecialchars=require('htmlspecialchars');

/*let Blood_Pressures=[];

app.post('/blood',(req,res) => {
let user={};
const BPCheckTime=new Date()+180;
user.name=req.body.name;
user.high=Number(req.body.high);
user.low=Number(req.body.low);
user.pulse=Number(req.body.pulse);
user.date=(BPCheckTime);
Blood_Pressures.push(user);
console.log(Blood_Pressures);
res.status(200).json("ok");
});

app.get('/blood',(req,res) => {
res.status(200).json(Blood_Pressures);
});

app.put('/blood',(req,res) => {
let user={};
let idx=req.body.id;
const BPCheckTime=new Date()+180;
user.name=req.body.name;
user.high=Number(req.body.high);
user.low=Number(req.body.low);
user.pulse=Number(req.body.pulse);
user.date=(BPCheckTime);
console.log(user);
Blood_Pressures[idx]=user;
res.status(200).json("ok");
});

app.delete('/blood',(req,res) => {
let idx=req.body.id;
Blood_Pressures.splice(idx,1);
res.status(200).json(Blood_Pressures);
});*/
//////////////////////////////////
const FR_R=require('../routers/fronted_router');
app.use('/blood',FR_R);

const Blood_R=require('../routers/blood_R');
app.use('/B/',Blood_R);    //http://localhost:4506/B/blood שיופיע ביו אר אל של הדף הקדמי
/////////////////////////////////

app.get('/admin',(req,res) => {
res.status(200).sendFile(path.join(__dirname,"../views/front_page_blood_pressure.html"));
});

app.get('/',(req,res) => {
res.status(200).sendFile(path.join(__dirname,"../views/front_page_blood_pressure.html"));
});

app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
});