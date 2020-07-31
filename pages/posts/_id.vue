<template>
  <div
    class="uk-section-muted uk-section"
    tm-header-transparent="dark"
    uk-scrollspy="target: [uk-scrollspy-class]; cls:; delay: false;"
  >
    <div class="uk-container">
      <div class="tm-header-placeholder uk-margin-remove-adjacent" style="height: 100px;"></div>
      <div class="tm-grid-expand uk-grid-margin uk-grid uk-grid-stack" uk-grid>
        <div class="uk-width-1-1@m uk-first-column">
          <div class="uk-margin uk-scrollspy-inview" uk-scrollspy-class style>
            <img
              class="el-image uk-border-rounded"
              alt
              :data-src="apiUrl+post.image.url"
              data-sizes="(min-width: 1200px) 1200px"
              data-width="1200"
              data-height="460"
              uk-img
              :src="apiUrl+post.image.url"
              sizes="(min-width: 1200px) 1200px"
            />
          </div>
        </div>
      </div>
      <div class="uk-grid-margin-large uk-container uk-container-xsmall">
        <div class="tm-grid-expand uk-grid-row-large uk-grid uk-grid-stack" uk-grid>
          <div class="uk-width-1-1@m uk-first-column">
            <h1
              uk-scrollspy-class
              class="uk-scrollspy-inview"
              style
            >{{post.title}}</h1>
            <!-- <div
              class="uk-margin-medium uk-margin-remove-top uk-scrollspy-inview"
              uk-scrollspy-class
              style
            >
              نوشته شده توسط
              <a
                href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?author=1"
              >{{post.created_by.firstname + ' ' + post.created_by.lastname}}</a> on
              <time datetime="2019-12-13T08:32:57+00:00">{{post.created_at}}</time>.
            </div> -->
            <div
              class="uk-margin uk-scrollspy-inview"
              uk-scrollspy-class
              style
              v-html="$md.render(post.content)"
            ></div>
            <!-- <div
              class="uk-text-center uk-scrollspy-inview"
              uk-scrollspy-class
              style
            >
              <ul class="uk-pagination uk-margin-remove-bottom uk-flex-center">
                <li>
                  <a href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?p=10">
                    <span uk-pagination-previous class="uk-icon uk-pagination-previous">
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
                    </span> قبلی
                  </a>
                </li>

                <li>
                  <a href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?p=153">
                    بعدی
                    <span uk-pagination-next class="uk-icon uk-pagination-next">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="pagination-previous"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          stroke-width="1.2"
                          points="6 1 1 6 6 11"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const post = await $axios.$get(`posts/${params.id}`);

    return {
      post,
      apiUrl: process.env.apiUrl
    };
  },
};
</script>