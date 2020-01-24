<template>
    <div class="team-4 section-image" id="ourservices" style="background: url('/img/kit/pro/car2.jpg') fixed;">
    <div class="container" id="element">
        <div class="row mb-5">
            <div class="col-md-8 ml-auto mr-auto text-center">
                <h2 class="title">OUR SERVICES</h2>
            </div>
        </div>
        <div class="row">
            <div v-for="srv in services" :key="srv.id" class="col-md-5 mr-auto ml-auto mb-5">
                <div class="card card-blog">
                    <div class="card-header card-header-image">
                    <img class="img img-raised" :src="'/img/'+srv.image">
                    <div class="colored-shadow" :style="{ background: 'url(/img/'+srv.image+')' , opacity: 1 }"></div></div>
                    <div class="card-body">
                        <h4 class="card-title">
                            {{srv.title}}
                        </h4>
                        <p class="card-description text-dark" v-for="sht in srv.shortdesc" :key="sht.id">
                            {{sht.para}}
                        </p>
                        <b-button size="sm" class="float-right" @click="show(srv)" variant="none">More</b-button>
                    </div>
                </div>
            </div>

            <template v-if="showdetails">
                <b-modal v-model="showdetails" class="modal-lg" :title="fdt.title" ok-only>
                    <p class="card-description text-dark" v-for="dt in fdt.fulldesc" :key="dt.id">
                        {{dt.para}}
                    </p>
                    <div slot="modal-footer" class="w-100">
                        <b-button variant="primary" size="sm" class="float-right" @click="showdetails=false">
                            Close
                        </b-button>
                    </div>
                </b-modal>
            </template>

        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            showdetails: false,
            fdt: null,
        }
    },
    computed: {
        ...mapGetters({
            services: 'services/services',
        })
    },
    methods: {
        show(data){
            this.showdetails = true
            this.fdt = data
        }
    },
}
</script>

<style>

</style>
