<template>
  <div>
    <banner-showcase :items="categories" :showcase="showcase" />
    <items-grid
      :title="title"
      :page-size="this.pageSize"
      :items="homes"
      :has-more="hasMore"
      @fetch="showMore"
    />
    <banner-category :items="categories" />
    <blog-grid :posts="posts" />
    <banner-about :items="about" />
    <banner-contactme />
  </div>
</template>

<script>
// import homesQuery from "~/apollo/queries/home/homes.gql";
// import homesStatQuery from "~/apollo/queries/home/homes-stat.gql";
// import categoriesQuery from '~/apollo/queries/category/categories.gql'

import BannerShowcase from "~/components/banner-showcase.vue";
import ItemsGrid from "~/components/items-grid.vue";
import Contactme from "~/components/banner-contactme.vue";
import BannerCategory from "~/components/banner-category.vue";
import BannerAbout from "~/components/banner-about.vue";
import BlogGrid from '~/components/blog-grid.vue'
import BannerContactme from '~/components/banner-contactme.vue'


export default {
  components: {
    BannerShowcase,
    ItemsGrid,
    Contactme,
    BannerCategory,
    BlogGrid,
    BannerContactme
  },
  data() {
    return {
      title: "جدیدترین املاک ثبت شده",
      homesConnection: { aggregate: { count: 1 } },
      // categories: [],
    };
  },
  // apollo: {
  //   homes: {
  //     prefetch: false,
  //     query: homesQuery,
  //     variables() {
  //       return {
  //         start: 0,
  //         limit: this.pageSize
  //       };
  //     }
  //     // fetchPolicy: 'cache-and-network',
  //   },
  //   homesConnection: {
  //     prefetch: false,
  //     query: homesStatQuery
  //   },
  //   categories: {
  //     prefetch: false,
  //     query: categoriesQuery
  //   }
  // },
  methods: {
    async showMore(page) {
      const start = page * this.pageSize;
      // Fetch more data and transform the original result
      // this.$apollo.queries.homes.fetchMore({
      //   // New variables
      //   variables: {
      //     start,
      //     limit: this.pageSize
      //   },
      //   // Transform the previous result with new data
      //   updateQuery: (previousResult, { fetchMoreResult }) => {
      //     const newHomes = fetchMoreResult.homes;
      //     const homeCount = this.homesConnection.aggregate.totalCount;
      //     this.hasMore = homeCount > start + 1;

      //     return {
      //       homes: [...previousResult.homes, ...newHomes]
      //     };
      //   }
      // });
      const newHomes = await this.$axios.$get('/properties', {
      // token: process.env.apiToken,
      params: {
        _sort: "focused:DESC:updated_at:DESC",
        published:true,
        _start: start,
        _limit: this.pageSize,
      }
    })
    this.$data.homes = await [ ...this.$data.homes, ...newHomes ]
    this.hasMore = await this.$data.homes.length < this.$data.homesCount
    }
  },
  async asyncData ({ $axios }) {
    const pageSize = 16
    // const homes = await $content('homes').fetch()
    const showcase = await $axios.$get('/showcase')
    const homes = await $axios.$get('/properties', {
      // token: process.env.apiToken,
      params: {
        published:true,
        _sort: "focused:DESC:updated_at:DESC",
        _start: 0,
        _limit: pageSize
      }
    })
    const homesCount = await $axios.$get('/properties/count', {
      // token: process.env.apiToken,
      params: {
        published:true,
      }
    })
    const categories = await $axios.$get('/categories', {
        // token: process.env.apiToken
    })

    // const posts = await $content('posts').fetch()
    const postApi = await $axios.$get('/posts', {
      // token: process.env.apiToken,
      params: {
        published:true,
        _sort: "focused:DESC:updated_at:DESC",
        _limit: 3,
      }
    }) 

    const about = await $axios.$get('/about', {
      // token: process.env.apiToken,
    }) 

    return {
      // homes,
      homes: homes,
      categories: categories,
      posts: postApi,
      about,
      pageSize,
      homesCount,
      hasMore: homesCount > pageSize,
      showcase
    }
  }
};
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
