<template>
  <a-carousel
    :style="{
      margin:'0 auto',
      width: '68vw',
      height: '270px',
    }"
    :auto-play="true"
    indicator-type="dot"
    :default-current="2"
    show-arrow="never"
  >
    <a-carousel-item v-for="image in images" :key="image">
      <a-image
        :src="image"
        height="270"
      />
    </a-carousel-item>
  </a-carousel>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      images: [
        'https://leicloud.ulearning.cn/resources/834420/202105311752434803.jpg',
        'https://leicloud.ulearning.cn/resources/5157664/2020092813521238.jpg',
        'https://leicloud.ulearning.cn/resources/8225050/202103161803093363.jpg',
        'https://leicloud.ulearning.cn/resources/834427/202102231620168994.jpg',
        'https://leicloud.ulearning.cn/resources/8225050/202103161532598676.jpg',
      ],
    };
  },
  methods: {
  },
};
</script>
