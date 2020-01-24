<template>
    <span>
        <div class="page-header header-filter header-small" data-parallax="true" style=" background-image: url('/img/kit/pro/car2.jpg'); ">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src="/img/galaxylogo.png" alt="" width="400">
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
                            <ul class="nav nav-pills nav-pills-danger">
                                <li class="nav-item mr-auto ml-auto">
                                    <a style="font-size: 14px;" @click.prevent='servicedata(1)' :class="[AvailablePatterns == true ? 'active show' : '']" class="nav-link" href="#" data-toggle="tab">Available Patterns</a>
                                </li>
                                <li class="nav-item mr-auto ml-auto">
                                    <a style="font-size: 14px;" @click.prevent='servicedata(2)' :class="[AboutContinental == true ? 'active show' : '']" class="nav-link" href="#pillAbout" data-toggle="tab">About Galaxy</a>
                                </li>
                                <li class="nav-item mr-auto ml-auto">
                                    <a style="font-size: 14px;" @click.prevent='servicedata(3)' :class="[WhyContinental == true ? 'active show' : '']" class="nav-link" href="#pillWhy" data-toggle="tab">Why Galaxy tyres</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 ml-auto mr-auto">
                            <div class="tab-content tab-space">
                                <template v-if="AvailablePatterns">
                                    <template v-if="showBrandDetails">
                                        <branddetails ptclass="text-warning" :data="fullSelectBrandDetails" :features="selectfeature" :listing="selectPatternList" @cancel="showBrandDetails = false"/>
                                    </template>
                                    <template v-else>
                                        <h3 class="mt-0 mb-1 title text-danger text-center">Galaxy Patterns</h3>
                                        <!-- <div class="row">
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
                                                                        <option v-for="uni in brandwidth" :key="uni.id" :value="uni">
                                                                            {{uni}}
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 col-sm-12">
                                                                <div class="form-group">
                                                                    <label class="homelable">Aspect Ratio</label>
                                                                    <select class="form-control sectionalwidth" @change="brandRatioCallback($event)"  id="sectionalwidth">
                                                                        <option selected>Select the ratio</option>
                                                                        <option v-for="rat in brandratio" :key="rat.id" :value="rat">
                                                                            {{rat}}
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 col-sm-12">
                                                                <div class="form-group">
                                                                    <label class="homelable">Rim Diameter</label>
                                                                    <select class="form-control sectionalwidth" @change="brandDiameterCallback($event)"  id="sectionalwidth">
                                                                        <option selected>Select the diameter</option>
                                                                        <option v-for="diam in branddiameter" :key="diam.id" :value="diam">
                                                                            {{diam}}
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <help @clearSearch="clearSearchCallback"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                        <div class="row">
                                            <!-- <div class="col-12" v-if="searchingbrand == false">
                                                <div class="row">
                                                    <div class="col-md-4 col-sm-12 ml-auto mr-auto text-center">
                                                        <ul class="nav nav-pills nav-pills-warning">
                                                            <li class="nav-item mr-auto ml-auto">
                                                                <a style="font-size: 14px;" @click.prevent='subgrouping(1)' :class="[fours == true ? 'active show' : '']" class="nav-link" href="#" data-toggle="tab">4 X 4</a>
                                                            </li>
                                                            <li class="nav-item mr-auto ml-auto">
                                                                <a style="font-size: 14px;" @click.prevent='subgrouping(2)' :class="[pass == true ? 'active show' : '']" class="nav-link" href="#" data-toggle="tab">Passenger</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <template v-if="searchingbrand == true">
                                                <div class="col-12" id="searchresults">
                                                    <div class="row">
                                                        <div class="col-md-3 animated bounceIn" v-for="uni in uniqueConti" :key="uni.id">
                                                            <div class="card card-profile card-plain">
                                                                <div class="card-avatar">
                                                                    <div class="portfolio-card-header">
                                                                        <a class="full-screen" :href="'/img/files/'+uni.image" data-fancybox="portfolio" data-caption="description">
                                                                            <img style="height: 100%;" class="img" :src="'/img/files/'+uni.image">
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body mt-0">
                                                                    <nuxt-link :to="{ name: 'continentalpattern-pattern', params: {pattern:uni.pattern} }">
                                                                        <h4 class="card-title my-0">{{uni.pattern}}</h4>
                                                                    </nuxt-link>
                                                                    <nuxt-link :to="{ name: 'continentalpattern-pattern', params: {pattern:uni.pattern} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                                                        Read more
                                                                    </nuxt-link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>



                                            <template v-else>
                                                <template v-if="fours">
                                                    <div class="col-md-3 animated bounceIn" v-for="uni in fourbyfour" :key="uni.id">
                                                        <div class="card card-profile card-plain">
                                                            <div class="card-avatar">
                                                                <div class="portfolio-card-header">
                                                                    <a class="full-screen" :href="'/img/files/'+uni.image" data-fancybox="portfolio" :data-caption="uni.pattern">
                                                                        <img style="height: 100%;" class="img" :src="'/img/files/'+uni.image">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="card-body mt-0">
                                                                <nuxt-link :to="{ name: 'galaxypattern-pattern', params: {pattern:uni.pattern} }">
                                                                    <h4 class="card-title my-0">{{uni.pattern}}</h4>
                                                                </nuxt-link>
                                                                <nuxt-link :to="{ name: 'galaxypattern-pattern', params: {pattern:uni.pattern} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                                                    Read more
                                                                </nuxt-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                                <template v-if="pass">
                                                    <div class="col-md-3 animated bounceIn" v-for="uni in passangers" :key="uni.id">
                                                        <div class="card card-profile card-plain">
                                                            <div class="card-avatar">
                                                                <div class="portfolio-card-header">
                                                                    <a class="full-screen" :href="'/img/files/'+uni.image" data-fancybox="portfolio" data-caption="description">
                                                                        <img style="height: 100%;" class="img" :src="'/img/files/'+uni.image">
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="card-body mt-0">
                                                                <nuxt-link :to="{ name: 'continentalpattern-pattern', params: {pattern:uni.pattern} }">
                                                                    <h4 class="card-title my-0">{{uni.pattern}}</h4>
                                                                </nuxt-link>
                                                                <nuxt-link :to="{ name: 'continentalpattern-pattern', params: {pattern:uni.pattern} }" class="selecttyre btn btn-sm btn-primary btn-link float-center">
                                                                    Read more
                                                                </nuxt-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </template>
                                        </div>
                                    </template>
                                </template>
                                <template v-if="AboutContinental">
                                    <h3 class="title text-danger text-center m-0">About Galaxy.</h3>
                                    <div class="row" v-for="dt in aboutgeneral" :key="dt.id">
                                        <div class="col-md-8 ml-auto mr-auto text-center">
                                            <h3 class="title">{{dt.subdesc}}</h3>
                                        </div>
                                        <div class="col-md-6" v-for="sbdt in dt.fulldesc" :key="sbdt.id">
                                            <div class="card-body">
                                                <h4 class="card-title">{{sbdt.title}}</h4>
                                                <h6 class="card-category text-muted">{{sbdt.subtitle}}</h6>
                                                <p class="card-description text-dark">
                                                    {{sbdt.para}}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="card card-raised card-background py-2" style="background: url('/img/galaxy.png')">
                                            <div class="card-body">
                                                <h3 class="card-title">Download Galaxy technical catalogue</h3>
                                                <a href="/img/GalaxyTechnicalCatalog.pdf" target="_blank" class="btn btn-warning btn-round mt-5">
                                                    <i class="material-icons">subject</i> Download
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </template>
                                <template v-if="WhyContinental">
                                    <h3 class="mt-0 title text-danger text-center">Why Galaxy tyres</h3>
                                    <div class="related-products" v-for="why in whygeneral" :key="why.id">

                                        <div class="col-md-12 mb-5">
                                            <div class="card-body py-0" v-for="whdt in why.writeup" :key="whdt.id">
                                                <h4 class="card-title">{{whdt.title}}</h4>
                                                <p class="card-description text-dark">
                                                    {{whdt.para}}
                                                </p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-6 col-md-4" v-for="pt in why.keypoints" :key="pt.id">
                                                <div class="card card-product">
                                                    <div class="card-header card-header-image">
                                                        <img class="img" :src="'/img/'+pt.image">
                                                        <div class="colored-shadow" :style="{ background: 'url(/img/'+pt.image+')', opacity:1 }"></div>
                                                    </div>
                                                    <div class="card-body">
                                                        <h4 class="card-title text-left">{{pt.title}}</h4>
                                                        <h6 class="card-category text-rose text-left">{{pt.subtitle}}</h6>
                                                        <div class="card-description text-left">
                                                            <span v-for="st in pt.shortdesc" :key="st.id">{{st.para}}</span>
                                                            <a class="text-danger" href="#pablo" data-toggle="modal" data-target="#Bestinbraking"> Read More </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
            AvailablePatterns: false,
            AboutContinental: false,
            WhyContinental: false,
            searchingbrand: false,
            showBrandDetails: false,
            fours: false,
            pass: false,
            selectbrandwidth: null,
            selectbrandratio: null,
            fullSelectBrandDetails: null,
        }
    },
    computed: {
        ...mapGetters({
            uniqueConti: 'uniqueConti',
            aboutgeneral: 'galaxydata/aboutgalaxy',
            whygeneral: 'galaxydata/whygeneral',
            brandwidth: 'brandwidth',
            brandratio: 'brandratio',
            branddiameter: 'branddiameter',
            brandalldata: 'brandalldata',
            selectPatternList: 'selectPatternList',
            selectfeature: 'generalfeatures/selectfeature'
        }),
        fourbyfour: function(){
            var fourbyfour = [];
            fourbyfour = this.uniqueConti.filter((rpt) => {
                return rpt.itemsubcategory == '4X4'
            })
            return fourbyfour;
        },
        passangers: function(){
            var passangers = [];
            passangers = this.uniqueConti.filter((rpt) => {
                return rpt.itemsubcategory == 'PASSENGER'
            })
            return passangers;
        },
    },
    methods: {
        ...mapActions({
            setUniqueConti: 'setUniqueConti',
            clearcategotyfilter: 'clearcategotyfilter',
            setUniqueBrandWidth: 'setUniqueBrandWidth',
            getBrandWidth: 'getBrandWidth',
            getBrandRatio: 'getBrandRatio',
            getBrandAlldata: 'getBrandAlldata',
            clearbranddata: 'clearbranddata',
            clearbrandwidth: 'clearbrandwidth',
            clearbranddiameter: 'clearbranddiameter',
            clearbrandratio: 'clearbrandratio',

            getselectpattern: 'getselectpattern',
            clearSelectFeaturs: 'clearSelectFeaturs',
            setSelectPattaern: 'generalfeatures/setSelectPattaern',
            clearSelectFeatursDetail: 'generalfeatures/clearSelectFeaturs',
        }),
        brandmoredetails(data){
            this.showBrandDetails = true
            this.clearSelectFeaturs()
            this.clearSelectFeatursDetail()
            this.setSelectPattaern(data.pattern);
            this.getselectpattern(data.pattern);
            this.fullSelectBrandDetails = data
        },
        clearSearchCallback(){
            this.searchingbrand = false
            this.clearbranddata()
            this.setUniqueConti("GENERAL");
            this.clearbrandratio()
            this.clearbranddiameter()
        },
        brandWidthCallback(event){
            if (event.target.value != null) {
                this.searchingbrand = true
                this.clearbrandratio()
                this.clearbranddata()
                this.clearbranddiameter()
                this.selectbrandwidth = event.target.value
                this.getBrandWidth({'brand':'GENERAL', 'width': event.target.value})
            }
        },
        brandRatioCallback(event){
            if (event.target.value != null) {
                this.searchingbrand = true
                this.clearbranddiameter()
                this.clearbranddata()
                this.selectbrandratio = event.target.value
                this.getBrandRatio({'brand':'GENERAL', 'width':this.selectbrandwidth, 'ratio':event.target.value})
            }
        },
        brandDiameterCallback(event){
            if (event.target.value != null) {
                this.searchingbrand = true
                this.clearbranddata()
                this.getBrandAlldata({'brand':'GENERAL', 'width':this.selectbrandwidth, 'ratio':this.selectbrandratio, 'diameter':event.target.value})
                var VueScrollTo = require('vue-scrollto');
                var cancelScroll = VueScrollTo.scrollTo('#searchresults', 500)
            }
        },
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
        subgrouping(val){
            if (val == 1) {
                this.fours = true
                this.pass = false
            }else if (val == 2) {
                this.fours = false
                this.pass = true
            } else {}
        }
    },
    mounted() {
        this.clearcategotyfilter()
        this.clearbrandwidth()
        if (this.$route.name == 'galaxy') {
            this.clearbranddata()
            this.setUniqueConti("GALAXY");
            this.setUniqueBrandWidth("GALAXY");
        }
        this.AvailablePatterns = true
        this.fours=true
    },
}
</script>