<template>
    <div class="about-services features-2">
        <div class="row">
            <div class="col-md-12 ml-auto mr-auto">
                <div class="row">
                    <div class="col-md-7 mr-auto ml-auto">
                        <div class="row">
                            <div class="col-12 pt-2">
                                <h3 class="my-0 title text-warning text-center">{{data.pattern}}</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-5">
                        <div class="row">
                            <div class="col-md-12">
                                <img width="50%" class="" :src="'/img/files/'+data.image">
                            </div>
                            <div class="col-12">
                                <template v-if="data.file">
                                    <a :href="'/img/pdf/'+data.pattern+'.pdf'" target="_blank" class="btn btn-warning btn-round mt-5"><i class="material-icons">subject</i> Download {{data.pattern}} file</a>
                                </template>
                            </div>
                            <div class="col-md-12 mt-4">
                                <h4 class="text-danger">Available sizes</h4>
                                <span v-for="ls in listing" :key="ls.id">
                                    <h6 class="card-category text-success">{{ls.size}}</h6>
                                    <p class="text-dark">{{ls.description}}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <h4 class="text-danger">Features and Benefits</h4>
                        <span v-for="ft in features" :key="ft.id">
                            <h6 class="card-category" :class="ptclass">{{ft.featuresTitle}}</h6>
                            <p class="text-dark">{{ft.featureDescription}}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                required: true,
                type: Object
            },
            features:{
                required: true,
                type: Array
            },
            ptclass:{
                required: true,
                type: String
            },
            listing:{
                required: true,
                type: Array
            }
        }
    }
</script>

<style>

</style>
