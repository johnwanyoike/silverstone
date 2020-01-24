<template>
  <div>
    <Navigation />
    <nuxt/>
    <FooterData/>
  </div>
</template>
<script>
    import Navigation from '@/layouts/partials/Navigation'
    import FooterData from '@/layouts/partials/FooterData'
    export default {
        components: {
            Navigation,
            FooterData
        },
    }
</script>
<style>

</style>
