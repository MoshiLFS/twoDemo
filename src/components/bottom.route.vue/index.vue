<template>
    
        <ul>
            <li v-for="(item,index) in listArr" :key='index' @click='clickRouter(item)'>{{item.item}}</li>
        </ul>
    
</template>
<script>
export default {
    data(){
        return {
            listArr : [
                {item : '首页' , path : '/'},
                {item : '专题' , path : '/classfiy'},
                {item : '分类' , path : '/generalThings'},
                {item : '购物车' , path : '/shoppingTrolley'},
                {item : '个人' , path : '/personage'}
            ] 
        }
    },
    methods: {
        clickRouter(item){
            this.$router.push(item.path)
        }
    }
}
</script>

<style lang='scss'>
    ul{ 
        display:flex;width:100%;height:2.60667rem;background:#fff;border-top: 1px solid #d9d9d9;
        >li{
            flex:1;display:flex;justify-content:center;align-items:center;
        }
    };
</style>