<template>
    <span>
        <div class="page-header header-filter header-small" data-parallax="true" style=" background-image: url('/img/kit/pro/car2.jpg'); ">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src="/img/gentirelogo.png" alt="" width="350">
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
                                <nuxt-link :to="{ name: 'general', params: {brand:'GENERAL'} }" class="btn mr-5 btn-fab btn-info btn-round">
                                    <i class="material-icons">arrow_back</i>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>

                <branddetails ptclass="text-warning" :data="selectSinglePattern" :features="selectfeature" :listing="selectPatternList"/>
                
            </div>
        </div>
    </span>
</template>

<script>
import branddetails from "@/components/branddetails";
import { mapGetters, mapActions } from 'vuex'
export default {
    components: {
        branddetails
    },
    computed: {
        ...mapGetters({
            selectPatternList: 'selectPatternList',
            selectfeature: 'generalfeatures/selectfeature',
            selectSinglePattern: 'selectSinglePattern',
        }),
    },
    methods: {
        ...mapActions({
            getselectpattern: 'getselectpattern',
            setSelectPattaern: 'generalfeatures/setSelectPattaern',
            getselectsinglepattern: 'getselectsinglepattern',
            clearSelectFeaturs: 'clearSelectFeaturs',
            clearSelectFeatursDetail: 'generalfeatures/clearSelectFeaturs',
        }),
    },
    mounted() {
        this.clearSelectFeaturs()
        this.clearSelectFeatursDetail()
        this.getselectpattern(this.$route.params.pattern);
        this.setSelectPattaern(this.$route.params.pattern);
        this.getselectsinglepattern(this.$route.params.pattern);
    },
}
</script>

<style>

</style>
