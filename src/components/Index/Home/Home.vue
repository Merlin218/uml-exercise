<template>
    <Header></Header>
    <div
      :style="{
        width: '100%',
        backgroundColor: '#fff',
        marginTop: '20px',
      }"
    >
    <CourseBlock></CourseBlock>
    </div>
</template>

<script setup>
import Header from '../../Layout/Header.vue';
import Carousel from './carousel.vue';
import CourseBlock from './courseBlock.vue';

</script>

<style scoped></style>
