<template>
  <div>
      <div class="links">
          <router-link to="/home">首页</router-link>
          <router-link to="/cate">分类</router-link>
          <router-link to="/about">关于</router-link>
      </div>

      <router-view></router-view>
  </div>

</template>

<script>
export default {
    name:'app',
    data(){
        return {
            msg:'hello vue',
            list:[
                {id:1001,name:'alice'},
                {id:1002,name:'alice222222'},
                {id:1003,name:'alice3333333333'},
            ]
        }
    }
}
</script>

<style lang="scss">
$bc:#f00;
   .list li {
       border:1px solid $bc;
       width:60%;
       
   } 
</style>