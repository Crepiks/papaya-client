<script lang="ts" setup>
import { onMounted } from "vue";
import mapboxgl, { Map } from "mapbox-gl";
import type { Location } from "@/common/entities/location";
import LocationPresets from "../components/LocationPresets/LocationPresets.vue";

let map: any = null;

onMounted(() => {
  map = createMap();
});

const mapOptions = {
  container: "map",
  pitch: 45,
  bearing: -17.6,
  center: [71.399033, 51.090245],
  zoom: 16,
  antilias: true,
  style: "mapbox://styles/mapbox/navigation-night-v1",
};

const createMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYXphdHlrIiwiYSI6ImNsOGVzZjhhMjBlN3czdnA5amgyYmhqM3UifQ.vJarQRq9FMd1I0OnEkVEAA";

  const map = new Map(mapOptions);

  map.on("load", () => {
    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
      (layer: any) => layer.type === "symbol" && layer.layout["text-field"]
    ).id;

    map.addLayer(
      {
        id: "add-3d-buildings",
        source: "composite",
        "source-layer": "building",
        filter: ["==", "extrude", "true"],
        type: "fill-extrusion",
        minzoom: 12,
        paint: {
          "fill-extrusion-color": "#3498db",
          "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "height"],
          ],
          "fill-extrusion-base": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "min_height"],
          ],
          "fill-extrusion-opacity": 0.6,
        },
      },
      labelLayerId
    );
  });

  return map;
};

const handleLocationSelect = (location: Location) => {
  if (map) {
    map.flyTo({
      center: [location.longitude, location.latitude],
      essential: true,
    });
  }

  new mapboxgl.Marker()
    .setLngLat([location.longitude, location.latitude])
    .addTo(map);
};
</script>

<template>
  <div id="map"></div>
  <LocationPresets
    class="location-presets"
    @location-select="handleLocationSelect"
  />
</template>

<style>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.location-presets {
  position: fixed;
  top: 30px;
  right: 30px;
}
</style>
