<template>
    <div>
        首页内容
        {{name}}
        <button @click="xiu">修改</button>
    </div>
</template>

<script>
export default {
    name:'home',

    computed:{
        name(){
           return this.$store.state.username
            
        }

    },
    methods:{
        xiu(){
            this.$store.dispatch('xiu','1909A')
        }
    }
    
}
</script>

<style>
    
</style>