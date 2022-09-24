<template>
  <div id="map"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

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
  try {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXphdHlrIiwiYSI6ImNsOGVzZjhhMjBlN3czdnA5amgyYmhqM3UifQ.vJarQRq9FMd1I0OnEkVEAA";

    const map = new mapboxgl.Map(mapOptions);

    map.on("load", () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
        (layer: any) => layer.type === "symbol" && layer.layout["text-field"]
      ).id;

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      map.addLayer(
        {
          id: "add-3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
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

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );
  } catch (err) {
    console.log("map error", err);
  }
};

onMounted(() => {
  createMap();
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
