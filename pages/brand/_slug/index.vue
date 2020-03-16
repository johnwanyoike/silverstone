<template>
    <span>
        <div class="page-header header-filter header-small" data-parallax="true" style=" background-image: url('/img/kit/pro/car2.jpg'); ">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img :src="'/img/'+brand.logo" alt="" width="350">
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
                        </div>
                    </div>
                </div>
                <div class="about-services features-2">
                    <div class="row">
                        <div class="col-md-8 col-sm-12 ml-auto mr-auto text-center">
                            <ul class="nav nav-pills" :class="'nav-pills-'+brand.color">
                                <li class="nav-item mr-auto ml-auto">
                                    <a style="font-size: 14px;" @click.prevent='servicedata(1)' :class="[AvailablePatterns == true ? 'active show' : '']" class="nav-link" href="#" data-toggle="tab">Available Patterns</a>
                                </li>
                                <li class="nav-item mr-auto ml-auto">
                                    <a style="font-size: 14px;" @click.prevent='servicedata(2)' :class="[AboutContinental == true ? 'active show' : '']" class="nav-link" href="#pillAbout" data-toggle="tab">About {{brand.name}}</a>
                                </li>
                                <li class="nav-item mr-auto ml-auto" v-if="whybrand!=null">
                                    <a style="font-size: 14px;" @click.prevent='servicedata(3)' :class="[WhyContinental == true ? 'active show' : '']" class="nav-link" href="#pillWhy" data-toggle="tab">Why {{brand.name}} tyres</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 ml-auto mr-auto">
                            <div class="tab-content tab-space">
                                <template v-if="AvailablePatterns">
                                    <template v-if="showBrandDetails">
                                        <!-- <branddetails ptclass="text-warning" :data="fullSelectBrandDetails" :features="selectfeature" :listing="selectPatternList" @cancel="showBrandDetails = false"/> -->
                                    </template>
                                    <template v-else>
                                        <h3 class="mt-0 mb-1 title text-warning text-center">{{patterns.name}} Patterns</h3>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <h5 class="homelable">Select tyre size below and we'll find appropriate tyre options for your vehicle.</h5>
                                                <div class="row mt-5">
                                                    <div class="col-md-10 mr-auto ml-auto">
                                                        <div class="row">
                                                            <div class="col-md-4 col-sm-12">
                                                                <div class="form-group">
                                                                    <label class="homelable">Tyre Width</label>
                                                                    <select class="form-control sectionalwidth" @change="brandWidthCallback($event)"  id="sectionalwidth">
                                                                        <option selected>Select the width</option>
                                                                        <option v-for="(uni, i) in width" :key="i" :value="uni.sectionalwidth">
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
                                                                        <option v-for="(diam, i) in diameter" :key="i" :value="diam.rimdiameter">
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
                                        <div class="row">
                                            <div class="col-12" v-if="searchingbrand == false">
                                                <div class="row">
                                                    <div class="col-md-4 col-sm-12 ml-auto mr-auto text-center">
                                                        <ul class="nav nav-pills nav-pills-warning">
                                                            <li class="nav-item mr-auto ml-auto" v-for="(ct, i) in categories" :key="i" @click="show(i)">
                                                                <a style="font-size: 14px;" class="nav-link" :href="'#'+ct[0].type" data-toggle="tab" aria-expanded="true">{{ct[0].type}}</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <template v-if="searchingbrand == true">
                                                <div class="col-12" id="searchresults">
                                                    <div class="row">
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
                                                                    <nuxt-link :to="{ name: 'brand-slug-pattern-pattern', params: {slug:patterns.slug, pattern:pt.patterns.slug} }">
                                                                        <h4 class="card-title my-0">{{pt.patterns.name}}</h4>
                                                                    </nuxt-link>
                                                                    <nuxt-link :to="{ name: 'brand-slug-pattern-pattern', params: {slug:patterns.slug, pattern:pt.patterns.slug} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                                                        Read more
                                                                    </nuxt-link>
                                                                </div>
                                                            </div>




                                                            
                                                            <!-- <div class="card card-profile card-plain">
                                                                <div class="card-avatar">
                                                                    <span class="badge badge-pill badge-warning text-sm">{{uni.itemsubcategory}}</span>
                                                                    <span>
                                                                        <img style="height: 100%;" class="img" :src="'/img/files/'+uni.image">
                                                                    </span>
                                                                </div>
                                                                <div class="card-body mt-0">
                                                                    <h4 class="card-title my-0">{{uni.pattern}}</h4>
                                                                    <nuxt-link :to="{ name: 'continentalpattern-pattern', params: {pattern:uni.pattern} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                                                        Read more
                                                                    </nuxt-link>
                                                                </div>
                                                            </div> -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                            <template v-else>
                                                <div class="container">
                                                    <div class="pricing-2">
                                                        <div class="tab-content tab-space">
                                                            <div :id="ct[0].type" class="tab-pane active" v-for="(ct, i) in categories" :key="i">
                                                                <div class="container">
                                                                    <div class="row">
                                                                        <div class="col-md-3" v-for="(pt, i) in ct" :key="i">
                                                                            <div class="card card-profile card-plain">
                                                                                <div class="card-avatar">
                                                                                    <div class="portfolio-card-header">
                                                                                        <a class="full-screen" :href="'/img/files/'+pt.image" data-fancybox="portfolio" data-caption="description">
                                                                                            <img style="height: 100%;" class="img" :src="'/img/files/'+pt.image">
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="card-body mt-0">
                                                                                    <nuxt-link :to="{ name: 'brand-slug-pattern-pattern', params: {slug:patterns.slug, pattern:pt.slug} }">
                                                                                        <h4 class="card-title my-0">{{pt.name}}</h4>
                                                                                    </nuxt-link>
                                                                                    <nuxt-link :to="{ name: 'brand-slug-pattern-pattern', params: {slug:patterns.slug, pattern:pt.slug} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                                                                        Read more
                                                                                    </nuxt-link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                        </div>
                                    </template>
                                </template>

                                <template v-if="AboutContinental">
                                    <div class="row" v-for="dt in aboutbrand" :key="dt.id">
                                        <div class="col-md-8 ml-auto mr-auto text-center">
                                            <h4 class="title mt-0" :class="'text-'+brand.color">{{dt.title}}</h4>
                                            <p class="card-description text-dark" v-if="dt.description != null">
                                                {{dt.description}}
                                            </p>
                                        </div>
                                        <div class="col-md-10 ml-auto mr-auto" v-for="sbdt in dt.about" :key="sbdt.id">
                                                <h5 class="card-title" v-if="sbdt.title != null">{{sbdt.title}}</h5>
                                                <p class="card-description text-dark">
                                                    {{sbdt.description}}
                                                </p>
                                        </div>
                                    </div>
                                </template>

                                <template v-if="WhyContinental">
                                    <h3 class="mt-0 mb-1 title text-warning text-center">Why {{brand.name}} tyres</h3>
                                    <div class="related-products">
                                        <div class="col-md-12 mb-5" v-if="whybrand.description != null">
                                            <p class="text-dark">
                                                {{whybrand.description}}
                                            </p>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-6 col-md-4" v-for="pt in whybrand" :key="pt.id">
                                                <div class="card card-product">
                                                    <div class="card-header card-header-image" v-if="pt.image != null">
                                                        <img class="img" :src="'/img/'+pt.image">
                                                        <div class="colored-shadow" :style="{ background: 'url(/img/'+pt.image+')', opacity:1 }"></div>
                                                    </div>
                                                    <div class="card-body">
                                                        <h4 class="card-title text-left">{{pt.title}}</h4>
                                                        <h6 class="card-category text-rose text-left">{{pt.subtitle}}</h6>
                                                        <div class="card-description text-left">
                                                            <span>{{pt.para}}</span>
                                                        </div>
                                                         <!-- v-for="st in pt.shortdesc" :key="st.id" -->
                                                        <!-- <b-button size="sm" class="float-right" @click="show(pt.title, pt.fulldesc)" variant="none">Read More</b-button> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- <template v-if="showdetails">
                                        <b-modal v-model="showdetails" class="modal-lg" :title="poptitle" ok-only>
                                            <p class="card-description text-dark" v-for="dt in moredata" :key="dt.id">
                                                {{dt.para}}
                                            </p>
                                            <div slot="modal-footer" class="w-100">
                                                <b-button variant="primary" size="sm" class="float-right" @click="showdetails=false">
                                                    Close
                                                </b-button>
                                            </div>
                                        </b-modal>
                                    </template> -->
                                </template>

                            </div>
                        </div>
                    </div>
                </div>
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
            whybrand: null,
            ratio: null,
            diameter: null,
            alldata: null,
            aboutbrand: null
        }
    },
    methods: {
        ...mapActions({
            setUniqueConti: 'setUniqueConti',
            clearcategotyfilter: 'clearcategotyfilter',
            setUniqueBrandWidth: 'setUniqueBrandWidth',
            getBrandWidth: 'getBrandWidth',
            getBrandAlldata: 'getBrandAlldata',
            clearbranddata: 'clearbranddata',
            clearbrandwidth: 'clearbrandwidth',
            clearbranddiameter: 'clearbranddiameter',
            clearbrandratio: 'clearbrandratio',
            getselectpattern: 'getselectpattern',
            clearSelectFeaturs: 'clearSelectFeaturs',
            setSelectPattaern: 'contifeatures/setSelectPattaern',
            clearSelectFeatursDetail: 'contifeatures/clearSelectFeaturs',
        }),
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
        async brandWidthCallback(event){
            if (event.target.value != null) {
                this.diameter = {}
                this.alldata = {}
                this.searchingbrand = true
                this.selectbrandwidth = event.target.value
                let response = await this.$axios.$get(`patterngroups/${event.target.value}/brands/${this.brand.slug}`)
                this.ratio = response
            }
        },
        async brandRatioCallback(event){
            if (event.target.value != null) {
                this.searchingbrand = true
                this.alldata = {}
                this.selectbrandratio = event.target.value
                let response = await this.$axios.$get(`ratiorequest/${event.target.value}/brands/${this.brand.slug}/width/${this.selectbrandwidth}`)
                this.diameter = response
            }
        },
        async brandDiameterCallback(event){
            if (event.target.value != null) {
                this.searchingbrand = true
                let response = await this.$axios.$get(`diameterrequest/${event.target.value}/brands/${this.brand.slug}/width/${this.selectbrandwidth}/ratio/${this.selectbrandratio}`)
                this.alldata = response
            }
        },
        show(data){
            // console.log(this.patterns.patterncategories)
            // var filtered = [];
            // filtered = this.reports.filter((rpt) => {
            //     return rpt.category == 1
            // })
            // return filtered;
        }
    },
    async asyncData({ params, app }) {
        let response = await app.$axios.$get(`brands/${params.slug}`);
        return {
            patterns: response.patterns,
            categories: response.patterns.patterncategories,
            whybrand: response.whybrand,
            brand: response.brand,
            width: response.width,
            aboutbrand: response.aboutbrand,
        };
    }
}
</script>

<style>

</style>