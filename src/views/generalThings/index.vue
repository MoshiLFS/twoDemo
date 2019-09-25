<template>
    <div id='generalThings' style='width:100%;height:100%;'>
        <header>
            <input type="text" placeholder="搜索商品">
        </header>
        <div class="main" >
            <div class="left">
                <li v-for='(item,index) in data' :key='index' @click='getData(item.id)'>{{item.name}}</li>
            </div>
            <div class="right">
                <div class="content">
                    <li v-if='rightData.currentCategory'>
                        <img  :src='rightData.currentCategory.img_url' />
                        <!-- {{rightData.currentCategory.img_url}} -->
                        <h3>{{rightData.currentCategory.name}}</h3>
                        <div class="main22">
                            <div class="main2" v-for='(item,index) in rightData.currentCategory.subCategoryList' :key='index'>
                                <dl>
                                    <dt>
                                        <img :src="item.wap_banner_url" alt="">
                                    </dt>
                                    <dd>
                                        <p>{{item.name}}</p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
// import Buttom from '../../components/bottom.route.vue/index.vue'
import axios from 'axios'
export default {
    data(){
        return{
            data : [], rightData : {}
        }
    },
    components: {
        // Buttom,
    },
    // computed: mapState({
    //     abc : store=>store.generalThing.listType
    // }),

     methods:{
        getData(id){
            axios.get(`http://169.254.19.71:8888/catalog/current?id=${id}`).then(res=>{
                this.rightData = res.data.data;
                console.log(this.rightData);
            })
        }
    },
    
    created(){
       axios.get('http://169.254.19.71:8888/catalog/index').then(res=>{
           this.data = res.data.data.categoryList;
            console.log(this.data);
       })
    }
}
</script>
<style lang="scss" scoped>
   

    header{
        height:.8rem;display:flex;padding:.2rem .4rem;background:#fff;
        >input{
            background:#eee;flex:1;text-align:Center;outline:0;border:0;
        }
    }

    .main{
        flex:1;display:flex;
        >.left{
            width:30%;
            >li{
                height:.8rem;display:flex;justify-content:center;align-items:center;
            }
        }
        >.right{
            flex:1;background:#fff;overflow:auto;
            >.content{
                width:100%;height:100%;
                >li{
                    width:100%;height:100%;
                    >img{
                        width:100%;height:2.5rem;
                    }
                }
            }
        }
    }

    .main22{
        display:flex;flex-wrap:wrap;
        >.main2{
            width:50%;
        }
    }

    
</style>