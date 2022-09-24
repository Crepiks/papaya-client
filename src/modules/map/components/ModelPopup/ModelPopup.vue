<script lang="ts" setup></script>

<template>
  <div class="model-popup">
    <span class="model-popup__title">Watch 3D model of building</span>
    <button class="model-popup__button">
      <i class="bx bx-current-location model-popup__button-icon" />
      Go to 3D model
    </button>
  </div>
</template>

<style scoped>
.model-popup {
  width: 400px;
  padding: 16px 20px 20px;
  display: flex;
  flex-direction: column;
  color: white;
  border-radius: 10px;
  background-color: #082467;
}

.model-popup__title {
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
}

.model-popup__button {
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #254ba5;
  border-radius: 6px;
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
}

.model-popup__button-icon {
  margin-right: 8px;
}
</style>
