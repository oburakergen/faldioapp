<template>
  <div>
    <Navbar />
    <Header />
    <Nuxt keep-alive :keep-alive-props="{ exclude: ['modal'], max:3 }" />
    <PreLoader />
    <Footer />
  </div>
</template>

<script>
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import PreLoader from '@/layouts/PreLoader';
import Navbar from '@/layouts/Navbar.vue';

export default {
    name: 'App',
    components: {
        Navbar,
        Header,
        Footer,
        PreLoader
    },
    async fetch () {
        await this.$store.dispatch('menu/getMenu',
            '?populate[items][fields][0]=count&populate[items][fields][1]=url' +
          '&populate[items][fields][2]=title&populate[items][fields][3]=choose_class' +
          '&populate[items][fields][4]=detail&populate[items][sort][1]=id%3Aasc');
        await this.$store.dispatch('actionContact');
    }
};
</script>
