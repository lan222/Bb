<template>
  <div>
      <div class="erbufen-er"  v-for="i in arr">
				<img :src="i.img" alt="">
			</div>
			<div class="erbufen-san">
				<div class="erbufen-left"  v-for="i in arr">
				<p>{{i.name}}</p>
				<p>{{i.des}}</p>
				<p>{{i.huxing}}</p>
				<p>{{i.price}}</p>
				</div>
			</div>
   <router-view/>
  </div>
</template>
<script>
export default {
	data(){
		  return {
			  arr:[],
				aaa:"",
				c:''
			  }
		  },
	
watch:{
      arr:function(){},
      '$route'(){
        if(this.$route.params.fenlei==1){
        this.aaa="全新楼盘"
      }
      else if(this.$route.params.fenlei==2){
        this.aaa="二手楼盘"
      }
			else if(this.$route.params.fenlei==3){
        this.aaa="全新商铺"
      }
        this.$http.post('http://localhost:2000/a',{fenlei:this.a,one:0,two:3},{emulateJSON:true}).then(e=>this.arr=e.body)
      }
    },

props:{
	a:String
},

  created(){
		this.$http.post('http://localhost:2000/a',{fenlei:this.a,one:0,two:3},{emulateJSON:true}).then(e=>this.arr=e.body)
		// alert(this.a)
		if(this.a==1){
        this.aaa="全新楼盘"
				this.c='-New Apartment-'
      }
      else if(this.a==2){
        this.aaa="二手楼盘"
				this.c='-New Shops-'
      }
			else if(this.a==3){
        this.aaa="全新商铺"
				this.c='-Second Hand-'
      }
			  
}
}
</script>
<style>
.erbufen-yi p{text-align: center}
.erbufen-yi p:nth-child(1){font-size: 24px;font-weight: bold}
.erbufen-yi p:nth-child(2){font-size: 16px;color: #999}
.erbufen-yi{padding: 20px 0;background-color: #F7F7F7}
.erbufen-er img{width: 32%;margin-right: 1%;float: left}
.erbufen-san{display: flex;width: 100%} 
.erbufen-left{width: 31%;padding: 15px;background:#fff;
border-right: 5px solid #f7f7f7;overflow: hidden;}
.erbufen-left p{font-size: 14px;}
.erbufen-left p:nth-of-type(1){font-size: 18px;font-weight: bold}
.erbufen-si{width:100%;padding: 20px 0;background-color: #F7F7F7;
display: flex;justify-content: center}
.erbufen-si p{width:20%;padding: 5px; border:1px solid blue;text-align: center;}

</style>
