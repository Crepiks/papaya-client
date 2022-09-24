<script lang="ts" setup>
defineProps({
  prefixText: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "47.148602",
  },
  modelValue: {
    type: null,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateModelValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="common-input">
    <div class="common-input__prefix">{{ prefixText }}</div>
    <input
      :placeholder="placeholder"
      :value="modelValue"
      type="number"
      class="common-input__field"
      @input="updateModelValue($event)"
    />
  </div>
</template>

<style scoped>
.common-input {
  position: relative;
  display: flex;
  width: 100%;
}

.common-input__prefix {
  padding: 12px 20px 12px 14px;
  color: var(--text-grey);
  font-size: 12;
  background-color: var(--input-color);
  border-radius: 0 0 10px 10px;
}
</style>
