<template>
  <div
    class="uk-section-primary uk-preserve-color uk-section"
    uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-small; delay: false;"
  >
    <div class="uk-container uk-container-large">
      <div class="tm-grid-expand uk-grid-column-large uk-grid-margin uk-grid" uk-grid>
        <div class="uk-light uk-width-1-3@m">
          <h2
            class="uk-position-relative"
            style="top: 15px; visibility: hidden;"
            uk-scrollspy-class
          >
            درباره
            <br class="uk-visible@m" />سقف و سرا
          </h2>
        </div>

        <div class="uk-width-2-3@m">
          <div
            class="uk-position-relative uk-margin uk-width-2xlarge uk-margin-auto"
            style="top: 15px;"
          >

            <div class="uk-text-emphasis">
              {{items.content}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"]
};
</script>
