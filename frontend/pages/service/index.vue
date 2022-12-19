<template>
  <div>
    <PageTitle />
    <ServiceList />
  </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import ServiceList from '@/components/Service/ServiceList.vue';

export default {
    name: 'Service',
    components: { PageTitle, ServiceList }
};
</script>

<style scoped>

</style>
