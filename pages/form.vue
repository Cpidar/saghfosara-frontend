<template>
  <div class="uk-section-muted uk-section uk-section-large">
    <div class="uk-container uk-container-small">
      <form-modal :categories="categories" :neighborhoods="neighborhoods" :types="types" />
    </div>
  </div>
</template>

<script>
import FormModal from "~/components/form-modal.vue";

export default {
  components: {
    FormModal,
  },
  async asyncData({ $axios }) {
    const categories = await $axios.$get("/categories", {
      // token: process.env.apiToken
    });
    const neighborhoods = await $axios.$get("/neighborhoods", {
      // token: process.env.apiToken
    });
    const types = await $axios.$get("/types", {
      // token: process.env.apiToken
    });
    return {
      categories,
      neighborhoods,
      types,
    };
  },
};
</script>