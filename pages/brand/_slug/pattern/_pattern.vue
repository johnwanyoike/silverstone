<template>
    <span>
        <div class="page-header header-filter header-small" data-parallax="true" style=" background-image: url('/img/kit/pro/car2.jpg'); ">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img :src="'/img/'+brand.logo" alt="" width="350">
                        <!-- <img src="/img/sailun-logo.png" alt="" width="350"> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="main main-raised mb-5">
            <div class="container">
                <div class="profile-content">
                    <div class="row">
                        <div class="col-md-12 ml-auto mr-auto">
                            <div class="follow" style="position: absolute; top: -25px; right: 0;">
                                <a href="https://www.facebook.com/contipartnerKE/" target="_blank" class="btn mr-5 btn-fab btn-primary btn-round" rel="tooltip" title="Facebook">
                                    <i class="fa fa-facebook-square"></i>
                                </a>
                            </div>

                            <div class="follow" style="position: absolute; top: -25px; right: 80px;">
                                <nuxt-link :to="{ name: 'brand-slug', params: {slug:brand.slug} }" class="btn mr-5 btn-fab btn-info btn-round">
                                    <i class="material-icons">arrow_back</i>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <branddetails ptclass="text-warning" :data="pattern" :features="feature" :listing="PatternList"/>
            </div>
        </div>
    </span>
</template>

<script>
import branddetails from "@/components/branddetails";
import help from "@/components/help";
import { mapGetters, mapActions } from 'vuex'
export default {
    components: {
        branddetails, help
    },
    data() {
        return {
            patterns: null,
            categories: null,
            AvailablePatterns: true,
            AboutContinental: false,
            searchingbrand: false,
            WhyContinental: false,
            showdetails:false,
            poptitle: null,
            moredata: null,
            fours: false,
            pass: false,
            selectbrandwidth: null,
            selectbrandratio: null,
            showBrandDetails: false,
            fullSelectBrandDetails: null,


            pattern: null,
            feature: null,
            PatternList: null,
            brand:null,
        }
    },
    methods: {
        servicedata(val){
            if (val == 1) {
                this.AvailablePatterns = true
                this.AboutContinental = false
                this.WhyContinental = false
            }else if (val == 2) {
                this.AvailablePatterns = false
                this.AboutContinental = true
                this.WhyContinental = false
            } else if (val == 3) {
                this.AvailablePatterns = false
                this.AboutContinental = false
                this.WhyContinental = true
            } else {}
        },
    },
    async asyncData({ params, app }) {
        let response = await app.$axios.$get(`patterns/${params.pattern}`);
        return {
            pattern: response,
            feature: response.features,
            PatternList: response.patternsgroups,
            brand: response.brands[0],
        };
    }
}
</script>

<style>

</style>