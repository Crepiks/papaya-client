<script lang="ts" setup>
import { locations } from "../../data/locations";

defineEmits(["location-select"]);
</script>

<template>
  <div class="location-presets">
    <span class="location-presets__title">May be interesting 😄</span>
    <div
      v-for="(location, index) in locations"
      :key="index"
      class="location-presets__card"
      @click="$emit('location-select', location)"
    >
      <div class="location-presets__row">
        <span class="location-presets__param"
          >Lat: {{ location.latitude }}</span
        >
        <span class="location-presets__param"
          >Lon: {{ location.longitude }}</span
        >
      </div>
      <i class="bx bx-right-arrow-alt" />
    </div>
  </div>
</template>

<style scoped>
.location-presets {
  width: 400px;
  max-height: 500px;
  overflow-y: auto;
  padding: 16px 20px 20px;
  color: white;
  border-radius: 10px;
  background-color: #082467;
}

.location-presets__title {
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
}

.location-presets__card {
  margin-bottom: 14px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #254ba5;
  border-radius: 6px;
  cursor: pointer;
}

.location-presets__card:last-child {
  margin-bottom: 0;
}

.location-presets__row {
  display: flex;
  align-items: center;
}

.location-presets__param {
  width: 140px;
  margin-right: 16px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
