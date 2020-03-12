<template>
    <nav class="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
    <div class="container-fluid">
        <div class="navbar-translate">
            <nuxt-link :to="{ name: 'index' }">
                <img src="/img/logo.png" width="170">
            </nuxt-link>
            <span class="title text-warning mt-0">
                <i class="text-warning material-icons animated swing infinite">phone</i>
                <a href="tel:+254730772999" class="text-warning" style="font-size: 24px;">0730 772 999</a>
            </span>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>

        <!-- <span class="title text-warning mt-0" style="position: fixed; top:0; z-index:1000; left: 45%;">
            <i class="text-warning material-icons animated swing infinite">phone</i>
            <a href="tel:+254730772100" class="text-warning" style="font-size: 24px;">0730 772 100</a>
        </span> -->
        
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li class="dropdown nav-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        TYRES
                    </a>
                     <!-- :to="{ name: br.slug, params: {brand:br.name} }" -->
                    <div class="dropdown-menu dropdown-with-icons">
                        <nuxt-link v-for="(br, i) in normaltyres" :key="i" :to="{ name: 'brand-slug', params: {slug:br.slug} }" class="dropdown-item">
                            {{br.name}}
                        </nuxt-link>
                    </div>
                </li>
                <li class="dropdown nav-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        Speciality Tyres
                    </a>
                    <div class="dropdown-menu dropdown-with-icons">
                        <nuxt-link v-for="(br, i) in specialtyres" :key="i" :to="{ name: 'brand-slug', params: {slug:br.slug} }" class="dropdown-item">
                            {{br.name}}
                        </nuxt-link>
                    </div>
                </li>
                <li class="dropdown nav-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        Batteries
                    </a>
                    <div class="dropdown-menu dropdown-with-icons">
                        <nuxt-link :to="{ name: 'hankookbatteries' }" class="dropdown-item">
                            Hankook batteries
                        </nuxt-link>
                        <nuxt-link :to="{ name: 'fortebatteries' }" class="dropdown-item">
                            Forte batteries
                        </nuxt-link>
                    </div>
                </li>
                <li class="dropdown nav-item">
                    <nuxt-link class="nav-link" :to="{ name: 'index', params: {brand:'services'} }">
                        Services
                    </nuxt-link>
                </li>
                <li class="dropdown nav-item">
                    <nuxt-link class="nav-link" :to="{ name: 'aspira' }">
                        Aspira
                    </nuxt-link>
                </li>
                <li class="dropdown nav-item">
                    <nuxt-link class="nav-link" :to="{ name: 'tyresurance' }">
                        Tyresurance
                    </nuxt-link>
                </li>
                <li class="dropdown nav-item">
                    <nuxt-link :to="{ name: 'storelocator', params: {brand:'storelocator'} }" class="nav-link">
                        Locate a store
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
    <a href="https://api.whatsapp.com/send?phone=254730772999&text=Hi%20Silverstone,%20please%20help%20me%20out.%20My%20query%20is" target="_blank" id="wa_chat" class="whatsapp_a wobble-horizontal" style="background-color: rgb(25, 194, 104); border-radius: 50%; width: 50px; height: 50px; padding: .6rem; position: fixed; bottom: 10px; right: 10px; text-align: center; cursor: pointer; z-index: 9999;">
        <span id="wa_icon" class="fa fa-whatsapp" style="color: rgb(255, 255, 255); font-size: 29px;"></span>
    </a>

</nav>
</template>

<script>
  import { mapGetters } from "vuex";
    export default {
        computed: {
            ...mapGetters({
                brands: 'brands',
            }),
            normaltyres: function(){
                var filtered = [];
                filtered = this.brands.filter((br) => {
                    return br.name != 'Galaxy' && br.name != 'Maxam'
                })
                return filtered;
            },
            specialtyres: function(){
                var filtered = [];
                filtered = this.brands.filter((br) => {
                    return br.name == 'Galaxy' || br.name == 'Maxam'
                })
                return filtered;
            },
            link () {
                return {
                    name: 'brand-slug',
                    params: {
                        slug: this.brands.slug
                    }
                }
            }
        }
    };
</script>
<style>
</style>




