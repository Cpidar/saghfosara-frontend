<template>
  <div>
    <div class="uk-card uk-card-default" v-if="!submited && !error">
      <div class="uk-card-header">
        <!-- <button class="uk-modal-close-full uk-close-medim" type="button" uk-close></button> -->

        <div class="uk-card-body">
          <form
            class="uk-grid-small uk-grid uk-grid-stack"
            ref="adForm"
            @submit.prevent="createHome"
            uk-grid
          >
            <div class="uk-width-1-1">
              <label class="uk-form-label" for="form-stacked-text">عنوان</label>
              <div class="uk-form-controls">
                <input
                  v-model.lazy="formData.title"
                  name="title"
                  class="uk-input"
                  id="form-stacked-text"
                  type="text"
                  placeholder="عنوان ...."
                  required
                />
              </div>
            </div>

            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="form-stacked-text">محله یا منطقه</label>
              <div class="uk-form-controls">
                <select
                  v-model="formData.neighborhood"
                  name="neighborhood"
                  class="uk-select"
                  id="form-stacked-select"
                  required
                >
                  <option
                    v-for="neighborhood in neighborhoods"
                    :key="neighborhood.id"
                    :value="neighborhood.name"
                  >{{neighborhood.name}}</option>
                </select>
              </div>
            </div>

            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="form-stacked-select">نوع واگذاری</label>
              <div class="uk-form-controls">
                <select
                  v-model="formData.category"
                  name="category"
                  class="uk-select"
                  id="form-stacked-select"
                  required
                >
                  <option v-for="cat in categories" :key="cat.id" :value="cat.name">{{cat.name}}</option>
                </select>
              </div>
            </div>
            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="form-stacked-select">نوع ملک</label>
              <div class="uk-form-controls">
                <select
                  v-model="formData.type"
                  name="propertyType"
                  class="uk-select"
                  id="form-stacked-select"
                  required
                >
                  <option v-for="type in types" :key="type.id" :value="type.name">{{type.name}}</option>
                </select>
              </div>
            </div>
            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="form-stacked-text">شماره تماس</label>
              <div class="uk-form-controls">
                <input
                  v-model.number="formData.phone"
                  name="phone"
                  class="uk-input"
                  id="form-stacked-text"
                  type="number"
                  placeholder="شماره تماس"
                  required
                />
              </div>
            </div>
            <div class="uk-width-1-3@s">
              <label class="uk-form-label" for="form-stacked-text">سن بنا</label>
              <div class="uk-form-controls">
                <input
                  v-model.number="formData.builtDate"
                  name="builtDate"
                  class="uk-input"
                  id="form-stacked-text"
                  type="number"
                  placeholder="چند سال ساخت"
                  required
                />
              </div>
            </div>
            <div class="uk-width-1-3@s">
              <label class="uk-form-label" for="form-stacked-text">متراژ</label>
              <div class="uk-form-controls">
                <input
                  v-model.number="formData.size"
                  name="size"
                  class="uk-input"
                  id="form-stacked-text"
                  type="number"
                  placeholder="متراژ"
                  required
                />
              </div>
            </div>
            <div class="uk-width-1-3@s">
              <label class="uk-form-label" for="form-stacked-text">قیمت</label>
              <div class="uk-form-controls">
                <input
                  v-model.number="formData.price"
                  name="price"
                  class="uk-input"
                  id="form-stacked-text"
                  type="number"
                  placeholder="قیمت به تومان"
                  required
                />
              </div>
            </div>

            <div class="uk-width-1-1">
              <label class="uk-form-label" for="form-stacked-text">توضیحات</label>
              <div class="uk-form-controls">
                <textarea v-model="formData.description" name="description" class="uk-textarea"></textarea>
              </div>
            </div>
            <div class="uk-width-1-1">
              <div class="uk-grid uk-child-width-1-4@s uk-grid-small" uk-grid>
                <div class="uk-text-center" v-for="(pic, index) in thumbnails" :key="index">
                  <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <img :src="pic" width="200" height="200" />
                    <div class="uk-transition-fade uk-overlay-primary uk-position-cover">
                      <div class="uk-position-center">
                        <button class="uk-button uk-button-link" @click="removeImage(index)">
                          <span class uk-icon="icon: trash; ratio: 1"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="uk-text-center">
                  <div class="uk-placeholder uk-text-center">
                    <div uk-form-custom>
                      <input
                        ref="files"
                        type="file"
                        name="pics"
                        accept="image/jpeg"
                        @change="uploadImage"
                        multiple
                      />
                      <span class="uk-icon-button" uk-icon="icon: cloud-upload; ratio: 1"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="uk-card-footer uk-text-left">
          <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
          <button class="uk-button uk-button-primary" type="button" @click="createHome">Save</button>
        </div>
      </div>
    </div>
    <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m" v-if="submited">
      <h3 class="uk-card-title">ارسال اطلاعات با موفقیت انجام شد</h3>
      <p>در کوتاهترین زمان ممکن با شما تماس گرفته می شود</p>
      <div class="uk-card-footer">
        <a href="/" class="uk-button uk-button-text">بازگشت به صفحه اصلی</a>
      </div>
    </div>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m" v-if="error">
      <h3 class="uk-card-title">خطا در ارسال اطلاعات</h3>
      <p>لطفا اطلاعات ورودی را مجددا چک کنید</p>
      <div class="uk-card-footer">
        <a href="/form" class="uk-button uk-button-text">بازنشانی فرم</a>
      </div>
    </div>
  </div>
</template>

<script>
// import HomeMutation from "~/apollo/mutations/home/create-home.gql";

export default {
  props: ["categories", "neighborhoods", "types"],
  data() {
    return {
      submited: false,
      error: false,
      formData: {
        title: "",
        description: "",
        price: "",
        pics: [],
        category: 1,
        address: "",
        size: "",
        type: "",
        phone: "",
        neighborhood: "",
        builtDate: "",
        published: false,
      },
      thumbnails: [],
    };
  },
  methods: {
    // createHome() {
    //   const data = this.formData
    //   console.log(this.formData);
    //   try {
    //     this.$apollo.mutate({
    //       mutation: HomeMutation,
    //       variables: {
    //           newHome: {
    //             data
    //           }
    //       },
    //       context: {
    //         hasUpload: true
    //       }
    //     }).then(console.log);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // },
    createHome() {
      let form = this.$refs["adForm"];
      let formData = new FormData();
      let formElements = form.elements;
      console.log(formElements);
      let data = {};
      for (let i = 0; i < formElements.length; i++) {
        const currentElement = formElements[i];
        if (!["submit", "file"].includes(currentElement.type)) {
          data[currentElement.name] = currentElement.value;
          // } else if (currentElement.type === "file") {
          //   if (currentElement.files.length === 1) {
          //     const file = currentElement.files[0];
          //     formData.append(`files.${currentElement.name}`, file, file.name);
          //   } else {
          //     for (let i = 0; i < currentElement.files.length; i++) {
          //       const file = currentElement.files[i];

          //       formData.append(`files.${currentElement.name}`, file, file.name);
          //     }
          //   }
        }
      }
      for (let i = 0; i < this.formData.pics.length; i++) {
        const file = this.formData.pics[i];

        formData.append(`files.pics`, file, file.name);
      }
      formData.append("data", JSON.stringify(data));
      console.log(data);
      this.$axios
        .$post("/requests", formData)
        .then((res) => (this.submited = true))
        .catch(err => this.error = true)
    },
    uploadImage(e) {
      const files = e.target.files || e.dataTransfer.files;
      console.log(this.$refs.files.files);
      if (!files.length) return;
      this.createImage(files);
    },
    createImage(files) {
      const vm = this;
      for (var index = 0; index < files.length; index++) {
        vm.formData.pics.push(files[index]);
        var reader = new FileReader();
        reader.onload = function (event) {
          const imageUrl = event.target.result;
          vm.thumbnails.push(imageUrl);
        };
        reader.readAsDataURL(files[index]);
      }
    },
    removeImage(index) {
      this.formData.pics.splice(index, 1);
      this.thumbnails.splice(index, 1);
    },
  },
};
</script>
