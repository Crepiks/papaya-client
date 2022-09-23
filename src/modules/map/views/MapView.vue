<template>
  <div id="map"></div>
</template>

<script lang="ts" setup>
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXphdHlrIiwiYSI6ImNsOGVzZjhhMjBlN3czdnA5amgyYmhqM3UifQ.vJarQRq9FMd1I0OnEkVEAA";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-74.5, 40],
  projection: "globe",
});

map.on("style.load", () => {
  map.setFog({});
});
</script>

<style>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
