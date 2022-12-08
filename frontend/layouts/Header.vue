<template>
  <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
    <div class="startp-nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <NuxtLink class="navbar-brand" to="/">
            <img src="~/assets/img/logo.png" alt="logo">
          </NuxtLink>

          <b-navbar-toggle target="navbarSupportedContent" />

          <b-collapse id="navbarSupportedContent" class="collapse navbar-collapse mean-menu" is-nav>
            <ul class="navbar-nav nav ml-auto">
              <li v-for="(menu, index) in menus" :key="index" class="nav-item">
                <NuxtLink :to="menu.url" class="nav-link">
                  {{ menu.title }}
                </NuxtLink>
              </li>
            </ul>
          </b-collapse>

          <div v-if="register.length > 0" class="others-option">
            <nuxt-link
              v-for="item in register"
              :key="item.id"
              :to="item.url"
              :class="item.class"
            >
              {{ item.title }}
            </nuxt-link>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            isSticky: false
        };
    },
    computed: {
        menus () {
            return this.$store.getters['menu/header'];
        },
        register () {
            return this.$store.getters['menu/register'];
        }
    },
    mounted () {
        const that = this;

        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            // eslint-disable-next-line no-console

            if (scrollPos >= 100) {
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        });
    }
};
</script>
