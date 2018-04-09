<template>
  <div>
		<div id="shouye">
			<div class="lunbo"></div>
			<div class="home-dahez">
				<div class="bao">
					<div class="home-left">
						<div class="yibufen" >
							<img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8zNTMyOGMwMzgzNDcxMjYzYjFjMzYzNThjYjVjOTc3OC02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							<img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xZWM4Yzg2ODQ5MjVkMDVhODc4MDg4M2JhYzQxOThmOC02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							<img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8yMmEyZTgzODY3ZDk2MzU3ZDA2YWU1N2VmYjE1NzNiZC00NzR4MTYxLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							<img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xODUxNThhNTMyNzA3OTcwMDM0ZjUwZDFkZjAyMGQxZi02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
						</div>
						<div class="erbufen">
							<div class="erbufen-yi">
								<p>全新商铺</p>
								<p>-New Shops-</p>
							</div>
							<!--<Aa :a='b'></Aa>-->
							<Aa a='1'></Aa>
							<div class="erbufen-si">
								<p>浏览更多新楼盘</p>
							</div>
						</div>

						<div class="erbufen">
							<div class="erbufen-yi">
								<p>全新商铺</p>
								<p>-New Shops-</p>
							</div>
							<Aa a='2'></Aa>
							<div class="erbufen-si">
								<p>浏览更多新楼盘</p>
							</div>
						</div>

						<div class="erbufen">
							<div class="erbufen-yi">
								<p>全新商铺</p>
								<p>-New Shops-</p>
							</div>
							<Aa a='3'></Aa>
							<div class="erbufen-si">
								<p>浏览更多新楼盘</p>
							</div>
						</div>
					</div>
					<div class="home-right2">
						<Right></Right>
						<div class="home-right2-er">
							<p class="p1"><span class="kuai"></span>联系我们 - CONTACT</p>
							<p class="p2">Tom<img src="../images/0226.png"></p>
							<a class="aa">188 0000 0000  /  008-6666 6666</a>
							<p class="p2">Tom<img src="../images/0226.png"></p>
							<a class="aa">188 0000 0000  /  008-6666 6666</a>
							<p class="p2">Tom<img src="../images/0226.png"></p>
							<a class="aa">188 0000 0000  /  008-6666 6666</a>
						</div>
						<div class="home-right2-san">
							<p class="p1"><span class="kuai"></span>在线表单 - FORM</p>
							<div class="ddd">
								<input type="text" placeholder="称呼">
								<input type="text" placeholder="邮箱">
								<input type="text" placeholder="电话">
								<input type="text" placeholder="内容">
								<input type="text" placeholder="验证码">
								<button>提交</button>
							</div>
						</div>
						<div class="home-right2-si">
							<p class="p1"><span class="kuai"></span>地址 - ADDRESS</p>
							<p>邮箱: info@realestate.com</p>
							<p>地址：上海市静安区南京西路时代大厦</p>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'三遍
import Aa from '@/components/Aa.vue'
import Right from '@/views/Right.vue'
export default {
	components: {
		Aa,
		Right
  },
  name: 'home',
	//   data(){
	// 	  return {
	// 		 arr:[],
	// 		//  b:this.$router.params.fenlei
	// 		  }
	// 	  },
		// watch:{
		// 	'$router'(){
		// 		this.$http.post('http://localhost:2000',
		// 		{fenlei:this.$router.params.fenlei},
		// 		{emulateJSON:true}).then(e=>this.state=e.body)
		// 	}
		// },
// 	  created(){
// 		  this.$http.post('http://localhost:2000',{},{emulateJSON:true}).then(function(e){
// 			  this.arr=e.body
// 		  })
	  
//   }
}
</script>

<style>
.home-dahez{width: 100%;overflow: hidden;}
.bao{width: 70%;margin: 0 auto;display: flex}
.home-left{width: 68%;}
.yibufen{width: 100%;}
.yibufen img{width: 49%;margin:0 1% 1% 0}
.home-right2{width: 28%;margin-left: 4%}
.home-right2-yi{background: #F7F7F7;padding: 0 10px 0 20px}
.p1{padding: 20px 0;display: flex;line-height: 38px;}
/*.p1 span{border: 1px solid #000;padding: 5px;}*/
.home-right2-yi a{display: inline-block}
.home-right2-yi ul{margin: 10px 0 20px 0}
.home-right2-yi ul a{color: #999999}
.home-right2-yi ul li:nth-of-type(1) a{color:#000}
.home-right2-er{background: #F7F7F7;padding-left: 20px}
.p2{display: flex;align-items: center;font-weight: bold;margin-bottom: 10px}
.p2 img{margin-left: 10px;display: inline-block}
.aa{color: blue;display: inline-block;margin-bottom: 10px}
.home-right2-san{background: #F7F7F7;margin-top: 20px;padding-left: 10px}
.home-right2-san input{outline: none;width: 100%;border: none;
border-bottom: 1px solid #DBDBDB;background: #F7F7F7}
.kuai{width:20px;height:20px;background:#000;display: inline-block;margin: 10px}
.ddd{width: 80%;height: 370px;background: #f7f7f7;box-sizing: border-box;padding-left: 20px;}
.ddd>div{float: left;}
.ddd>div:nth-of-type(1){width: 20px;height: 20px;background:#000;}
.ddd>div:nth-of-type(2){width:150px;height: 20px;line-height: 20px;font-weight: bolder;
font-size: 12px;}
.ddd>input{width: 100%;height: 40px;outline: none;border:none;
border-bottom:1px solid #ccc;background: none;}
.ddd>button{width: 130px;height: 35px;background-color: #333;border: none;
margin-top: 20px;float: left;color: white;}
.home-right2-si{background: #f7f7f7;margin-top:20px;padding-left: 20px}
.home-right2-si p{margin-left: 5px;margin-bottom: 10px}
</style> 

