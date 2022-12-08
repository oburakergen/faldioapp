<template>
  <div class="contact-info-area ptb-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="contact-info-box">
            <div class="icon">
              <feather type="mail" />
            </div>
            <h3>{{ contact.contact_email_title }}</h3>
            <p>   <a :href="'mailto:' + contact.contact_email">{{ contact.contact_email }}</a></p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="contact-info-box">
            <div class="icon">
              <feather type="map-pin" />
            </div>
            <h3>{{ contact.contact_address_title }}</h3>
            <p>{{ contact.contact_address }}</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
          <div class="contact-info-box">
            <div class="icon">
              <feather type="phone" />
            </div>
            <h3>{{ contact.contact_phone_title }}</h3>
            <p><a :href="'tel:'+ contact.contact_phone">{{ contact.contact_phone }}</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ContactInfo',
    props: ['contact']
};
</script>
