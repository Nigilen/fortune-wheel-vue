<script setup lang="ts">
import { ref, watch } from 'vue';
import WheelArrow from './svg/WheelArrow.vue';
import WheelCircle from './svg/WheelCircle.vue';
import WheelCenter from './svg/WheelCenter.vue';

interface WheelItem {
  id: number;
  value: string;
};

const props = defineProps<{
  data: WheelItem[];
  selectedItem: WheelItem | null;
}>();

const carouselRef = ref<HTMLDivElement>();

const rotate = (sector: number) => {
  return `rotate(${3600 + (-45 * sector)}deg)`;
};

watch(() => props.selectedItem, (newSelectedItem) => {
  if (carouselRef.value) {
    carouselRef.value.style.transform = rotate(newSelectedItem ? newSelectedItem.id : 0);
  }
});

</script>

<template>
  <div class="wheel">
    <WheelArrow />
    <WheelCenter />
    <div class="wheel__carousel" ref="carouselRef">
      <div v-for="item in data" :key="item.id" class="wheel__item text-stroke">
        {{item.value}}
      </div>
    </div>
    <WheelCircle />
  </div>
</template>


<style lang="scss">
  .wheel {
    position: relative;
    inline-size: 100%;
    block-size: 100%;
    &__circle {
      inline-size: 100%;
      block-size: 100%;
      box-shadow: 0px 0px 51px 0 #0E1155;
      border-radius: 100%;
      position: relative;
      z-index: 1;
      overflow: hidden;
    }
    &__carousel {
      display: flex;
      flex-direction: column;
      position: absolute;
      inset-inline: 0;
      top: 0;
      bottom: 0;
      align-items: center;
      justify-content: center;
      aspect-ratio: 1 / 1;
      background-image: url('./../assets/wheel-sections.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: auto;
      transform: rotate(0deg);
      transition-property: transform, font-size;
      transition-duration: 10s, 0s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1.1);
    }
  
    &__arrow {
      position: absolute;
      top: -15%;
      inset-inline: 0;
      margin-inline: auto;
      z-index: 2;
    }
  
    &__center {
      position: absolute;
      inset: 0;
      margin: auto;
      z-index: 1;
    }
  
    &__item {
      display: flex;
      inline-size: auto;
      block-size: 50%;
      inset-block-start: 0;
      padding-block-start: 80px;
      position: absolute;
      box-sizing: border-box;
      transform-origin: 50% 100%;
      &:nth-of-type(2) {
        rotate: 45deg;
      }
      &:nth-of-type(3) {
        rotate: 90deg;
      }
      &:nth-of-type(4) {
        rotate: 135deg;
      }
      &:nth-of-type(5) {
        rotate: 180deg;
      }
      &:nth-of-type(6) {
        rotate: 225deg;
      }
      &:nth-of-type(7) {
        rotate: 270deg;
      }
      &:nth-of-type(8) {
        rotate: 315deg;
      }
    }
  }


  @media (width < 768px) {
    .wheel {
      inline-size: 330px;
      block-size: 330px;
      &__arrow {
        inline-size: 105px;
        block-size: 122px;
      }
      &__carousel {
        background-size: 120%;
      }
      &__item {
        padding-block-start: 40px;
      }
      &__center {
        inline-size: 90px;
        block-size: 90px;
      }
    }
  }
</style>