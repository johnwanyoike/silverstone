<template>
	<div class="mobile-margin">
        <no-ssr>
            <slick-slide ref="slick" :options="slickOptions">
                <!-- <img src="/img/slider/Promo_WEB_BANNER.jpg" alt=""> -->
                <img src="/img/slider/image4.jpg" alt="">
                <img src="/img/slider/tyreassurance.jpg" alt="" @click="gotto('tyresurance')">
                <img src="/img/slider/aspira.jpg" alt="" @click="gotto('aspira')">
                <img src="/img/slider/image16.jpg" alt="">
                <img src="/img/slider/image14.jpg" alt="">
            </slick-slide>
        </no-ssr>
	</div>
</template>

<script>
export default {
	data () {
        return {
            slickOptions: {
				slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000
			},
            slides:[{
                    'image':'Promo_WEB_BANNER.jpg',
                    'animation': 'fadeIn'
                },{
                    'image':'image4.jpg',
                    'animation': 'fadeInDown'
                },{
                    'image':'tyreassurance.jpg',
                    'animation': 'fadeInRight'
                },{
                    'image':'aspira.jpg',
                    'animation': 'fadeInUp'
                },{
                    'image':'image16.jpg',
                    'animation': 'fadeInRight'
                },{
                    'image':'image14.jpg',
                    'animation': 'fadeInDown'
                }
            ],
            startnow: null,
            currentSlide: null,
            showingSlide: null,
            slideanimation: null
        }
    },
    watch: {
        startnow: function() {
            var count = this.slides.length - 1;
            this.slideanimation = null
            if (this.currentSlide < count) {
                this.currentSlide ++
            }else{
                this.currentSlide = 0
            }
            this.showingSlide = this.slides[this.currentSlide].image
            this.slideanimation = this.slides[this.currentSlide].animation
            // console.log(this.slides[this.currentSlide]+' '+this.currentSlide)
        }
    },
    methods: {
        myTimer(){
            setInterval(() => {
                this.startnow = new Date().getTime() / 1000;
            }, 5000);
        },
        next() {
            this.$refs.slick.next();
        },
        gotto(val){
            this.$router.replace(val)
        },
        prev() {
            this.$refs.slick.prev();
        },
 
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
 
        // Events listeners
        // handleAfterChange(event, slick, currentSlide) {
        //     console.log('handleAfterChange', event, slick, currentSlide);
        // },
        // handleBeforeChange(event, slick, currentSlide, nextSlide) {
        //     console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        // },
        // handleBreakpoint(event, slick, breakpoint) {
        //     console.log('handleBreakpoint', event, slick, breakpoint);
        // },
        // handleDestroy(event, slick) {
        //     console.log('handleDestroy', event, slick);
        // },
        // handleEdge(event, slick, direction) {
        //     console.log('handleEdge', event, slick, direction);
        // },
        // handleInit(event, slick) {
        //     console.log('handleInit', event, slick);
        // },
        // handleReInit(event, slick) {
        //     console.log('handleReInit', event, slick);
        // },
        // handleSetPosition(event, slick) {
        //     console.log('handleSetPosition', event, slick);
        // },
        // handleSwipe(event, slick, direction) {
        //     console.log('handleSwipe', event, slick, direction);
        // },
        // handleLazyLoaded(event, slick, image, imageSource) {
        //     console.log('handleLazyLoaded', event, slick, image, imageSource);
        // },
        // handleLazeLoadError(event, slick, image, imageSource) {
        //     console.log('handleLazeLoadError', event, slick, image, imageSource);
        // },





    },
    mounted() {
        this.myTimer()
        this.showingSlide = this.slides[0].image
        this.slideanimation = this.slides[0].animation
        // console.log(this.slides[0].image)
    },
};

// import moment from 'moment'
// export default {
//     data () {
//         return {
//             startnow: null,
//             slideCounter: 0,
//             slide:3
//         }
//     },
//     methods: {
//         myTimer(){
//             setInterval(() => {
//                 this.startnow = moment().format('s');
//             }, 3000);
//         }
//     },
//     watch: {
//         startnow: function() {
//             if (this.slideCounter < this.slide) {
//                 this.slideCounter ++
//             }else{
//                 this.slideCounter = 0
//             }
//         }
//     },
//     mounted() {
//         this.myTimer()
//     }
// }
</script>
<style>
    @media screen and (max-width: 990px) {
        .mobile-margin{
            margin-top: 65px;
        }
    }
</style>