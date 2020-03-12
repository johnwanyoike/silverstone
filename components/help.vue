<template>
    <span>
        <h5 class="text-center">
            Unsure where to find your tyre size?
            <a class="text-dark" href="#pablo" data-toggle="modal" style="font-weight: 600;" data-target="#searchreadmore">
                <b-button class="btn-sm" v-b-modal.modal-lg variant="primary">
                    Click here for more information.
                </b-button>
            </a>
            <!-- <button class="btn btn-info btn-sm" @click.prevent="$emit('clearSearch')">Clear Search</button> -->
            
        </h5>
        <b-modal id="modal-lg" size="lg" title="Finding Your Tyre Size" ok-only>
            <div class="row">
                <div class="col-12 text-left">
                    <p>Your tyre size can be found on the sidewall of your current tyre and is a sequence of numbers and letters. It’s important to check your existing tyre or to check your vehicle handbook to ensure the right tyre size has been installed.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 ml-auto mr-auto">
                    <div class="tab-content tab-space text-center">
                        <template v-if="showwidth">
                            <!-- <div class="tab-pane active" id="twidth"> -->
                                <img src="/img/sec.jpg" width="350" alt="">
                                <h4 style="font-weight:600;">Tyre Width</h4>
                                <p class="text-left">The first three digits. This displays the width of the tyre in millimetres. A tyre marked 225 will measure 225mm across the tread from sidewall to sidewall.</p>
                            <!-- </div> -->
                        </template>
                        <template v-if="showratio">
                            <!-- <div class="tab-pane" id="tratio"> -->
                                <img src="/img/sec1.jpg" width="350" alt="">
                                <h4 style="font-weight:600;">Aspect Ratio</h4>
                                <p class="text-left">The fourth and fifth digits of the tyre code that immediately follow the tyre width. The aspect ratio or profile height of the tyre sidewall is expressed as a percentage of the tyre width. So an aspect ratio of 55 for example means that the profile height of the tyre is 55% of its width.</p>
                            <!-- </div> -->
                        </template>
                        <template v-if="showdiameter">
                            <!-- <div class="tab-pane" id="tdiameter"> -->
                                <img src="/img/sec2.jpg" width="350" alt="">
                                <h4 style="font-weight:600;">Rim Diameter</h4>
                                <p class="text-left">The next two digits represent the size of the wheel rim that the tyre can be fitted to. It is also the diameter of the tyre from bead to bead.  So a tyre marked 16 will fit on a 16-inch wheel rim.</p>
                            <!-- </div> -->
                        </template>
                    </div>
                </div>
            </div>

            <ul class="nav nav-pills nav-pills-warning">
                <li class="nav-item ml-auto mr-auto">
                    <a style="font-size: 14px;" @click.prevent='servicedata(1)' :class="[showwidth == true ? 'active show' : '']" class="nav-link" href="#twidth" data-toggle="tab">Tyre Width</a>
                </li>
                <li class="nav-item ml-auto mr-auto">
                    <a style="font-size: 14px;" @click.prevent='servicedata(2)' :class="[showratio == true ? 'active show' : '']" class="nav-link" href="#tratio" data-toggle="tab">Aspect Ratio</a>
                </li>
                <li class="nav-item ml-auto mr-auto">
                    <a style="font-size: 14px;" @click.prevent='servicedata(3)' :class="[showdiameter == true ? 'active show' : '']" class="nav-link" href="#tdiameter" data-toggle="tab">Rim Diameter</a>
                </li>
            </ul>
            <div slot="modal-footer" class="w-100 d-none"></div>
        </b-modal>
    </span>
</template>

<script>
export default {
    data() {
        return {
            showwidth: false,
            showratio: false,
            showdiameter: false,
        }
    },
    methods: {
        servicedata(val){
            if (val == 1) {
                console.log('showing width')
                this.showwidth = true
                this.showratio = false
                this.showdiameter = false
            }else if (val == 2) {
                console.log('showing ratio')
                this.showwidth = false
                this.showratio = true
                this.showdiameter = false
            } else if (val == 3) {
                console.log('showing diameter')
                this.showwidth = false
                this.showratio = false
                this.showdiameter = true
            } else {}
        },
    },
    mounted() {
        this.showratio = true
    },
}
</script>

<style>

</style>
