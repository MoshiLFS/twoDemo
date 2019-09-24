<template>

    <div className='recommend'>
        <header>
            <Swiper />
        </header>
        <h3>新品首发</h3>
            <!-- {{itemData}} -->
        <div className='main'>
            <dl v-for='(item,index) in itemData' :key='index'>
                <dt>
                    <img :src="item.list_pic_url" alt="">
                </dt>
                <dt>
                    <p>{{item.name}}</p>
                    <p>{{item.retail_price}}</p>
                </dt>
            </dl>
        </div>
        
        <Bottom/>
    </div>
</template>
<script>
import Bottom from '../../../components/bottom.route.vue/index.vue'
import Swiper from '../../../components/swiper/index'
import { mapState } from 'vuex'

export default {
    components: {
        Bottom,Swiper
    },
    computed: mapState({
        itemData : store=> store.recommend.indexList.newGoodsList
    }),
   data() {
       return {
           
       }
   },
   mounted() {
       this.$store.dispatch('recommend/msGetList')
   },
}
</script>
<style lang="scss">
    h3{height:1rem;display:flex;justify-content:center;align-items:center;}
    .recommend{
        width:100%;
    }
    .main{
        width:100%;display:flex;background:red;
    }
    dl{
        width:45%;
        >dt{
            width:100%;height:100%;
            >img{
                width:100%;height:auto;
            }
        }
    }
    .main{
        flex:1;
    }
</style>