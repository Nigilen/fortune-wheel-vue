<script setup lang="ts">
import Logo from './ui-kit/TheLogo.vue';
import Wheel from './components/TheWheel.vue';
import Modal from './ui-kit/TheModal.vue';
import { ref } from 'vue'

const WheelData = [
  { id: 0, value: '50' },
  { id: 1, value: 'Пусто' },
  { id: 2, value: '100' },
  { id: 3, value: 'Повтор' },
  { id: 4, value: '150' },
  { id: 5, value: 'Пусто' },
  { id: 6, value: '300' },
  { id: 7, value: 'Повтор' },
];

interface WheelItem {
  id: number
  value: string
};

const showModal = ref(false);
const isDisabled = ref(false);
const selectedItem = ref<WheelItem | null>(null);

const handleClick = () => {
  selectedItem.value = WheelData[6];
  isDisabled.value = true;
  setTimeout(() => {
    showModal.value = true;
  }, 11800);
};

const handleClose = () => {
  showModal.value = false;
  isDisabled.value = false;
  selectedItem.value = WheelData[0];
}

</script>

<template>
  <header>
    <Logo />
  </header>
  <main>
    <Wheel :data="WheelData" :selectedItem="selectedItem" />
  </main>
  <footer>
    <PrimaryButton text="Крути" :onClick="handleClick" :isDisabled="isDisabled" />
  </footer>
  <Modal v-if=showModal :onClose="handleClose" :text="selectedItem?.value || null" />




  <!-- <header>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    
  </header> -->
  <!-- <RouterView /> -->
</template>
