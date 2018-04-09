const express=require('express')
const bodyparser=require('body-parser')
const mysql=require('mysql')
const app=express()

app.use(bodyparser.urlencoded({}));

app.listen(2000,()=>{
    console.log('ok')
}) 

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'biao',
    port:'3306'
})
 

app.use('/a',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection((err,con)=>{
        if(err) throw err;
        con.query(`SELECT * FROM loupan WHERE fenlei=${req.body.fenlei} limit ${req.body.one},${req.body.two}`,(err,rows)=>{
           if(err) throw err;  
           console.log(req.body.fenlei)
           res.send(rows);
        })
    })
})


app.use('/b',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection((err,con)=>{
        if(err) throw err;
        con.query(`SELECT * FROM news`,(err,rows)=>{
           if(err) throw err;  
           res.send(rows);
        })
    })
})

app.use('/news',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection((err,con)=>{
        if(err) throw err;
        con.query('SELECT * FROM news',(err,rows)=>{
            if(err) throw err;
            res.send(rows);
        })
    })
})