<script setup lang="ts">
defineProps<{
  onClose: () => void
  text: string | null
}>()
</script>

<template>
  <div class="overlay" @click="onClose">
    <div class="modal">
      <div class="modal__title text-stroke">Ты молодец!</div>
      <div class="modal__value text-stroke">Вот твои {{ text }}</div>
      <PrimaryButton text="Забрать" @click="onClose" />
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  position: absolute;
  padding: 87px 40px 40px;
  background: linear-gradient(154deg, #5977c3 0%, #54268d 100%);
  border-radius: 63px;
  max-inline-size: 518px;
  box-sizing: border-box;
  inline-size: 100%;
  margin: auto;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);
  font: var(--modal);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  backdrop-filter: blur(24px);
  letter-spacing: 0.02em;
  text-shadow: 0 1.8px 3.6px rgba(0, 0, 0, 0.25);

  &::after {
    z-index: -1;
    display: block;
    position: absolute;
    padding: 9px;
    inset: 0;
    content: '';
    box-shadow: 0 0 60px rgba(14, 17, 85, 0.5);
    background: linear-gradient(147deg, #789cd2 0%, #403ea6 48%, #3e1e72 100%);
    border-radius: 63px;
    mask:
      linear-gradient(#000000 0 0) content-box,
      linear-gradient(#000000 0 0);
    mask-composite: exclude;
  }

  &__title {
    margin-block-end: 48px;
  }
  &__value {
    color: var(--text-accent-color);
    margin-block-end: 62px;
  }
}

.overlay {
  position: fixed;
  inset: 0;
  background-color: #200a43aa;
  backdrop-filter: blur(8px);
  z-index: 2;
}

@media (width < 768px) {
  .modal {
    padding: 56px 24px 24px;
    border-radius: 43px;
    max-inline-size: 344px;
    -webkit-text-stroke: 0.6px transparent;
    &::after {
      padding: 9px;
      border-radius: 43px;
    }
    &__title {
      margin-block-end: 32px;
    }
    &__value {
      margin-block-end: 48px;
    }
  }
}
</style>
