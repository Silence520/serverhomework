const Koa = require('koa') // koa 2.x 
const router = require('koa-simple-router')
 const serve = require('koa-static');
 const convert = require('koa-convert');
 const path = require('path');
 const render = require('koa-swig');
 const co = require('co');
 const axios = require('axios');


const app = new Koa()
 
const mysql  = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'thumbs'
});

connection.connect();
// console.log(connection.connect())


app.context.render = co.wrap(render({
	 root: path.join(__dirname, 'views'),
	 autoescape: true,
	 cache: 'memory', // disable, set to false 
	 ext: 'html',
	varControls:['[[',']]'],
	writeBody:false
}));



app.use(router( _ => {
	  _.get('/get', async (ctx, next) => {
	  	  console.log('12');
	  	await axios({
		method:'POST',
		url:'http://localhost:8050/homeworlk20180129/servers/data.php',
		data:{
		       number:1212,
		}
		})
	  	  .then(function (res) {
	  	  	console.log('13');
	  	   	 console.log(res.status);
	  	   	 console.log(res.config);
     		  	ctx.body=({
    		     		'msg':'成功',
    		     		'code':0
    	   	 	})
	  	  })
	  	  .catch(function (error) {
	  	  	console.log('14');
	  	    // console.log(error);
	  	  });


	  	 // ctx.body='121121212223';
  		// await next();
	  	

	  	// await new Promise((resolve,reject)=>{
  		// var post  = {
  		//      		number:1212,
  		// 	};
  		// connection.query("INSERT INTO  statistics SET ?", post, (error, results, fields)=> {
  		//  	console.log(error)
	   //   		if(error){
	   //   			reject();
	   //   		}else{
				// resolve();
	   //   		}
  		// })
	  	// }).then(()=>{
 		 //  	ctx.body=({
		  //    		'msg':'成功',
		  //    		'code':0
	   // 	 	})
	  	// }).catch(()=>{
			 // ctx.body=({
  		//    		'msg':'失败',
  		//    		'code':1
	  	//   	})
	  	// })



	  	 // UPDATE `Statistics` SET `number`=2 WHERE `id`=3"
	  	// connection.query('UPDATE Statistics SET number= ? WHERE dd = ?', [ 10, 4], function (error, results, fields) {
	  	// 	console.log(results)
	  	//   if (results) {
	  	//   	// throw error;
	  	//   	 ctx.body=({
  		//    		'msg':'失败',
  		//    		'code':1
	  	//   	})
	  	//   }else{
	  	//   	// console.log(results)
	   	//  		  ctx.body=({
		  //    		'msg':'成功',
		  //    		'code':0
	   	//  			})

	  	//   }
	  	// });
	  })
	  _.get('/index',  async (ctx, next) => {
	      	const sleep = async (ms) => {
	      	     return new Promise(resolve => {
	      	       setTimeout(() => {
	      	         		resolve(true)
	      	       }, ms)
	      	     })
	      	   }
	      	   await sleep(1000)
	      	   ctx.body = `异步处理后返回`
	  })
	    _.get('/index/index', async(ctx, next) => {
	        	ctx.body=await ctx.render('index.html')
	  })
}));


app.use(convert(serve(path.join(__dirname ,'./public'))));
app.listen(4000);

// http://www.magicermine.com/demos/curl/curl/curl.html