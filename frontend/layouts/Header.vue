<template>
  <header id="header" :class="['headroom', {'is-sticky': isSticky, 'is-relative': !isSticky}]" aria-label="Header">
    <!-- header content -->
    <div class="startp-nav">
      <b-container>
        <b-navbar toggleable="md" type="light">
          <b-navbar-brand href="/">
            <img src="~/assets/img/logo.png" alt="logo">
          </b-navbar-brand>

          <b-navbar-toggle target="navbarSupportedContent" />

          <b-collapse id="navbarSupportedContent" class="collapse navbar-collapse mean-menu" is-nav>
            <b-navbar-nav class="nav ml-auto">
              <li v-for="(menu, index) in menus" :key="index" class="nav-item">
                <NuxtLink :to="menu.url" class="nav-link">
                  {{ menu.title }}
                </NuxtLink>
              </li>
            </b-navbar-nav>
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
        </b-navbar>
      </b-container>
    </div>
    <!-- header content -->
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
