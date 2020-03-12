<template>
    <span>
        <banner/>
        <search/>
        <services/>
        <promise/>
    </span>
</template>

<script>
import Search from "~/components/search.vue";
import Services from "~/components/services.vue";
import Promise from "~/components/promise.vue";
import Banner from "~/components/banner.vue";

export default {
    data() {
        return {
            scrolling: false,
            services: null,
        }
    },
    components: {
        Search, Services, Promise, Banner
    },
    mounted() {
        var VueScrollTo = require('vue-scrollto');
        if (this.$route.params.brand == 'services') {
            var cancelScroll = VueScrollTo.scrollTo('#element', 500)
        }
    },
    // async asyncData({ params, app }) {
    //     let response = await app.$axios.$get(`brands`);
    //     return{
    //         brands: response.data
    //     }
    // }
};
</script>

<style>
</style>