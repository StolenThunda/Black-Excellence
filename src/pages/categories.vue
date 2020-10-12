<template>
<div class="row q-gutter-x-sm" style="overflow-x: auto; overflow-y: visible;">
        <q-card  ref="refCard" v-for="(src, index) in images" :key="index" class="my-card">
          <q-img :src="src" basic @click="zoomImage(index)">
            <div class="absolute-bottom text-h6">Course {{ index + 1 }}</div>
          </q-img>

          <q-card-section>
            {{ bacon[index] }}
          </q-card-section>
        </q-card>
</div>
</template>

<script>
import { morph } from "quasar";

export default {
  data() {
    return {
      toggle: false,
      count: 10,
      images: null,
      bacon: null
    };
  },
  mounted() {
    this.images = Array(this.count)
      .fill(null)
      .map((_, i) => "https://lorempixel.com/500/300/technics/" + i);
    // .map((_, i) => "https://picsum.photos/id/" + i + "/500/300")
    this.$axios
      .get(
        `https://baconipsum.com/api/?type=meat-and-filler&paras=${this.count}&format=json`
      )
      .then(response => {
        this.bacon = response.data;
      })
      .catch(error => {
        this.$q.notify({
          color: "negative",
          position: "top",
          message: error.message,
          icon: "report_problem"
        });
      });
  },
  // methods: {
  //   zoomImage(index) {
  //     const { indexZoomed } = this;

  //     this.indexZoomed = void 0;

  //     if (index !== void 0 && index !== indexZoomed) {
  //       this.cancel = morph({
  //         from: this.$refs.refCard[index].$el,
  //         onToggle: () => {
  //           this.indexZoomed = index;
  //         },
  //         duration: 500,
  //         style: "z-index: 1",
  //         onEnd: end => {
  //           if (end === "from" && this.indexZoomed === index) {
  //             this.indexZoomed = void 0;
  //           }
  //         }
  //       });
  //     }

  //     if (
  //       indexZoomed !== void 0 &&
  //       (this.cancel === void 0 || this.cancel() === false)
  //     ) {
  //       morph({
  //         from: this.$refs.refCard[indexZoomed].$el,
  //         waitFor: 100,
  //         duration: 300,
  //         style: "z-index: 1"
  //       });
  //     }
  //   }
  // }
};
</script>
<style lang="sass" scoped>
.my-card
  /* width: 100% */
  max-width: 250px
</style>
