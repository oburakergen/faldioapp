<template>
  <div v-if="funfactArea.title" class="funfacts-area ptb-80">
    <b-container>
      <div class="section-title">
        <h2>{{ funfactArea.title }}</h2>
        <div class="bar" />
        <p>
          {{ funfactArea.detail }}
        </p>
      </div>

      <b-row v-if="funfactArea.counter">
        <b-col
          v-for="item in funfactArea.counter"
          :key="item.id"
          lg="3"
          md="3"
          sm="3"
          cols="6"
        >
          <div class="funfact">
            <h3><span>{{ item.count }}</span>+</h3>
            <p>{{ item.title }}</p>
          </div>
        </b-col>
      </b-row>

      <div v-if="funfactArea.button?.title" class="contact-cta-box">
        <h3>{{ funfactArea.button_title }}</h3>
        <p>{{ funfactArea.button_detail }}</p>
        <nuxt-link :to="funfactArea.button.url" :class="funfactArea.button.class">
          {{ funfactArea.button.title }}
        </nuxt-link>
      </div>

      <div v-if="funfactArea.photo" class="map-bg">
        <picture>
          <source
            :media="'(min-width:' + funfactArea?.photo?.data?.attributes?.width +'px)'"
            :srcset="funfactArea?.photo?.data?.attributes?.url"
          >
          <source
            v-for="(size, index) in Object.values(funfactArea?.photo?.data?.attributes?.formats || {})"
            :key="index"
            :media="'(min-width:' + size.width +'px)'"
            :srcset="size.url"
          >
          <img
            :src="funfactArea?.photo?.data?.attributes?.url"
            :alt="funfactArea?.photo?.data?.attributes?.alternativeText"
            :title="funfactArea?.photo?.data?.attributes?.caption"
          >
        </picture>
      </div>
    </b-container>
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
