<template>
  <div>
    <div
      v-for="item in featureArea"
      :key="item.id"
      :class="'iot-features-area ptb-80 ' + item.class"
    >
      <b-container>
        <b-row class="align-items-center">
          <b-col v-if="item.image_loc === 'left'" lg="6" class="iot-features-image">
            <picture>
              <source
                :media="'(min-width:' + item?.photo?.data?.attributes?.width +'px)'"
                :srcset="item?.photo?.data?.attributes?.url"
              >
              <source
                v-for="(size, index) in Object.values(item?.photo?.data?.attributes?.formats || {})"
                :key="index"
                :media="'(min-width:' + size.width +'px)'"
                :srcset="size.url"
              >
              <img
                v-wow
                :src="item?.photo?.data?.attributes?.url"
                :alt="item?.photo?.data?.attributes?.alternativeText"
                :title="item?.photo?.data?.attributes?.caption"
                class="wow fadeInUp"
                data-wow-delay="0.6s"
              >
            </picture>
          </b-col>
          <div class="col-lg-6 iot-features-content">
            <h3>{{ item.title }}</h3>
            <div v-html="item.detail" />
            <nuxt-link v-if="item.button" :to="item.button.url" :class="item.button.class">
              {{ item.button.title }}
            </nuxt-link>
          </div>
          <b-col v-if="item.image_loc === 'right'" lg="6" class="iot-features-image">
            <picture>
              <source
                :media="'(min-width:' + item?.photo?.data?.attributes?.width +'px)'"
                :srcset="item?.photo?.data?.attributes?.url"
              >
              <source
                v-for="(size, index) in Object.values(item?.photo?.data?.attributes?.formats || {})"
                :key="index"
                :media="'(min-width:' + size.width +'px)'"
                :srcset="size.url"
              >
              <img
                v-wow
                :src="item?.photo?.data?.attributes?.url"
                :alt="item?.photo?.data?.attributes?.alternativeText"
                :title="item?.photo?.data?.attributes?.caption"
                class="wow fadeInUp"
                data-wow-delay="0.6s"
              >
            </picture>
          </b-col>
        </b-row>
      </b-container>
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
