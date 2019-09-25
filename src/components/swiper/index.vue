<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='(item,index) in indexList' :key='index'>
                   <img :src="item.image_url" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    el : '.swiper-container',
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: {
                delay : 1000,
            },//可选选项，自动滑动
            freeMode:true,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    computed:mapState({
        indexList:store=>store.recommend.indexList.banner
    }),
}
</script>

<style lang="scss" >
    .swiper-container{
        width:100%;height:4rem;
        >.swiper-wrapper{
            width: 100%;height:100%;
            >.swiper-slide{
                width: 100%;height:100%;
                >img{
                    width: 100%;height:100%;
                }
            }
        }
    }
</style>