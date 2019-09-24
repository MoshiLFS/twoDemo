<template>

    <div>
        <header>
            <Swiper/>
        </header>

        this is recommend pages.
        <Bottom/>
    </div>
</template>
<script>
import Bottom from '../../../components/bottom.route.vue/index.vue'
import Swiper from '../../../components/swiper/index'
export default {
    components: {
        Bottom,Swiper
    },
}
</script>