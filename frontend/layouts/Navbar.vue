<template>
  <div class="top-bar mb-0 pb-0">
    <div class="languages-area">
      <div class="languages">
        <span>English</span>
        <ul>
          <li>English</li>
          <li>Türkçe</li>
        </ul>
      </div>
      <div class="currencies">
        <span>USD/$</span>
        <ul>
          <li>EUR/€</li>
          <li>GBP/£</li>
          <li>EUR/€</li>
          <li>GBP/£</li>
        </ul>
      </div>
      <div class="text-top">
        <p>Order online or call us <a href="#" class="active-color">(+1800) 000 8808</a></p>
      </div>
    </div>
    <div class="top-links">
      <ul v-if="contact.socials" class="social-icon mb-0 pb-0" tabindex="0">
        <li v-for="item in contact.socials" :key="item.id">
          <a :href="item.url" target="_blank" :class="item.class">
            <feather :type="item.icon" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    computed: {
        contact () {
            return this.$store.getters['getContact'];
        }
    }
};
</script>

<style scoped>

</style>
