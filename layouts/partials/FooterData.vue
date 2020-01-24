<template>
    <footer class="footer footer-black footer-big">
        <div class="container">
            <div class="content">
                <div class="row">
                    <div class="col-md-8">
                        <h5>About Us</h5>
                        <p v-for="ft in footerdata" :key="ft.id">{{ft.para}}</p>
                    </div>
                    <div class="col-md-4">
                        <h5>Newsletters</h5>
                        <p>Stay informed with our newsletter. Please trust us, we will never send you spam.</p>
                        <!-- <form action="">
                            <div class="form-group">
                                <input type="text" class="form-control" id="phone">
                            </div>
                            <div class="submit text-center">
                                <input type="button" class="btn btn-primary btn-raised btn-round" value="Subscribe">
                            </div>
                        </form> -->
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-4">
                    <ul class="float-left">
                        <li>
                            <a href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/storelocator">
                                Locate a store
                            </a>
                        </li>
                        <li>
                            <a href="/#ourservices">
                                Our services
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4 text-center pt-3">
                    <!-- <span class="title text-warning mx-auto"><i class="text-warning material-icons animated swing infinite">phone</i> <a href="tel:+254730772100" class="text-warning" style="font-size: 24px;">0730 772 100</a></span> -->
                </div>
                <div class="col-md-4">
                    <div class="copyright float-right">
                        © SILVERSTONE - CONTIPARTNER.
                    </div>
                </div>
            </div>
            
        </div>
    </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            footerdata: 'footerdata/footerdata',
        })
    },
}
</script>

<style>

</style>
