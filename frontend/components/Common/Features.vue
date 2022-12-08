<template>
  <div>
    <div
      v-for="item in featureArea"
      :key="item.id"
      :class="'iot-features-area ptb-80 ' + item.class"
    >
      <div class="container">
        <div class="row align-items-center">
          <div v-if="item.image_loc === 'left'" class="col-lg-6 iot-features-image">
            <img
              v-wow
              :src="item.photo.data.attributes.url"
              :alt="item.photo.data.attributes.alternativeText"
              :title="item.photo.data.attributes.caption"
              class="wow fadeInUp"
              data-wow-delay="0.6s"
            >
            <figcaption>{{ item.photo.data.attributes.caption }}</figcaption>
          </div>
          <div class="col-lg-6 iot-features-content">
            <h3>{{ item.title }}</h3>
            <div v-html="item.detail" />
            <nuxt-link v-if="item.button" :to="item.button.url" :class="item.button.class">
              {{ item.button.title }}
            </nuxt-link>
          </div>
          <div v-if="item.image_loc === 'right'" class="col-lg-6 iot-features-image">
            <img
              v-wow
              :src="item.photo.data.attributes.url"
              :alt="item.photo.data.attributes.alternativeText"
              :title="item.photo.data.attributes.caption"
              class="wow fadeInUp"
              data-wow-delay="0.6s"
            >
            <figcaption>{{ item.photo.data.attributes.caption }}</figcaption>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Features',
    computed: {
        featureArea () {
            return this.$store.getters['home/getFeatureArea'];
        }
    }
};
</script>
