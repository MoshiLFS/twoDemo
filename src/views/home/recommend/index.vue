<template>

    <div className='recommend'>
        <header>
            <Swiper />
        </header>
        <h3>品牌制造商</h3>
        <div className='main2' style='display:flex;flex-wrap:wrap;'>
            <dl v-for='(item,index) in brandList' :key='index'>
                <dt>
                    <img :src="item.list_pic_url" alt="">
                </dt>
                <dt>
                    <p>{{item.name}}</p>
                    <p>{{item.floor_price}}元起</p>
                </dt>
            </dl>
        </div>

        <h3>新品首发</h3>
            <!-- {{itemData}} -->
        <div className='main2' style='display:flex;flex-wrap:wrap;'>
            <dl v-for='(item,index) in itemData' :key='index'>
                <dt>
                    <img :src="item.list_pic_url" alt="">
                </dt>
                <dt>
                    <p>{{item.name}}</p>
                    <p>￥{{item.retail_price}}</p>
                </dt>
            </dl>
        </div>

        <h3>人气推荐</h3>
        <div className='main2' style='display:flex;flex-wrap:wrap;'>
            <dl v-for='(item,index) in hotGoodsList' :key='index' className='hot'>
                <dt>
                    <img :src="item.list_pic_url" alt="">
                </dt>
                <dt>
                    <p>{{item.name}}</p>
                    <p>￥{{item.retail_price}}</p>
                </dt>
            </dl>
        </div>

        <h3>专题精选</h3>
        <Swiper/>

        <h3>居家</h3>
        
        
    </div>
</template>
<script>
import Swiper from '../../../components/swiper/index'
import { mapState } from 'vuex'
export default {
    components: {
        Swiper
    },
    computed: mapState({
        itemData : store=> store.recommend.indexList.newGoodsList,
        brandList : store=>store.recommend.indexList.brandList,
        hotGoodsList: store=>store.recommend.indexList.hotGoodsList
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
<style lang="scss" >
    .recommend{
        width:100%;
    }
    dl{
        width:50%;
        >dt{
            width:100%;height:auto;
            >img{
                width:100%;height:auto;
            }
        }
    }

    dl.hot{
        width:100%;display:flex;background:red;
    }
    
</style>