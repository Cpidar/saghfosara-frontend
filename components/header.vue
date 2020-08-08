<template>
  <div>
    <div class="tm-header-mobile uk-hidden@m">
      <div
        uk-sticky
        show-on-up
        animation="uk-animation-slide-top"
        cls-active="uk-navbar-sticky"
        sel-target=".uk-navbar-container"
        class="uk-sticky"
      >
        <div class="uk-navbar-container">
          <nav uk-navbar class="uk-navbar">
            <div class="uk-navbar-center">
              <a
                href="/"
                class="uk-navbar-item uk-logo"
              >
                <img
                  alt="Design Bites"
                  src="/images/logo-mobile.svg"
                />
              </a>
            </div>

            <div class="uk-navbar-right">
              <a class="uk-navbar-toggle" href="#tm-mobile" uk-toggle>
                <div uk-navbar-toggle-icon class="uk-icon uk-navbar-toggle-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="navbar-toggle-icon"
                  >
                    <rect y="9" width="20" height="2" />
                    <rect y="3" width="20" height="2" />
                    <rect y="15" width="20" height="2" />
                  </svg>
                </div>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div class="uk-sticky-placeholder" style="height: 100px; margin: 0px;" hidden></div>

      <div id="tm-mobile" uk-offcanvas mode="push" overlay flip class="uk-offcanvas">
        <div class="uk-offcanvas-bar uk-text-center uk-flex">
          <button class="uk-offcanvas-close uk-icon uk-close" type="button" uk-close>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
              data-svg="close-icon"
            >
              <line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13" />
              <line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>

          <div class="uk-margin-auto-vertical uk-width-1-1">
            <div class="uk-child-width-1-1 uk-grid uk-grid-stack" uk-grid>
              <div>
                <div class="uk-panel">
                  <ul class="uk-nav uk-nav-primary uk-nav-center">
                    <li v-for="item in menu" :key="item.label">
                      <a
                        :href="item.href"
                        class="menu-item menu-item-type-post_type menu-item-object-page"
                      >{{item.label}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="uk-panel widget-text" id="widget-text-2">
                  <div class="uk-panel textwidget">
                    <a
                      class="uk-button uk-button-secondary"
                      href="/form"
                    >ثبت آگهی رایگان</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tm-header uk-visible@m tm-header-transparent tm-header-overlay" uk-header>
      <div
        uk-sticky
        media="@m"
        show-on-up
        animation="uk-animation-slide-top"
        cls-active="uk-navbar-sticky"
        sel-target=".uk-navbar-container"
        class="uk-sticky"
        style
      >
        <div class="uk-navbar-container uk-navbar-transparent uk-dark">
          <div class="uk-container uk-container-expand">
            <nav uk-navbar="{'align': right, 'boundary': !.uk-navbar-container}">
              <div class="uk-navbar-right">
                <a href="/" class="uk-navbar-item uk-logo">
                  <img alt="سقف و سرا" width="220" src="/images/logo.svg" />
                  <img class="uk-logo-inverse" alt="سقف و سرا" src="/images/logo-inverted.svg" />
                </a>
              </div>

              <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                  <li class="uk-parent" v-for="item in menu" :key="item.label">
                    <a
                      :href="item.href"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      aria-expanded="false"
                      style="font-family: Iransans-bold !important"
                    >{{item.label}}</a>
                    <!-- <div class="uk-navbar-dropdown">
                    <div
                      class="uk-navbar-dropdown-grid uk-child-width-1-1 uk-grid uk-grid-stack"
                      uk-grid
                    >
                      <div>
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                          <li>
                            <a
                              href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=fonts"
                              class="menu-item menu-item-type-taxonomy menu-item-object-resource_cat"
                            >Fonts</a>
                          </li>
                          <li>
                            <a
                              href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=brushes"
                              class="menu-item menu-item-type-taxonomy menu-item-object-resource_cat"
                            >Brushes</a>
                          </li>
                          <li>
                            <a
                              href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=vectors"
                              class="menu-item menu-item-type-taxonomy menu-item-object-resource_cat"
                            >Vectors</a>
                          </li>
                          <li>
                            <a
                              href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=graphics"
                              class="menu-item menu-item-type-taxonomy menu-item-object-resource_cat"
                            >Graphics</a>
                          </li>
                          <li>
                            <a
                              href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=mockups"
                              class="menu-item menu-item-type-taxonomy menu-item-object-resource_cat"
                            >Mockups</a>
                          </li>
                          <li>
                            <a
                              href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=ui-kits"
                              class="menu-item menu-item-type-taxonomy menu-item-object-resource_cat"
                            >UI Kits</a>
                          </li>
                          <li>
                            <a
                              href="/themes/wordpress/2020/design-bites/index.php?post_type=resource"
                              class="menu-item menu-item-type-custom menu-item-object-custom"
                            >View All</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    </div>-->
                  </li>
                </ul>

                <div class="uk-navbar-item widget-text" id="widget-text-1">
                  <div class="uk-panel textwidget">
                    <a class="uk-button uk-button-primary" href="/form" uk-toggle>ثبت رایگان آگهی</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="uk-sticky-placeholder" style="height: 100px; margin: 0px;" hidden></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      menu: [
        { label: "خانه", href: "/" },
        { label: "مجله سقف و سرا", href: "/blog" },
      ],
    };
  },
};
</script>

<style scoped>
.tm-header-overlay {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 980;
}

.uk-navbar-sticky {
  background-color: white !important;
}
</style>
