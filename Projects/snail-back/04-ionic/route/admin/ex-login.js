const express=require('express');
//const common=require('../../libs/common.js');

var router = express.Router();

const mysql=require('mysql');
var db = mysql.createPool({host:'192.168.62.144',user:'root',password:'ddd',database:'ionic'});



//----------------------------------------------------------------------------------------------
//get

/*
router.get('/',(req,res)=>{
  res.render('admin/login.ejs',{});

});
*/


router.post('/',function(req,res){
  var chunk='';
  req.on('data',(data)=>{
    chunk=JSON.parse(data); 
    compare(chunk.tel,chunk.pwd,res);
    console.log('tel:',chunk.tel); 
  });
});
/*
  res.setHeader('Access-Control-Allow-Methods', '*');
  console.log('req:',req.headers);
  var json={status:20}; 
  //res.send('json');
  res.json(json);
  res.end('hello world');
*/
/*
  //res.send('我是admin').end();
  var name=req.body.name;
  //var password=common.md5(req.body.password+common.MD5_SUFFIX);
  var password=req.body.password;

  db.query(`SELECT *FROM text_table WHERE name='${name}'`,
    (err,data)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        if(data.length==0){
          res.status(400).send('no this admin').end();
        }else{
          if(data[0].password==password){
            //成功
            
            req.session['admin_id']=data[0].ID;
            res.redirect('/admin/');
          }else{
            res.status(404).send('this password is incorrect').end();
          }
        }
      }
    });

    */
//console.log(req.body);
//res.render('admin/login',{});

  
function compare(username,password,res){
  const sql='SELECT * FROM user_table WHERE username=?';
  /*db.query('SELECT * FROM user-table WHERE ID=?',(err)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end();
    }else{*/

      if(!password){
        console.log('密码不能为空');
        res.end('0');
                  
      }
      if(!username){
        console.log('用户名不能为空');
        res.end('-3');
                  
      }
      if(username && password){
        db.query(sql,[username],(err,result)=>{
          if(err){
            console.error('Error:',err);
            res.status(500).end('DB ERROR!');
                                        
        }
          if(!result[0]){
            console.log('用户名不存在');
            res.end('-1');
                                            
          }else{
            if(result[0].password==password){
              console.log('res:',result);
              //登陆成功
              console.log('Success');
              res.end('1');
                                                   
            }else{
              console.log('密码错误');
              res.end('-2');
                                                          
            }
                    
      }
               
    });
  }
}

module.exports = router;

