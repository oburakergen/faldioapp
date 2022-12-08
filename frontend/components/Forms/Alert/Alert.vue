<template>
  <div>
    <b-alert :variant="alert.variant" :show="alert.show" dismissible>
      {{ alert.msg }}
    </b-alert>
  </div>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        alert: {
            type: Object,
            default () {
                return {
                    variant: 'success',
                    show: false,
                    msg: 'msg not found'
                };
            }
        }
    }
};
</script>

<style scoped>

</style>
