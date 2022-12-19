<template>
  <div>
    <PageTitle />
    <div class="agency-about-area ptb-80">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div v-html="about" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle';

export default {
    name: 'About',
    components: {
        PageTitle
    },
    async fetch () {
        await this.$store.dispatch('about/getAboutPage', '?populate=deep');
    },
    computed: {
        about () {
            return this.$store.state.about.aboutPage;
        },
        seo () {
            return this.$store.getters['home/getHomeSeo'];
        }
    }
};
</script>

<style scoped>

</style>
