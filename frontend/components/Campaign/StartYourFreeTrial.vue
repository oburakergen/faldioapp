<template>
  <div v-if="freeTrialArea.title" class="newsletter-area">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div v-if="freeTrialArea.photo" class="newsletter-image">
            <img
              :src="freeTrialArea.photo.data.attributes.url"
              :alt="freeTrialArea.photo.data.attributes.alternativeText"
              :title="freeTrialArea.photo.data.attributes.caption"
            >
            <figcaption>{{ freeTrialArea.photo.data.attributes.caption }}</figcaption>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 p-0">
          <div class="newsletter-content">
            <h2>{{ freeTrialArea.title }}</h2>
            <form class="newsletter-form">
              <input type="email" class="input-newsletter" :placeholder="freeTrialArea.placeholder">
              <button v-if="freeTrialArea.button" type="submit" :class="freeTrialArea.class">
                {{ freeTrialArea.button.title }}
              </button>
            </form>
            <p>{{ freeTrialArea.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'StartYourFreeTrial',
    computed: {
        freeTrialArea () {
            return this.$store.getters['home/getFreeTrialArea'];
        }
    }
};
</script>
