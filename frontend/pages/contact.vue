<template>
  <div>
    <PageTitle />
    <ContactInfo :contact="contact" />
    <ContactArea :contact="contact" />
  </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle';
import ContactInfo from '../components/Support/ContactInfo';
import ContactArea from '../components/Support/ContactArea';
export default {
    name: 'Contact',
    components: {
        PageTitle,
        ContactInfo,
        ContactArea
    },
    head () {
        return this.seo;
    },
    computed: {
        contact () {
            return this.$store.getters['getContact'];
        },
        seo () {
            return this.$store.getters['getContactSeo'];
        }
    }
};
</script>

<style scoped>

</style>
