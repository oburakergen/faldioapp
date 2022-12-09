<template>
  <div v-if="freeTrialArea.title" class="newsletter-area">
    <b-container fluid>
      <b-row class="align-items-center">
        <b-col lg="6" md="12" class="mobile-type">
          <div v-if="freeTrialArea.photo" class="newsletter-image">
            <picture>
              <source
                :media="'(min-width:' + freeTrialArea?.photo?.data?.attributes?.width +'px)'"
                :srcset="freeTrialArea?.photo?.data?.attributes?.url"
              >
              <source
                v-for="(size, index) in Object.values(freeTrialArea?.photo?.data?.attributes?.formats || {})"
                :key="index"
                :media="'(min-width:' + size.width +'px)'"
                :srcset="size.url"
              >
              <img
                :src="freeTrialArea?.photo?.data?.attributes?.url"
                :alt="freeTrialArea?.photo?.data?.attributes?.alternativeText"
                :title="freeTrialArea?.photo?.data?.attributes?.caption"
              >
            </picture>
          </div>
        </b-col>

        <b-col lg="6" md="12" class="p-0">
          <div class="newsletter-content">
            <h2>{{ freeTrialArea.title }}</h2>
            <b-form class="newsletter-form" @submit.prevent="createRegisterTeller">
              <input
                id="newsletter-email"
                type="email"
                class="input-newsletter"
                :placeholder="freeTrialArea.placeholder"
                aria-label="email"
              >
              <button v-if="freeTrialArea.button" type="submit" :class="freeTrialArea.class">
                {{ freeTrialArea.button.title }}
              </button>
            </b-form>
            <p>{{ freeTrialArea.detail }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    name: 'StartYourFreeTrial',
    data () {
        return {
            form: {
                email: ''
            },
            alert: {
                variant: 'success',
                show: false,
                msg: 'msg not found'
            }
        };
    },
    computed: {
        freeTrialArea () {
            return this.$store.getters['home/getFreeTrialArea'];
        }
    },
    methods: {
        createRegisterTeller () {
            this.form.device = Lap.browser.getDeviceType();

            this.alert = {
                variant: 'success',
                show: true,
                msg: 'Mesaj Başarı İle Gönderildi. En kısa Sürede Size Dönüş Sağlayacağız.'
            };
        }
    }
};
</script>
