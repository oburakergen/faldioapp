<template>
  <div>
    <MainBanner />
    <BoxesArea />
    <!--    yapılmadı-->
    <TopUser />
    <!--    yapılmadı-->
    <Feedback />
    <Funfacts />
    <Features />
    <!--    yapılmadı-->
    <Pricing />
    <!--    yapılmadı-->
    <Blog />
    <StartYourFreeTrial />
  </div>
</template>

<script>
import MainBanner from '../components/Common/MainBanner';
import BoxesArea from '../components/Pages/BoxesArea';
import TopUser from '../components/Common/TopUser';
import Feedback from '../components/Common/Feedback';
import Funfacts from '../components/Common/Funfacts';
import Features from '../components/Common/Features';
import Pricing from '../components/Common/Pricing';
import Blog from '../components/Common/Blog';
import StartYourFreeTrial from '../components/Campaign/StartYourFreeTrial';

export default {
    components: {
        MainBanner,
        Feedback,
        TopUser,
        Funfacts,
        Pricing,
        Blog,
        StartYourFreeTrial,
        BoxesArea,
        Features
    },
    async fetch () {
        if (!this.$store?.state?.home?.funfact?.id) {
            await this.$store.dispatch('home/getHomePage',
                '?populate=deep');
        }
    },
    head () {
        return this.seo;
    },
    computed: {
        seo () {
            return this.$store.getters['home/getHomeSeo'];
        }
    }

};
</script>
