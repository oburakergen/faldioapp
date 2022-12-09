<template>
  <div v-if="mainBanner.title" class="main-banner">
    <div class="d-table">
      <div class="d-table-cell">
        <b-container>
          <b-row class="h-100 justify-content-center align-items-center">
            <b-col lg="5">
              <div class="hero-content">
                <h1>{{ mainBanner.title }}</h1>
                <div v-html="mainBanner.detail" />
                <nuxt-link :to="mainBanner.button.url" :class="mainBanner.button.class">
                  {{ mainBanner.button.title }}
                </nuxt-link>
              </div>
            </b-col>
            <b-col lg="5" offset-lg="1">
              <div class="banner-form ml-3">
                <b-form id="register-user" aria-label="Kayıt Ol" @submit.prevent="createRegisterTeller">
                  <b-form-group
                    id="username-group"
                    :label="registerArea.username_title"
                    label-for="username"
                  >
                    <b-form-input
                      id="username"
                      v-model="form.username"
                      aria-label="username"
                      type="text"
                      :placeholder="registerArea.username_placeholder"
                      required
                      tabindex="0"
                    />
                  </b-form-group>

                  <b-form-group
                    id="email-group"
                    :label="registerArea.email_title"
                    label-for="email"
                  >
                    <b-form-input
                      id="email"
                      v-model="form.email"
                      aria-label="email"
                      type="email"
                      :placeholder="registerArea.email_placeholder"
                      required
                    />
                  </b-form-group>

                  <b-form-group
                    id="password-group"
                    :label="registerArea.password_title"
                    label-for="password"
                  >
                    <b-form-input
                      id="password"
                      v-model="form.password"
                      aria-label="password"
                      type="password"
                      :placeholder="registerArea.password_placeholder"
                      required
                    />
                  </b-form-group>

                  <b-button v-if="registerArea.button" type="submit" :class="registerArea.button.class">
                    {{ registerArea.button.title }}
                  </b-button>
                </b-form>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <Shape />
  </div>
</template>

<script>
import Shape from '@/components/Helper/Shape.vue';

export default {
    name: 'MainBanner',
    components: { Shape },
    data () {
        return {
            form: {
                username: '',
                email: '',
                password: ''
            },
            alert: {
                variant: 'success',
                show: false,
                msg: 'msg not found'
            }
        };
    },
    computed: {
        mainBanner () {
            return this.$store.getters['home/getMainBanner'];
        },
        registerArea () {
            return this.$store.getters['home/getRegisterArea'];
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
