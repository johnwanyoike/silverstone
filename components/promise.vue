<template>
    <div class="section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="title text-center mb-0 text-warning mt-0">OUR PROMISE</h2>
                        <div class="card card-raised card-background" style="background-image: url('/img/Auto_Upgrades.jpg')">
                            <div class="row">
                            <!-- <h1 class="card-title"><small>$</small></h1> -->
                                <div class="col-md-6">
                                    <div class="card card-pricing card-plain">
                                        <div class="card-body" style="max-width: none;">
                                            <footer class="footer footer-big animated zoomIn faster p-0">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="social-feed">
                                                            <div class="feed-line">
                                                                <i class="material-icons text-warning">check</i>
                                                                <p class="text-white text-left bolder"> To offer the best possible products and services to all our customers</p>
                                                            </div>
                                                            <div class="feed-line">
                                                                <i class="material-icons text-warning">check</i>
                                                                <p class="text-white text-left bolder">To take complete and professional care of your vehicle while at our fitment centers</p>
                                                            </div>
                                                            <div class="feed-line">
                                                                <i class="material-icons text-warning">check</i>
                                                                <p class="text-white text-left bolder">To ensure your vehicle is inspected and worked on by a trained and qualified technical team</p>
                                                            </div>
                                                            <div class="feed-line">
                                                                <i class="material-icons text-warning">check</i>
                                                                <p class="text-white text-left bolder">To examine the vehicle with you and give the correct appraisal of the work required and document all findings.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </footer>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="card card-pricing card-plain">
                                        <div class="card-body" style="max-width: none;">
                                            <footer class="footer footer-big animated zoomIn faster p-0">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="social-feed">
                                                            <div class="feed-line">
                                                                <i class="material-icons text-warning">check</i>
                                                                <p class="text-white text-left bolder">To inform you immediately of any complications or delays.</p>
                                                            </div>
                                                            <div class="feed-line">
                                                                <i class="material-icons text-warning">check</i>
                                                                <p class="text-white text-left bolder">The replaceable parts are removed and shown to you for your inspection and you may choose to retain them.</p>
                                                            </div>
                                                            <div class="feed-line">
                                                                <i class="material-icons text-warning">check</i>
                                                                <p class="text-white text-left bolder"> To complete the work within a reasonable time frame.</p>
                                                            </div>
                                                            <div class="feed-line">
                                                                <i class="material-icons text-warning">check</i>
                                                                <p class="text-white text-left bolder">To only fit approved parts for your vehicle, should you wish to do so.</p>
                                                            </div>
                                                            <div class="feed-line">
                                                                <i class="material-icons text-warning">check</i>
                                                                <p class="text-white text-left bolder"> The cost of our services is clearly stated prior and no hidden charges are given thereafter.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </footer>
                                        </div>
                                    </div>
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

<script>
// import Contactform from "./contactform";
export default {
    // components: {
    //     Contactform
    // },
    data() {
        return {
            sendingMessage: false
        };
    },
    methods: {
        created(data) {
            // this.$swal({
            //     title: 'Thanks you '+data.data.name+', we will contact you.',
            // });
            this.sendingMessage = false
        },
    }
}
</script>

<style>

</style>
