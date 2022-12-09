<template>
  <div class="page-title-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div id="breadcrumb" class="container">
          <h2>{{ getCurrentMenu?.title }}</h2>
          <div class="text-muted mt-2" v-html=" getCurrentMenu?.detail" />
        </div>
      </div>
    </div>

    <div class="shape1">
      <img src="~/assets/img/shape1.png" alt="shape">
    </div>
    <div class="shape2 rotateme">
      <img src="~/assets/img/shape2.svg" alt="shape">
    </div>
    <div class="shape3">
      <img src="~/assets/img/shape3.svg" alt="shape">
    </div>
    <div class="shape4">
      <img src="~/assets/img/shape4.svg" alt="shape">
    </div>
    <div class="shape5">
      <img src="~/assets/img/shape5.png" alt="shape">
    </div>
    <div class="shape6 rotateme">
      <img src="~/assets/img/shape4.svg" alt="shape">
    </div>
    <div class="shape7">
      <img src="~/assets/img/shape4.svg" alt="shape">
    </div>
    <div class="shape8 rotateme">
      <img src="~/assets/img/shape2.svg" alt="shape">
    </div>
  </div>
</template>

<script>
export default {
    name: 'PageTitle',
    computed: {
        getCurrentMenu () {
            return this.$store.state.menu.currentMenu;
        }
    },
    watch: {
        $route (to) {
            this.$store.dispatch('menu/currentMenu', to.path);
        }
    },
    mounted () {
        this.$store.dispatch('menu/currentMenu', this.$route.path);
    }
};
</script>
