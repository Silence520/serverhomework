// const axios=require('axios');
// console.log(axios)


axios.get('/get')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// $(function(){
// 	var stynone=`<style>:root{--vcolor: #ddd;}</style>`;
// 	var styblock=`<style>:root{--vcolor: #ffd5c5;}</style>`;
//  	var num=0;
//  	$(document).on('click','.hand',function(){
//  		if(num<10){
//  			$(styblock).appendTo('head');
//  		}else{
//  			num=0;
//  			$(stynone).appendTo('head');

//  		}
// 	})	
// })