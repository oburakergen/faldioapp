<template>
  <!-- Start Boxes Area -->
  <div class="boxes-area">
    <div class="container">
      <div class="row">
        <div
          v-for="item in boxesArea"
          :key="item.id"
          :class="'col-lg-' + parseInt(12 / boxesArea.length ) + ' col-md-6 col-sm-6'"
        >
          <div :class="'single-box ' + item.class">
            <div class="icon">
              <feather :type="item.icon" />
            </div>
            <h3>{{ item.title }}</h3>
            <p> {{ item.detail }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Boxes Area -->
</template>

<script>
export default {
    name: 'BoxesArea',
    computed: {
        boxesArea () {
            return this.$store.getters['home/getBoxesArea'];
        }
    }
};
</script>
