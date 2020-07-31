<template>
  <div class="uk-width-1-3@m uk-first-column">
    <!-- <div>
      <ul class="uk-breadcrumb uk-margin-remove-bottom">
        <li>
          <a
            href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?post_type=resource"
          >Resources</a>
        </li>

        <li>
          <a
            href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=personal"
          >Personal</a>
        </li>

        <li>
          <span>Max UI Kit</span>
        </li>
      </ul>
    </div>-->

    <h1 class="uk-text-lead uk-text-large uk-heading-divider">{{item.title}}</h1>

    <ul class="uk-list uk-margin-large uk-margin-remove-bottom">
      <li class="el-item">
        <div class="uk-child-width-expand uk-grid-column-medium uk-grid-row-small uk-grid" uk-grid>
          <div class="uk-width-small uk-text-break uk-first-column">
            <span class="el-title uk-display-block uk-font-primary">مساحت</span>
          </div>
          <div class>
            <div class="el-content uk-panel">{{item.size + ' مترمربع '}}</div>
          </div>
        </div>
      </li>
      <li class="el-item">
        <div class="uk-child-width-expand uk-grid-column-medium uk-grid-row-small uk-grid" uk-grid>
          <div class="uk-width-small uk-text-break uk-first-column">
            <span class="el-title uk-display-block uk-font-primary">سن بنا</span>
          </div>
          <div class>
            <div class="el-content uk-panel">{{item.builtDate + ' سال '}}</div>
          </div>
        </div>
      </li>
      <li class="el-item">
        <div class="uk-child-width-expand uk-grid-column-medium uk-grid-row-small uk-grid" uk-grid>
          <div class="uk-width-small uk-text-break uk-first-column">
            <span class="el-title uk-display-block uk-font-primary">قیمت</span>
          </div>
          <div class>
            <div class="el-content uk-panel">{{item.price + ' تومان '}}</div>
          </div>
        </div>
      </li>
      <li class="el-item">
        <div class="uk-child-width-expand uk-grid-column-medium uk-grid-row-small uk-grid" uk-grid>
          <div class="uk-width-small uk-text-break uk-first-column">
            <span class="el-title uk-display-block uk-font-primary">محله یا منطقه</span>
          </div>
          <div class>
            <div class="el-content uk-panel">{{item.neighborhood.name}}</div>
          </div>
        </div>
      </li>
    </ul>
    <hr class="uk-margin-medium"/>
    <div class="uk-margin-medium" v-if="item.description">
      <div class="uk-h5 uk-font-primary uk-margin-top uk-margin-remove-bottom">توضیحات</div>
      <div class="uk-font-primary" v-html="$md.render(item.description)"></div>
    </div>
    <!-- <div class="uk-margin-large">
      <a
        class="el-content uk-width-1-1 uk-button uk-button-primary uk-button-large"
        href="/themes/wordpress/2020/design-bites/wp-content/uploads/yootheme/resources-download.zip"
      >اطلاعات تماس</a>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ["item", "desc"],
};
</script>