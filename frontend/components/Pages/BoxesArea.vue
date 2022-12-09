<template>
  <div v-if="boxesArea.length > 0" class="boxes-area">
    <b-container>
      <b-row>
        <b-col
          v-for="item in boxesArea"
          :key="item.id"
          md="6"
          sm="6"
          :lg="parseInt(12 / boxesArea.length )"
        >
          <div :class="'single-box ' + item.class">
            <div class="icon">
              <feather :type="item.icon" />
            </div>
            <div>{{ item.title }}</div>
            <p> {{ item.detail }} </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
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
