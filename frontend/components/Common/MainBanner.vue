<template>
  <!-- Start Main Banner -->
  <div v-if="mainBanner.title" class="main-banner">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-lg-5">
              <div class="hero-content">
                <h1>{{ mainBanner.title }}</h1>
                <div v-html="mainBanner.detail " />
                <nuxt-link :to="mainBanner.button.url" :class="mainBanner.button.class">
                  {{ mainBanner.button.title }}
                </nuxt-link>
              </div>
            </div>

            <div class="col-lg-5 offset-lg-1">
              <div class="banner-form ml-3">
                <form>
                  <div class="form-group">
                    <label>{{ registerArea.username_title }}</label>
                    <input type="text" class="form-control" :placeholder="registerArea.username_placeholder">
                  </div>

                  <div class="form-group">
                    <label>{{ registerArea.email_title }}</label>
                    <input type="email" class="form-control" :placeholder="registerArea.email_placeholder">
                  </div>

                  <div class="form-group">
                    <label>{{ registerArea.password_title }}</label>
                    <input type="password" class="form-control" :placeholder="registerArea.password_placeholder">
                  </div>

                  <button v-if="registerArea.button" type="submit" :class="registerArea.button.class">
                    {{ registerArea.button.title }}
                  </button>
                </form>
              </div>
            </div>
          </div>
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
  <!-- End Main Banner -->
</template>

<script>
export default {
    name: 'MainBanner',
    computed: {
        mainBanner () {
            return this.$store.getters['home/getMainBanner'];
        },
        registerArea () {
            return this.$store.getters['home/getRegisterArea'];
        }
    }
};
</script>
