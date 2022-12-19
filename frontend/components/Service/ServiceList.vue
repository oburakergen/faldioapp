<template>
  <div class="agency-services-area ptb-80">
    <b-container>
      <b-row>
        <b-col lg="4" sm="6" md="6">
          <div class="agency-services-box">
            <img src="~/assets/img/agency-image/services-img1.jpg" alt="image">

            <div class="content">
              <h3><nuxt-link to="#">IT Professionals</nuxt-link></h3>
              <nuxt-link to="#" class="read-more-btn">
                Listele <feather type="plus-circle" />
              </nuxt-link>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <Shape />
  </div>
</template>

<script>
import Shape from '@/components/Helper/Shape.vue';

export default {
    name: 'ServiceList',
    components: { Shape }
};
</script>

<style scoped>

</style>
