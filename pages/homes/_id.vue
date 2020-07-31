<template>
  <div class="uk-section uk-section-muted uk-section-large" tm-header-transparent="dark">
    <div class="uk-container">
      <div class="tm-header-placeholder uk-margin-remove-adjacent" style="height: 100px;"></div>
      <div class="tm-grid-expand uk-grid-column-large uk-grid-margin uk-grid" uk-grid>
        <description :item="home"/>
        <slide-show :images="home.pics" />
      </div>
      <!-- <similar-item /> -->
    </div>
  </div>
</template>

<script>
import Description from "~/components/detail-desc.vue";
import SlideShow from "~/components/slideshow2.vue";
import SimilarItem from "~/components/detail-similar.vue";
// import homeQuery from '~/apollo/queries/home/home.gql'

export default {
  components: {
    Description,
    SlideShow,
    SimilarItem
  },
  // apollo: {
  //   home: {
  //     prefetch: false,
  //     query: homeQuery,
  //     variables() {
  //       return {  
  //       key: this.id
  //     }
  //     },
  //     fetchPolicy: 'cache-and-network',
  //   }
  // }

    async asyncData ({ $axios, params }) {
    const home = await $axios.$get(`properties/${params.id}`)

    return {
      home
    }
  }
};
</script>
