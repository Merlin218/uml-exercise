<template>
  <a-row justify="space-around" class="grid-demo" :gutter="[24, 12]">
    <a-col
      v-for="item in list"
      :key="item.title"
      :span="6"
      @click="toOut(item.link)"
    >
      <a-card hoverable>
        <template #cover>
          <img :src="item.url" />
        </template>
        <a-card-meta :title="item.title">
          <template #description>
            {{ item.school }}
          </template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup>
import { reactive } from '@vue/reactivity';

const toOut = (link) => {
  window.open(link);
};

const list = reactive([
  {
    url: 'https://leicloud.ulearning.cn//tongsk/contentmanage/85bcde8d-b5ba-4e72-9db3-b18d9924af4d.JPG?imageslim|imageView2/1/w/320/h/180',
    title: '创业基础',
    school: '中南财经政法大学',
    link: 'https://www.ulearning.cn/ulearning_web/web!courseDetail.do?courseID=3974',
  },
  {
    url: 'https://leicloud.ulearning.cn/resources/972721/201811141823364022?imageslim|imageView2/1/w/320/h/180',
    title: '商务英语',
    school: '中南财经政法大学',
    link: 'https://www.ulearning.cn/ulearning_web/web!courseDetail.do?courseID=8130',
  },
  {
    url: 'https://leicloud.ulearning.cn/resources/834427/201912252006574221?imageslim|imageView2/1/w/320/h/180',
    title: '人人学点营销学',
    school: '中南财经政法大学',
    link: 'https://www.ulearning.cn/ulearning_web/web!courseDetail.do?courseID=3334',
  },
  {
    url: 'https://leicloud.ulearning.cn/resources/972721/201806121418544283?imageslim|imageView2/1/w/320/h/180',
    title: '中国税制',
    school: '中南财经政法大学',
    link: 'https://www.ulearning.cn/ulearning_web/web!courseDetail.do?courseID=3828',
  },
  {
    url: 'https://leicloud.ulearning.cn/static/image/courseCover/cover4.png?imageslim|imageView2/1/w/320/h/180',
    title: '财政学',
    school: '中南财经政法大学',
    link: 'https://www.ulearning.cn/ulearning_web/web!courseDetail.do?courseID=3827',
  },
  {
    url: 'https://leicloud.ulearning.cn//tongsk/contentmanage/40473df2-8424-44a1-8fd2-a4ed1a65664e.jpg?imageslim|imageView2/1/w/320/h/180',
    title: '教师职业道德与教育政策法规',
    school: '南通大学',
    link: 'https://www.ulearning.cn/ulearning_web/web!courseDetail.do?courseID=8177',
  },
  {
    url: 'https://leicloud.ulearning.cn/resources/834427/201912251512531588?imageslim|imageView2/1/w/320/h/180',
    title: '创业基础',
    school: '武汉工程大学',
    link: 'https://www.ulearning.cn/ulearning_web/web!courseDetail.do?courseID=3073',
  },
  {
    url: 'https://leicloud.ulearning.cn/resources/4602319/202106101803341241?imageslim|imageView2/1/w/320/h/180',
    title: '组织与人力资源管理',
    school: '中南财经政法大学',
    link: 'https://www.ulearning.cn/ulearning_web/web!courseDetail.do?courseID=8151',
  },
  {
    url: 'https://leicloud.ulearning.cn/resources/972721/201811152108072028?imageslim|imageView2/1/w/320/h/180',
    title: '中级会计学',
    school: '中南财经政法大学',
    link: 'https://www.ulearning.cn/ulearning_web/web!courseDetail.do?courseID=9664',
  },
  {
    url: 'https://leicloud.ulearning.cn/resources/972721/201811152107282574?imageslim|imageView2/1/w/320/h/180',
    title: '国际贸易学',
    school: '中南财经政法大学',
    link: 'https://www.ulearning.cn/ulearning_web/web!courseDetail.do?courseID=8253',
  },
  {
    url: 'https://leicloud.ulearning.cn/resources/4602113/201811152119493990?imageslim|imageView2/1/w/320/h/180',
    title: '发展心理学',
    school: '武汉大学',
    link: 'https://www.ulearning.cn/ulearning_web/web!courseDetail.do?courseID=9424',
  },
  {
    url: 'https://leicloud.ulearning.cn/resources/4148246/201811172137556691?imageslim|imageView2/1/w/320/h/180',
    title: 'XML电子商务实务',
    school: '武汉理工大学',
    link: 'https://www.ulearning.cn/ulearning_web/web!courseDetail.do?courseID=8101',
  },
]);
</script>

<style scoped>
.grid-demo {
  background-color: var(--color-fill-2);
  margin-bottom: 40px;
}
</style>
