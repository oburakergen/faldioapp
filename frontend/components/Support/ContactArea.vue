<template>
  <div class="contact-area ptb-80 pt-0">
    <div class="container">
      <div class="section-title">
        <h2>{{ contact.title }}</h2>
        <div class="bar" />
        <p>{{ contact.detail }}</p>
      </div>

      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-lg-12">
          <Alert :alert="alert" />
        </div>
        <div class="col-lg-6 col-md-12">
          <img
            :src="contact.photo.data.attributes.url"
            :alt="contact.photo.data.attributes.alternativeText"
            :title="contact.photo.data.attributes.caption"
          >
          <figcaption>{{ contact.photo.data.attributes.caption }}</figcaption>
        </div>

        <div class="col-lg-6 col-md-12">
          <form id="contactForm" @submit.prevent="createContactForm">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    class="form-control"
                    :placeholder="contact.name_area"
                  >
                </div>
              </div>

              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    name="email"
                    class="form-control"
                    :placeholder="contact.email_area"
                  >
                </div>
              </div>

              <div class="col-lg-12 col-md-6">
                <div class="form-group">
                  <input
                    id="phone_number"
                    v-model="form.phone"
                    type="text"
                    name="phone"
                    class="form-control"
                    :placeholder="contact.phone_area"
                  >
                </div>
              </div>

              <div class="col-lg-12 col-md-6">
                <div class="form-group">
                  <input
                    id="msg_subject"
                    v-model="form.subject"
                    type="text"
                    name="subject"
                    class="form-control"
                    :placeholder="contact.subject_area"
                  >
                </div>
              </div>

              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <textarea
                    id="message"
                    v-model="form.message"
                    name="message"
                    class="form-control"
                    cols="30"
                    rows="5"
                    :placeholder="contact.message_area"
                  />
                </div>
              </div>

              <div v-if="contact.button" class="col-lg-12 col-md-12">
                <button type="submit" class="btn btn-primary">
                  {{ contact.button.title }}
                </button>
                <div id="msgSubmit" class="h3 text-center hidden" />
                <div class="clearfix" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Alert from '@/components/Forms/Alert/Alert.vue';

export default {
    name: 'ContactArea',
    components: { Alert },
    props: ['contact'],
    data () {
        return {
            form: {
                email: 'burak@mail.com',
                phone: '123',
                subject: 'asd',
                message: 'asd',
                device: ''
            },
            alert: {
                variant: 'success',
                show: false,
                msg: 'msg not found'
            }
        };
    },
    methods: {
        createContactForm () {
            this.form.device = Lap.browser.getDeviceType();

            this.alert = {
                variant: 'success',
                show: true,
                msg: 'Mesaj Başarı İle Gönderildi. En kısa Sürede Size Dönüş Sağlayacağız.'
            };
            // try {
            //     await this.$store.dispatch('form/createContactForm', this.form);
            //
            //
            // } catch (e) {
            //
            // }
        }
    }
};
</script>
