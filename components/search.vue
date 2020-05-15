<template>
    <div class="main">
        <div class="container">
            <div class="about-services features-2">

                <div class="row">
                    <div class="col-md-12 text-center">
                        <h2 class="title text-warning" style="font-weight: bold;">Tyre Search by Size</h2>
                        <h5 class="homelable">Enter your tyre size below and we'll find appropriate tyre options for your vehicle.</h5>
                        <div class="row mt-5">
                            <div class="col-md-10 mr-auto ml-auto">
                                <div class="row">
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <label class="homelable">Tyre Width</label>
                                            <select class="form-control sectionalwidth" @change="brandWidthCallback($event)"  id="sectionalwidth">
                                                <option selected>Select the width</option>
                                                <option v-for="(uni, i) in uniquewidth" :key="i" :value="uni.sectionalwidth">
                                                    {{uni.sectionalwidth}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <label class="homelable">Aspect Ratio</label>
                                            <select class="form-control sectionalwidth" @change="brandRatioCallback($event)"  id="sectionalwidth">
                                                <option selected>Select the ratio</option>
                                                <option v-for="(rat, i) in ratio" :key="i" :value="rat.aspectratio">
                                                    {{rat.aspectratio}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <label class="homelable">Rim Diameter</label>
                                            <select class="form-control sectionalwidth" @change="brandDiameterCallback($event)"  id="sectionalwidth">
                                                <option selected>Select the diameter</option>
                                                <option v-for="(diam,i) in diameter" :key="i" :value="diam.rimdiameter">
                                                    {{diam.rimdiameter}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <help/>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Seach results -->
                <template v-if="alldata != null">
                    <div class="row mt-5" id="serchresult">
                        <div class="col-md-3 animated bounceIn" v-for="(pt, i) in alldata" :key="i">
                            <div class="card card-profile card-plain">
                                <div class="card-avatar">
                                    <span class="badge badge-pill badge-warning text-sm">{{pt.category.name}}</span>
                                    <div class="portfolio-card-header">
                                        <a class="full-screen" :href="'/img/files/'+pt.patterns.image" data-fancybox="portfolio" data-caption="description">
                                            <img style="height: 100%;" class="img" :src="'/img/files/'+pt.patterns.image">
                                        </a>
                                    </div>
                                </div>
                                <div class="card-body mt-0">
                                    <nuxt-link :to="{ name: 'brand-slug-pattern-pattern', params: {slug:pt.brands.slug, pattern:pt.patterns.slug} }">
                                        <h4 class="card-title my-0">{{pt.patterns.name}}</h4>
                                    </nuxt-link>
                                    <nuxt-link :to="{ name: 'brand-slug-pattern-pattern', params: {slug:pt.brands.slug, pattern:pt.patterns.slug} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                        Read more
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <!-- End of search result -->
                <div class="row">
                    <div class="col-md-12 ml-auto mr-auto text-center">
                        <h2 class="title mb-0 mt-0">Our Brands</h2>
                        <div class="row"></div>
                    </div>
                </div>
            </div>
        </div>

        <no-ssr> <!-- important to add no-ssr-->
            <carousel :autoplay="true" :autoplayHoverPause="true" :dots="false" :nav="false" :items="5" :center="true">
                <div class="corselImages">
                    <nuxt-link :to="{ name: 'brand-slug', params: {slug:'continental'} }">
                        <img src="/clients-logos/client-1.png" alt="Conti tyres">
                    </nuxt-link>
                </div>
                <div class="corselImages">
                    <nuxt-link :to="{ name: 'brand-slug', params: {slug:'hankook'} }">
                        <img src="/clients-logos/client-5.png" alt="hankook tyres">
                    </nuxt-link>
                </div>
                <div class="corselImages">
                    <nuxt-link :to="{ name: 'brand-slug', params: {slug:'toyo'} }">
                        <img src="/clients-logos/toyo.png" alt="toyo tyres">
                    </nuxt-link>
                </div>
                <div class="corselImages">
                    <nuxt-link :to="{ name: 'brand-slug', params: {slug:'general'} }">
                        <img src="/clients-logos/client-3.png" alt="general tyres">
                    </nuxt-link>
                </div>
                <div class="corselImages">
                    <nuxt-link :to="{ name: 'brand-slug', params: {slug:'otani'} }">
                        <img src="/clients-logos/client-15.png" alt="zeta tyres">
                    </nuxt-link>
                </div>
                <div class="corselImages">
                    <nuxt-link :to="{ name: 'brand-slug', params: {slug:'sailun'} }">
                        <img src="/clients-logos/sailun.png" alt="sailun">
                    </nuxt-link>
                </div>
                <div class="corselImages"><img src="/clients-logos/hanksugi.png" alt=""></div>
                <div class="corselImages"><img src="/clients-logos/birlalogo.png" alt=""></div>
                <div class="corselImages"><img src="/clients-logos/galaxy.png" alt=""></div>
                <div class="corselImages"><img src="/clients-logos/primex.png" alt=""></div>
                <div class="corselImages"><img src="/clients-logos/maxam.png" alt=""></div>
                <div class="corselImages"><img src="/clients-logos/client-7.png" alt=""></div>
                <div class="corselImages">
                    <nuxt-link :to="{ name: 'hankookbatteries' }">
                        <img src="/clients-logos/client-4.png" alt="">
                    </nuxt-link>
                </div>
                <div class="corselImages"><img src="/clients-logos/eveready.png" alt=""></div>
                <div class="corselImages"><img src="/clients-logos/client-10.png" alt=""></div>
                <div class="corselImages"><img src="/clients-logos/client-8.png" alt=""></div>
                <div class="corselImages"><img src="/clients-logos/client-6.png" alt=""></div>
                <div class="corselImages"><img src="/clients-logos/client-14.png" alt=""></div>
                <div class="corselImages"><img src="/clients-logos/client-13.png" alt=""></div>
            </carousel>
        </no-ssr>
    <!-- <template v-if="showtredetails"> -->
        <!-- <b-modal id="modal-lg" size="lg" title="Large Modal">Hello Large Modal!</b-modal> -->
        
    <!-- </template> -->

    </div>
</template>

<script>
import help from "@/components/help";
import { mapGetters, mapActions } from 'vuex'
export default {
    components:{
        help
    },
    data() {
        return {
            ourTeam: false,
            width: null,
            ratio: null,
            diameter: null,
            showtredetails: false,

            selectbrandwidth: null,
            alldata: null
        };
    },
    computed: {
        ...mapGetters({
            uniquewidth: 'uniquewidth',
            unique_tyres: 'unique_tyres',
            tyre_ratio: 'tyre_ratio',
            tyre_diameter: 'tyre_diameter',
            tyres_searched: 'tyres_searched'
        }),
        conti: function(){
            var filtered = [];
            filtered = this.tyres_searched.filter((rpt) => {
                return rpt.brand == 'CONTI'
            })
            return filtered;
        },
        general: function(){
            var filtered = [];
            filtered = this.tyres_searched.filter((rpt) => {
                return rpt.brand == 'GENERAL'
            })
            return filtered;
        },
        hankook: function(){
            var filtered = [];
            filtered = this.tyres_searched.filter((rpt) => {
                return rpt.brand == 'HANKOOK'
            })
            return filtered;
        },
        toyo: function(){
            var filtered = [];
            filtered = this.tyres_searched.filter((rpt) => {
                return rpt.brand == 'TOYO'
            })
            return filtered;
        },
        zeta: function(){
            var filtered = [];
            filtered = this.tyres_searched.filter((rpt) => {
                return rpt.brand == 'ZETA'
            })
            return filtered;
        },
        sailun: function(){
            var filtered = [];
            filtered = this.tyres_searched.filter((rpt) => {
                return rpt.brand == 'SAILUN'
            })
            return filtered;
        },
    },
    methods: {
        ...mapActions({
            setUnique: 'setUnique',
            gettyrewidth: 'gettyrewidth',
            gettyreratio: 'gettyreratio',
            clearratio: 'clearratio',
            cleardiameter: 'cleardiameter',
            getalldata: 'getalldata',
            clearalldata: 'clearalldata'
        }),
        show(data){
            this.showtredetails = true
        },
        async brandWidthCallback(event){
            if (event.target.value != null) {
                this.diameter = {}
                this.alldata = {}
                this.searchingbrand = true
                this.selectbrandwidth = event.target.value
                let response = await this.$axios.$get(`uniqueratio/${event.target.value}`)
                this.ratio = response
            }
        },
        async brandRatioCallback(event){
            if (event.target.value != null) {
                this.searchingbrand = true
                this.alldata = {}
                this.selectbrandratio = event.target.value
                let response = await this.$axios.$get(`width/${this.selectbrandwidth}/ratio/${event.target.value}`)
                this.diameter = response
            }
        },
        async brandDiameterCallback(event){
            if (event.target.value != null) {
                this.searchingbrand = true
                let response = await this.$axios.$get(`diameter/${event.target.value}/width/${this.selectbrandwidth}/ratio/${this.selectbrandratio}`)
                this.alldata = response
            }
        },
    },
    mounted() {
        this.setUnique('first');
    },
}
</script>

<style>
    .card-profile .card-avatar img{
        height: auto !important;
    }
</style>
