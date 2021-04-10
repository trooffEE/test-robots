<template>
  <div class="production__content content-wrapper">
    <div class="production-specs__container">
      <h4 class="production-specs__title">Тип биоробота</h4>

      <div class="production-specs__type-container">
        <fieldset class="production-specs__type">
          <input type="radio" name="spec" class="radio" id="frontEnd" />
          <label for="frontEnd" class="label">FrontEnd</label>
        </fieldset>
        <fieldset class="production-specs__type">
          <input type="radio" name="spec" class="radio" id="design" />
          <label for="design" class="label">Design</label>
        </fieldset>
      </div>

      <h4 class="production-specs__title">Стабилизатор</h4>
      <div class="production-specs__type-container">
        <div class="production-specs__type">
          <input type="radio" name="gender" class="radio" id="male" />
          <label for="male" class="label">Male</label>
        </div>
        <div class="production-specs__type">
          <input type="radio" name="gender" class="radio" id="female" />
          <label for="female" class="label">Female</label>
        </div>
      </div>
    </div>

    <div class="production-parts__container">
      <BiomachinesContainer />
      <ProcessorContainer />
      <SoulContainer />
    </div>

    <div class="production-robot"></div>

    <div class="production-button__container">
      <el-button class="button-origin production-button"
        >Произвести за 10 монет</el-button
      >
    </div>

    <div class="production-message__container">
      <p class="production-message">
        Для производства биоробота не хватает 2 биомеханизма, 3 процессора и
        души
      </p>
    </div>
  </div>
</template>

<script>
import elButton from "../../../UI/el-button.vue";
import BiomachinesContainer from "./BiomachinesContainer/BiomachinesContainer.vue";
import ProcessorContainer from "./ProcessorContainer/ProcessorContainer.vue";
import SoulContainer from "./SoulContainer/SoulContainer.vue";
export default {
  components: {
    elButton,
    BiomachinesContainer,
    ProcessorContainer,
    SoulContainer,
  },
};
</script>

<style lang="scss"></style>
