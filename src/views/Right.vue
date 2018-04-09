<template>
  <div>
						<div class="home-right2-yi">
							<p class="p1"><span class="kuai"></span>楼市动向 - NEWS<span>阅读更多</span></p>
							<ul  v-for="i in arr">
								<li><a href="javascript:;">{{i.tit}}</a></li>
								<li><a href="javascript:;">{{i.con}}</a></li>
							</ul>
							<!--<ul>
								<li><a href="javascript:;">攔金31億元！中山第四季度土地成...</a></li>
								<li><a href="javascript:;">In this chapter in our series ...</a></li>
							</ul>
							<ul>
								<li><a href="javascript:;">攔金31億元！中山第四季度土地成...</a></li>
								<li><a href="javascript:;">In this chapter in our series ...</a></li>
							</ul>
							<ul>
								<li><a href="javascript:;">攔金31億元！中山第四季度土地成...</a></li>
								<li><a href="javascript:;">In this chapter in our series ...</a></li>
							</ul>
							<ul>
								<li><a href="javascript:;">攔金31億元！中山第四季度土地成...</a></li>
								<li><a href="javascript:;">In this chapter in our series ...</a></li>
							</ul>
							<ul>
								<li><a href="javascript:;">攔金31億元！中山第四季度土地成...</a></li>
								<li><a href="javascript:;">In this chapter in our series ...</a></li>
							</ul>-->
						</div>
                        <router-view/>
  </div>
</template>

<script>
import Right from '@/views/Right.vue'
    export default {
         components: {
		    Right
        },
        data(){
		  return {
			  arr:[]
			  }
		  },
          watch:{
              '$route'(){
            this.$http.post('http://localhost:2000/b',{},{emulateJSON:true}).then(e=>this.arr=e.body)}
          
         },
        created(){
		    this.$http.post('http://localhost:2000/b',{},{emulateJSON:true}).then(e=>this.arr=e.body)
        }
    }
</script>
<style>
.home-right2{width: 28%;margin-left: 4%}
.home-right2-yi{background: #F7F7F7;padding: 0 10px 0 20px}
.p1{padding: 20px 0;display: flex;line-height: 38px;}
/*.p1 span{border: 1px solid #000;padding: 5px;}*/
.home-right2-yi a{display: inline-block}
.home-right2-yi ul{margin: 10px 0 20px 0}
.home-right2-yi ul a{color: #999999}
.home-right2-yi ul li:nth-of-type(1) a{color:#000}
</style>
