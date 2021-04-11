<template>
  <div class="production__content content-wrapper">
    <div class="production-specs__container">
      <h4 class="production-specs__title">Тип биоробота</h4>

      <div class="production-specs__type-container">
        <fieldset class="production-specs__type">
          <input
            type="radio"
            v-model="specs"
            value="front"
            class="radio"
            id="frontEnd"
          />
          <label for="frontEnd" class="label">FrontEnd</label>
        </fieldset>
        <fieldset class="production-specs__type">
          <input
            type="radio"
            v-model="specs"
            value="design"
            class="radio"
            id="design"
          />
          <label for="design" class="label">Design</label>
        </fieldset>
      </div>

      <h4 class="production-specs__title">Стабилизатор</h4>
      <div class="production-specs__type-container">
        <div class="production-specs__type">
          <input
            type="radio"
            v-model="gender"
            value="male"
            class="radio"
            id="male"
          />
          <label for="male" class="label">Male</label>
        </div>
        <div class="production-specs__type">
          <input
            type="radio"
            v-model="gender"
            value="female"
            class="radio"
            id="female"
          />
          <label for="female" class="label">Female</label>
        </div>
      </div>
    </div>
    <div class="production-parts__container">
      <BiomachinesContainer />
      <ProcessorContainer />
      <SoulContainer />
    </div>

    <div class="production-robot" :class="previewImage"></div>

    <div class="production-button__container">
      <el-button
        :clickPass="clickHandler"
        :disabled="disableHandler"
        class="button-origin production-button"
        >Произвести за 10 монет</el-button
      >
    </div>

    <div class="production-message__container">
      <p class="production-message">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
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

  data: function () {
    return {
      gender: "male",
      specs: "design",
      bioRequirments: 4,
      processorRequirments: 4,
      soulRequirments: 1,
    };
  },

  methods: {
    clickHandler() {
      this.robotDone();
    },

    ...mapActions(['robotDone'])
  },

  computed: {
    disableHandler() {
      if (
        this.bioQuantity !== this.bioRequirments ||
        this.processorQuantity !== this.processorRequirments ||
        this.soulQuantity !== this.soulRequirments ||
        this.coins < 10
      ) {
        return true;
      }
      return false;
    },

    message() {
      let message = "Для производства биоробота не хватает ";
      let messageParts = [];

      const diffBio = this.bioRequirments - this.bioQuantity;
      const diffProc = this.processorRequirments - this.processorQuantity;

      if (this.bioQuantity !== this.bioRequirments) {
        messageParts.push("биомеханизм");
      }
      if (this.processorQuantity !== this.processorRequirments) {
        messageParts.push("процессор");
      }
      if (this.soulQuantity !== this.soulRequirments) {
        messageParts.push("души");
      }
      if (this.coins < 10) {
        messageParts.push("денег");
      }

      messageParts = messageParts.map((messPiece) => {
        if (messPiece === "биомеханизм") {
          return diffBio === 1
            ? `${diffBio} ${messPiece}а`
            : `${diffBio} ${messPiece}ов`;
        } else if (messPiece === "процессор") {
          return diffProc === 1
            ? `${diffProc} ${messPiece}а`
            : `${diffProc} ${messPiece}ов`;
        }
        return messPiece;
      });

      let lastMessage = "";

      // если все условия соблюдены - то ничего не писать
      if (messageParts.length === 0) return "";

      if (messageParts.length > 1) {
        lastMessage = " и " + messageParts.pop();
      }
      message = message + messageParts.join(", ") + lastMessage;
      return message;
    },

    stateImage() {
      if (this.isRobotDone) return 'done';
      else if (
        this.bioQuantity === this.bioRequirments &&
        this.processorQuantity === this.processorRequirments &&
        this.soulQuantity === this.soulRequirments &&
        this.coins >= 10
      ) {
        return "canBeBuild";
      } else return "cantBeBuild";
    },

    previewImage() {
      return `${this.gender}-${this.specs}-${this.stateImage}`;
    },

    ...mapState({
      bioQuantity: (state) =>
        state.partsInProd.find((item) => item.name === "Биомеханизм").quantity,
      processorQuantity: (state) =>
        state.partsInProd.find((item) => item.name === "Процессор").quantity,
      soulQuantity: (state) =>
        state.partsInProd.find((item) => item.name === "Душа").quantity,
      coins: (state) => state.coins,
      isRobotDone: (state) => state.isRobotDone,
    }),
  },
};
</script>

<style lang="scss"></style>
