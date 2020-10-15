<template>
  <q-page class="q-pa-md">
    <q-carousel
      v-model="slide"
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="80vh"
      animated
      infinite
      arrows
      navigation
    >
      <q-carousel-slide
        v-for="(src, idx) in slides"
        :key="idx"
        :name="idx"
        :img-src="src"
        class="flex flex-center"
      />
    </q-carousel>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data: () => ({
    slide: 0,
    autoplay: true,
    slides: [
      "https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2016/02/RTR2DNV8-1024x672.jpg",
      "https://altamontenterprise.com/sites/default/files/styles/full/public/2019_07-01_color_diversity_web.jpg?itok=LwPY4ZQ0",
      "https://media.beam.usnews.com/fe/13/0ba9e8654e8a937cdea0e1d32eff/140905eduteensinschool-stock.jpg",
      "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2019/08/iStock-1164885358-1080x675.jpg",
      "https://img.huffingtonpost.com/asset/581392eb150000b900530700.jpg?ops=scalefit_720_noupscale"
    ]
  })
};
</script>