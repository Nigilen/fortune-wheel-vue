<script setup lang="ts">

defineProps<{
  text: string,
  onClick: () => void,
  isDisabled?: boolean,
}>();


</script>

<template>

  <button class="button" type='button' @click="onClick" :disabled="isDisabled">
    <span class="button_text text-stroke">
      {{ isDisabled ? "😜🤞🏻" : text }}
    </span>
  </button>

</template>


<style lang="scss">
  .button {
    min-inline-size: 409px;
    inline-size: 100%;
    padding-block: 16px;
    background: linear-gradient(180deg, #FFC700 0%, #E4A400 100%);
    border: 0;
    border-radius: 999px;
    font: var(--button);
    color: inherit;
    text-transform: inherit;
    box-shadow: 
      inset 0px 4px 4px rgba(255, 255, 255, 0.5),
      inset 0px -6px 4px rgba(0, 0, 0, 0.2),
      0px 6px 12px rgba(27, 26, 72, 0.5); 
    transition-duration: 0.3s;
    cursor: pointer;

    &:hover {
      background: linear-gradient(180deg, #FFEA2F 0%, #FFB800 100%);
      box-shadow: 
        inset 0px 4px 4px rgba(255, 255, 255, 0.5), 
        inset 0px -6px 4px rgba(0, 0, 0, 0.2), 
        0px 6px 12px rgba(38, 108, 154, 1);
    }

    &:active {
      background: linear-gradient(180deg, #FFC700 0%, #E4A400 100%);
      box-shadow: none;
    }

    &:disabled {
      background: transparent;
      box-shadow: none;
      cursor: auto;
    }
  }


  @media (width < 768px) {
    .button {
      min-inline-size: 300px;
      inline-size: 100%;
      margin-inline: auto;
      padding-block: 12px;
      
      &_text {
        -webkit-text-stroke: 0.7px transparent;
      }
    }
  }
</style>