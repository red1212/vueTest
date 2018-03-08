<template>
  <div id="app">
   <div @click="getmessage">dfd</div>
  </div>
</template>

<script>
	import '../node_modules/axios/lib/axios.js'
	import child from './components/head.vue'
	/*export default {
	  name: 'app',
		methods:{
			getmessage:function(){
				var url="http://49.4.8.123:8083/product/subProducts";
				//_this=this;
				this.$http.get(url).then(function(result){
					console.log(result.data);
				});
			}
		}
	}*/
	export default{
		name:'app',
		methods:{
			getmessage:function(){
				this.$router.push({name:'param',params:this.stu})
			}
		}
	}
</script>

<style lang="scss">

</style>
