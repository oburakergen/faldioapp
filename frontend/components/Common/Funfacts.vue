<template>
  <div v-if="funfactArea.title" class="funfacts-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>{{ funfactArea.title }}</h2>
        <div class="bar" />
        <p>
          {{ funfactArea.detail }}
        </p>
      </div>

      <div v-if="funfactArea.counter" class="row">
        <div v-for="item in funfactArea.counter" :key="item.id" class="col-lg-3 col-md-3 col-6 col-sm-3">
          <div class="funfact">
            <h3><span>{{ item.count }}</span>+</h3>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>

      <div v-if="funfactArea.button?.title" class="contact-cta-box">
        <h3>{{ funfactArea.button_title }}</h3>
        <p>{{ funfactArea.button_detail }}</p>
        <nuxt-link :to="funfactArea.button.url" :class="funfactArea.button.class">
          {{ funfactArea.button.title }}
        </nuxt-link>
      </div>

      <div v-if="funfactArea.photo" class="map-bg">
        <img
          :src="funfactArea.photo.data.attributes.url"
          :alt="funfactArea.photo.data.attributes.alternativeText"
          :title="funfactArea.photo.data.attributes.caption"
        >
        <figcaption>{{ funfactArea.photo.data.attributes.caption }}</figcaption>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Funfacts',
    computed: {
        funfactArea () {
            return this.$store.getters['home/getFunfactArea'];
        }
    }
};
</script>
