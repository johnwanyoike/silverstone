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
                                            <select class="form-control sectionalwidth" @change="widthCallback($event)"  id="sectionalwidth">
                                                <option selected>Select the width</option>
                                                <option v-for="uni in unique_tyres" :key="uni.id" :value="uni">
                                                    {{uni}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <label class="homelable">Aspect Ratio</label>
                                            <select class="form-control sectionalwidth" @change="ratioCallback($event)"  id="sectionalwidth">
                                                <option selected>Select the ratio</option>
                                                <option v-for="rat in tyre_ratio" :key="rat.id" :value="rat">
                                                    {{rat}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <label class="homelable">Rim Diameter</label>
                                            <select class="form-control sectionalwidth" @change="diameterCallback($event)"  id="sectionalwidth">
                                                <option selected>Select the diameter</option>
                                                <option v-for="diam in tyre_diameter" :key="diam.id" :value="diam">
                                                    {{diam}}
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
                <div class="row mt-5" id="serchresult">
                    <!-- CONTI -->
                    <div class="col-md-3" v-for="rs in conti" :key="rs.id">
                        <div class="card card-profile card-plain animated bounceIn">
                            <div class="card-avatar">
                                <span>
                                    <img class="img" :src="'/img/files/'+rs.image">
                                </span>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">{{rs.pattern}}</h4>
                                <p class="card-description" style="margin: 0 0 0px;">
                                    {{rs.description}}
                                </p>
                                <nuxt-link :to="{ name: rs.linkname+'-pattern', params: {pattern:rs.pattern} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                    Read more
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <!-- GENERAL -->
                    <div class="col-md-3" v-for="rs in general" :key="rs.id">
                        <div class="card card-profile card-plain animated bounceIn">
                            <div class="card-avatar">
                                <span>
                                    <img class="img" :src="'/img/files/'+rs.image">
                                </span>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">{{rs.pattern}}</h4>
                                <p class="card-description" style="margin: 0 0 0px;">
                                    {{rs.description}}
                                </p>
                                <nuxt-link :to="{ name: rs.linkname+'-pattern', params: {pattern:rs.pattern} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                    Read more
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <!-- HANKOOK -->
                    <div class="col-md-3" v-for="rs in hankook" :key="rs.id">
                        <div class="card card-profile card-plain animated bounceIn">
                            <div class="card-avatar">
                                <span>
                                    <img class="img" :src="'/img/files/'+rs.image">
                                </span>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">{{rs.pattern}}</h4>
                                <p class="card-description" style="margin: 0 0 0px;">
                                    {{rs.description}}
                                </p>
                                <nuxt-link :to="{ name: rs.linkname+'-pattern', params: {pattern:rs.pattern} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                    Read more
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <!-- TOYO -->
                    <div class="col-md-3" v-for="rs in toyo" :key="rs.id">
                        <div class="card card-profile card-plain animated bounceIn">
                            <div class="card-avatar">
                                <span>
                                    <img class="img" :src="'/img/files/'+rs.image">
                                </span>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">{{rs.pattern}}</h4>
                                <p class="card-description" style="margin: 0 0 0px;">
                                    {{rs.description}}
                                </p>
                                <nuxt-link :to="{ name: rs.linkname+'-pattern', params: {pattern:rs.pattern} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                    Read more
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <!-- ZETA -->
                    <div class="col-md-3" v-for="rs in zeta" :key="rs.id">
                        <div class="card card-profile card-plain animated bounceIn">
                            <div class="card-avatar">
                                <span>
                                    <img class="img" :src="'/img/files/'+rs.image">
                                </span>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">{{rs.pattern}}</h4>
                                <p class="card-description" style="margin: 0 0 0px;">
                                    {{rs.description}}
                                </p>
                                <nuxt-link :to="{ name: rs.linkname+'-pattern', params: {pattern:rs.pattern} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                    Read more
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <!-- SAILUN -->
                    <div class="col-md-3" v-for="rs in sailun" :key="rs.id">
                        <div class="card card-profile card-plain animated bounceIn">
                            <div class="card-avatar">
                                <span>
                                    <img class="img" :src="'/img/files/'+rs.image">
                                </span>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">{{rs.pattern}}</h4>
                                <p class="card-description" style="margin: 0 0 0px;">
                                    {{rs.description}}
                                </p>
                                <nuxt-link :to="{ name: rs.linkname+'-pattern', params: {pattern:rs.pattern} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                    Read more
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <nuxt-link :to="{ name: 'continental', params: {brand:'CONTI'} }">
                        <img src="/clients-logos/client-1.png" alt="Conti tyres">
                    </nuxt-link>
                </div>
                <div class="corselImages">
                    <nuxt-link :to="{ name: 'hankook', params: {brand:'HANKOOK'} }">
                        <img src="/clients-logos/client-5.png" alt="hankook tyres">
                    </nuxt-link>
                </div>
                <div class="corselImages">
                    <nuxt-link :to="{ name: 'toyo', params: {brand:'TOYO'} }">
                        <img src="/clients-logos/toyo.png" alt="toyo tyres">
                    </nuxt-link>
                </div>
                <div class="corselImages">
                    <nuxt-link :to="{ name: 'general', params: {brand:'GENERAL'} }">
                        <img src="/clients-logos/client-3.png" alt="general tyres">
                    </nuxt-link>
                </div>
                <div class="corselImages">
                    <nuxt-link :to="{ name: 'zeta', params: {brand:'ZETA'} }">
                        <img src="/clients-logos/client-15.png" alt="zeta tyres">
                    </nuxt-link>
                </div>
                <div class="corselImages"><img src="/clients-logos/hanksugi.png" alt=""></div>
                <div class="corselImages"><img src="/clients-logos/birlalogo.png" alt=""></div>
                <div class="corselImages">
                    <nuxt-link :to="{ name: 'sailun', params: {brand:'SAILUN'} }">
                        <img src="/clients-logos/sailun.png" alt="sailun">
                    </nuxt-link>
                </div>
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
        };
    },
    computed: {
        ...mapGetters({
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
        widthCallback(event){
            if (event.target.value != null) {
                this.clearratio()
                this.cleardiameter()
                this.clearalldata()
                this.width = event.target.value
                this.gettyrewidth(event.target.value).then(() => {
                    if (this.tyre_ratio.length) {
                        // console.log('There is data for the ration.')
                    }else{
                        // console.log('There is no data for the ration.')
                    }
                })
            }
        },
        ratioCallback(event){
            if (event.target.value != null) {
                this.cleardiameter()
                this.clearalldata()
                this.ratio = event.target.value
                this.gettyreratio({'width':this.width, 'ratio':event.target.value}).then(() => {
                    if (this.tyre_diameter.length) {
                        // console.log('There is data for diameter.')
                    }else{
                        // console.log('There is no data for diameter.')
                    }
                })
            }
        },
        diameterCallback(event){
            if (event.target.value != null) {
                this.getalldata({'width':this.width, 'ratio':this.ratio, 'diameter':event.target.value}).then(() => {
                    if (this.tyres_searched.length) {
                        // console.log('There is data.')
                    }else{
                        // console.log('There is no data')
                    }
                })
                var VueScrollTo = require('vue-scrollto');
                var cancelScroll = VueScrollTo.scrollTo('#serchresult', 500)
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
