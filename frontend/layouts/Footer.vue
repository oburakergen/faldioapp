<template>
  <footer class="footer-area bg-f7fafd" aria-label="Footer">
    <!-- footer content -->
    <b-container>
      <b-row role="contentinfo">
        <b-col lg="3" md="6" sm="6">
          <div class="single-footer-widget">
            <div class="logo">
              <nuxt-link to="/">
                <img src="~/assets/img/logo.png" alt="logo">
              </nuxt-link>
            </div>
            <div v-html="footer['Hakkımızda'][0]['detail']" />
          </div>
        </b-col>
        <b-col lg="3" md="6" sm="6">
          <div class="single-footer-widget pl-5">
            <h3>Kurumsal</h3>
            <ul class="list" tabindex="0">
              <li v-for="(item, index) in footer['Kurumsal']" :key="index">
                <nuxt-link :to="item.url">
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </b-col>

        <b-col lg="3" md="6" sm="6">
          <div class="single-footer-widget">
            <h3>Yardım</h3>
            <ul class="list" tabindex="0">
              <li v-for="(item, index) in footer['Yardım']" :key="index">
                <nuxt-link :to="item.url">
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </b-col>

        <b-col lg="3" md="6" sm="6">
          <div class="single-footer-widget">
            <h3>İletişim</h3>
            <ul class="footer-contact-info" tabindex="0">
              <li>
                <feather type="map-pin" /> {{ contact.contact_address_title }}: {{ contact.contact_address }}
              </li>
              <li>
                <feather type="mail" /> {{ contact.email_area }}:
                <a :href="'mailto:' + contact.contact_email">{{ contact.contact_email }}</a>
              </li>
              <li>
                <feather type="phone-call" /> {{ contact.contact_phone_title }}:
                <a :href="'tel:'+ contact.contact_phone">{{ contact.contact_phone }}</a>
              </li>
            </ul>
            <ul v-if="contact.socials" class="social-links" tabindex="0">
              <li v-for="item in contact.socials" :key="item.id">
                <a :href="item.url" target="_blank" :class="item.class">
                  <feather :type="item.icon" />
                </a>
              </li>
            </ul>
          </div>
        </b-col>

        <b-col lg="12" md="12">
          <div class="copyright-area">
            <p>
              Copyright 2022 - {{ currentYear }} <a target="_blank" href="https://laraplay.com/">
                &copy;Laraplay</a>. All Rights Reserved
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <img src="~/assets/img/map.png" class="map" alt="map">
    <div class="shape1">
      <img src="~/assets/img/shape1.png" alt="shape">
    </div>
    <div class="shape8 rotateme">
      <img src="~/assets/img/shape2.svg" alt="shape">
    </div>

    <back-to-top bottom="50px" right="50px">
      <div class="go-top">
        <feather type="arrow-up" />
      </div>
    </back-to-top>
    <!-- footer content -->
  </footer>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {
            currentYear: new Date().getFullYear()
        };
    },
    computed: {
        footer () {
            return this.$store.getters['menu/footer'];
        },
        contact () {
            return this.$store.getters['getContact'];
        }
    }
};
</script>
