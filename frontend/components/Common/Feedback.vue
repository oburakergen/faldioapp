<template>
  <div v-if="feedback.title" class="feedback-area ptb-80 bg-f7fafd">
    <div class="container">
      <div class="section-title">
        <h2>{{ feedback.title }}</h2>
        <div class="bar" />
        <p>
          {{ feedback.detail }}
        </p>
      </div>

      <div class="feedback-slides">
        <div class="client-feedback">
          <div>
            <slick
              ref="slick"
              :options="slickOptions"
              :as-nav-for="$refs.slick2"
            >
              <div v-for="item in feedback.users" :key="item.id" class="item">
                <div class="single-feedback">
                  <div class="client-img">
                    <picture>
                      <source
                        :media="'(min-width:' + item?.photo?.data?.attributes?.width +'px)'"
                        :srcset="item?.photo?.data?.attributes?.url"
                      >
                      <source
                        v-for="(size, index) in Object.values(item?.photo?.data?.attributes?.formats || {})"
                        :key="index"
                        :media="'(min-width:' + size.width +'px)'"
                        :srcset="size.url"
                      >
                      <img
                        :src="item?.photo?.data?.attributes?.url"
                        :alt="item?.photo?.data?.attributes?.alternativeText"
                        :title="item?.photo?.data?.attributes?.caption"
                      >
                    </picture>
                  </div>
                  <h3>{{ item.name }}</h3>
                  <p>
                    {{ item.detail }}
                  </p>
                </div>
              </div>
            </slick>
          </div>
        </div>

        <div class="client-thumbnails">
          <div>
            <slick
              ref="slick2"
              :as-nav-for="$refs.slick"
              :options="slickOptions2"
            >
              <div v-for="item in feedback.users" :key="item.id" class="item">
                <div class="img-fill">
                  <picture>
                    <source
                      :media="'(min-width:' + item?.photo?.data?.attributes?.width +'px)'"
                      :srcset="item?.photo?.data?.attributes?.url"
                    >
                    <source
                      v-for="(size, index) in Object.values(item?.photo?.data?.attributes?.formats || {})"
                      :key="index"
                      :media="'(min-width:' + size.width +'px)'"
                      :srcset="size.url"
                    >
                    <img
                      :src="item?.photo?.data?.attributes?.url"
                      :alt="item?.photo?.data?.attributes?.alternativeText"
                      :title="item?.photo?.data?.attributes?.caption"
                    >
                  </picture>
                </div>
              </div>
            </slick>
          </div>

          <b-button name="prev-arrow" class="prev-arrow slick-arrow">
            <feather type="arrow-left" />
          </b-button>

          <b-button name="next-arrow" class="next-arrow slick-arrow">
            <feather type="arrow-right" />
          </b-button>
        </div>
      </div>
    </div>
    <Shape />
  </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import Shape from '@/components/Helper/Shape.vue';

export default {
    name: 'Feedback',
    components: { Shape, Slick },
    data () {
        return {
            slickOptions: {
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                fade: true,
                autoplay: true,
                draggable: true,
                prevArrow: '.client-feedback .prev-arrow',
                nextArrow: '.client-feedback .next-arrow'
            },
            slickOptions2: {
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                cssEase: 'linear',
                autoplay: true,
                centerMode: true,
                draggable: false,
                focusOnSelect: true,
                prevArrow: '.client-thumbnails .prev-arrow',
                nextArrow: '.client-thumbnails .next-arrow'
            }
        };
    },
    computed: {
        feedback () {
            return this.$store.getters['home/getFeedbackArea'];
        }
    },
    methods: {
        next () {
            this.$refs.slick.next();
        },

        prev () {
            this.$refs.slick.prev();
        }
    }
};
</script>
