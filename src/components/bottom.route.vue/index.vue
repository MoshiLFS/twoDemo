<template>
    <div>
        <ul>
            <li v-for="(item,index) in listArr" @click='clickRouter(item)'>{{item.item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            listArr : [
                {item : '首页' , path : '/'},
                {item : '分类' , path : '/classfiy'},
                {item : '识物' , path : '/generalThings'},
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
        position: fixed;bottom:0;left:0;display:flex;width:100%;height:1.30667rem;border-top: 1px solid #d9d9d9;
        >li{
            flex:1;display:flex;justify-content:center;align-items:center;
        }
    };
</style>