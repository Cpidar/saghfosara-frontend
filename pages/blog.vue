<template>
  <div
    class="uk-section-muted"
    uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
  >
    <div
      data-src="/images/bottom-bg.svg"
      uk-img
      class="uk-background-norepeat uk-background-contain uk-background-bottom-right uk-section uk-section-large"
      uk-parallax="bgx: -120,-120;bgy: 420,120;easing: 0.5"
    >
      <div class="uk-container uk-container-xlarge">
        <div class="tm-header-placeholder uk-margin-remove-adjacent" style="height: 100px;"></div>
        <div class="tm-grid-expand uk-margin-xlarge uk-grid" uk-grid>
          <div class="uk-width-3-4@s uk-first-column">
            <h1
              class="uk-heading-medium uk-position-relative uk-margin-medium uk-scrollspy-inview"
              uk-scrollspy-class
              style
            >{{blogPage.title}}</h1>
            <div
              class="uk-text-lead uk-position-relative uk-margin-large uk-margin-remove-top uk-width-2xlarge uk-scrollspy-inview"
              uk-scrollspy-class
              style
            >{{blogPage.subtitle}}</div>
            <div
              class="uk-position-relative uk-margin-xlarge uk-margin-remove-top uk-scrollspy-inview"
              style="z-index: 3;"
              uk-scrollspy-class
            >
              <div class="uk-child-width-auto uk-grid" uk-grid>
                <div class="uk-first-column">
                  <a
                    class="el-link uk-link-text uk-icon"
                    target="_blank"
                    rel="noreferrer"
                    href="https://facebook.com/yootheme"
                    uk-icon="icon: facebook;"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="facebook"
                    >
                      <path
                        d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    class="el-link uk-link-text uk-icon"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.pinterest.de/"
                    uk-icon="icon: pinterest;"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="pinterest"
                    >
                      <path
                        d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    class="el-link uk-link-text uk-icon"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.behance.com/"
                    uk-icon="icon: behance;"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="behance"
                    >
                      <path
                        d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"
                      />
                      <path
                        d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"
                      />
                      <rect x="13" y="4" width="5" height="1.4" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    class="el-link uk-link-text uk-icon"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/"
                    uk-icon="icon: instagram;"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="instagram"
                    >
                      <path
                        d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"
                      />
                      <circle cx="14.87" cy="5.26" r="1.09" />
                      <path
                        d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    class="el-link uk-link-text uk-icon"
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/yootheme"
                    uk-icon="icon: twitter;"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="twitter"
                    >
                      <path
                        d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="uk-grid-item-match uk-width-1-4@s">
            <div class="uk-panel uk-width-1-1">
              <div
                id="template-Nx-VdaTD#0-0-1-0"
                class="uk-position-absolute uk-width-1-1 uk-text-right"
                uk-parallax="y: 6vh,-10vh; easing: 0.5;"
              >
                <img
                  class="el-image"
                  alt
                  target="!*"
                  data-src="/images/blog-category-right.svg"
                  uk-img
                />
              </div>
            </div>
          </div>
        </div>
        <div class="tm-grid-expand uk-margin-xlarge uk-grid uk-grid-stack" uk-grid>
          <div class="uk-width-1-1@m uk-first-column">
            <div class="uk-margin-xlarge">
              <div class="uk-child-width-1-1 uk-child-width-1-2@s uk-grid-match uk-grid" uk-grid>
                <div v-for="post in posts" :key="post.id">
                  <div
                    class="el-item uk-panel uk-margin-remove-first-child uk-scrollspy-inview uk-animation-fade"
                    uk-scrollspy-class
                    style
                  >
                    <a :href="'/posts/'+post.id">
                      <img
                        class="el-image uk-border-rounded"
                        alt
                        data-sizes="(min-width: 780px) 780px"
                        data-width="780"
                        data-height="520"
                        uk-img
                        :data-src="imageUrl+post.image.url"
                        :src="imageUrl+post.image.url"
                        sizes="(min-width: 780px) 780px"
                      />
                    </a>

                    <h2 class="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">
                      <a :href="'/posts/'+ post.id" class="uk-link-reset">{{post.title}}</a>
                    </h2>

                    <div class="uk-margin-small-top">
                      <a
                        :href="'/posts/'+ post.id"
                        class="el-link uk-button uk-button-text"
                      >ادامه مطالب</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <!-- <div class="uk-margin-xlarge uk-text-center" uk-scrollspy-class>
              <ul class="uk-pagination uk-margin-remove-bottom uk-flex-center">
                <li class="uk-active">
                  <span>1</span>
                </li>
                <li>
                  <a
                    href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?page_id=1357&amp;paged=2"
                  >2</a>
                </li>
                <li>
                  <a
                    href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?page_id=1357&amp;paged=2"
                    title="Next"
                  >
                    <span uk-pagination-next class="uk-icon uk-pagination-next">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="pagination-next"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          stroke-width="1.2"
                          points="1 1 6 6 1 11"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div> -->
           <div class="uk-margin-xlarge uk-text-center" uk-scrollspy-class>
            <button
              class="uk-button uk-button-danger"
              v-if="hasMore"
              @click="showMore"
            >نمایش موارد بیشتر</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: process.env.apiUrl
    }
  },
  async asyncData({ $axios }) {
    const pageSize = 4
    const posts = await $axios.$get("/posts", {
      // token: process.env.apiToken,
      params: {
        published: true,
        _limit: pageSize,
        _sort: "focused:DESC:updated_at:DESC",
      },
    });
    const postsCount = await $axios.$get("/posts/count", {
      // token: process.env.apiToken,
      params: {
        published: true,
      },
    });
    const blogPage = await $axios.$get("/blog-page")
    return {
      posts,
      pageSize,
      postsCount,
      hasMore: postsCount > pageSize,
      page: 0,
      blogPage
    };
  },
  methods: {
    async showMore() {
      this.page++
      const start = this.page * this.pageSize;
      const newPosts = await this.$axios.$get('/properties', {
      // token: process.env.apiToken,
      params: {
        published:true,
        _start: start,
        _limit: this.pageSize,
        _sort: "focused:DESC:updated_at:DESC",
      }
    })
    this.$data.posts = await [ ...this.$data.posts, ...newPosts ]
    this.hasMore = await this.$data.posts.length < this.$data.postsCount
    }
  },
    head() {
      let blog = this.blogPage
    return {
      title: `مجله سقف و سرا`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${blog.subtitle}`
        }
      ]
    }
  }
  };
</script>
