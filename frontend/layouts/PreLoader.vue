<template>
  <div>
    <div v-if="!loading" class="preloader">
      <div class="spinner" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'PreLoader',
    data: () => ({
        loading: false
    }),
    created () {
        this.$nextTick(function () {
            this.loading = true;
        });
    }
};
</script>
