<template>
  <div>
		<div class="font">首页>{{aaa}}</div>
		<div class="Nice-hezi"><div class="Nice-nei">
			<Aa a="1"></Aa><Right></Right>
      <Aa a="2"></Aa>
      <Aa a="3"></Aa>
			</div></div>
   <router-view/>
  </div>
</template>
<script>
import Aa from '@/components/Aa.vue'
export default {
	components: {
		Aa
  },
	data(){
		  return {
			  arr:[],
				aaa:""
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
        this.$http.post("http://localhost:2000/a",{fenlei:this.$route.params.fenlei,one:0,two:9},{emulateJSON:true}).then(e=>this.arr=e.body)
      }
    },

  created(){
		if(this.$route.params.fenlei==1){
        this.aaa="全新楼盘"
      }
      else if(this.$route.params.fenlei==2){
        this.aaa="二手楼盘"
      }
      else if(this.$route.params.fenlei==2){
        this.aaa="全新商铺"
      }
		  this.$http.post('http://localhost:2000/a',{fenlei:this.$route.params.fenlei,one:0,two:9},{emulateJSON:true}).then(e=>
			  this.arr=e.body
		  )
}
}
</script>
<style>
.Nice-hezi{width: 100%}.Nice-nei{width: 70%;margin: 0 auto;}
.erbufen{border: 1px solid #E2E2E2;margin: 0 0 50px 0}
.font{margin-top: 100px;background: #e2e2e2;padding:50px 0 50px 250px}
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
