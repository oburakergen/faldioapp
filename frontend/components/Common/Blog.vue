<template>
  <div v-if="blog.title" class="blog-area ptb-80">
    <b-container>
      <div class="section-title">
        <h2>{{ blog.title }}</h2>
        <div class="bar" />
        <p>
          {{ blog.detail }}
        </p>
      </div>

      <b-row>
        <b-col
          v-for="(item, index) in blog.blogs.data"
          :key="item.id"
          lg="4"
          md="6"
          :class="(blog.blogs.data.length === (index + 1) && ((index + 1) % 2 === 1)) ? 'offset-lg-0 offset-md-3': ''"
        >
          <div class="single-blog-post">
            <div class="blog-image">
              <nuxt-link :to="'/blog/' + item?.attributes?.slug">
                <picture>
                  <source
                    :media="'(min-width:' + item?.attributes?.cover_photo?.data?.attributes?.width +'px)'"
                    :srcset="item?.attributes?.cover_photo?.data?.attributes?.url"
                  >
                  <source
                    v-for="(size, key) in Object.values(item?.attributes?.cover_photo?.data?.attributes?.formats || {})"
                    :key="key"
                    :media="'(min-width:' + size.width +'px)'"
                    :srcset="size.url"
                  >
                  <img
                    :src="item?.attributes?.cover_photo?.data?.attributes?.url"
                    :alt="item?.attributes?.cover_photo?.data?.attributes?.alternativeText"
                    :title="item?.attributes?.cover_photo?.data?.attributes?.caption"
                  >
                </picture>
              </nuxt-link>

              <div class="date">
                <feather type="calendar" /> <span v-locale-date-string>{{ item?.attributes?.updatedAt }}</span>
              </div>
            </div>

            <div class="blog-post-content">
              <h3>
                <nuxt-link :to="'/blog/' + item?.attributes?.slug">
                  {{ item?.attributes?.title }}
                </nuxt-link>
              </h3>

              <span>by <nuxt-link to="/blog">{{ item?.attributes?.author }}</nuxt-link></span>

              <p>
                {{ item?.attributes?.cover_letter }}
              </p>

              <nuxt-link :to="'/blog/' + item?.attributes?.slug" class="read-more-btn">
                Devamını Oku <feather type="arrow-right" />
              </nuxt-link>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    name: 'Blog',
    computed: {
        blog () {
            return this.$store.getters['home/getBlogArea'];
        }
    }
};
</script>
