<template>
  <div ref="container">
    <Renderer ref="renderer" resize="window">
      <Camera :position="{ z: 10 }" />
      <Scene ref="scene">
        <PointLight :position="{ y: 50, z: 50 }" />
        <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
          <LambertMaterial />
        </Box>
      </Scene>
    </Renderer>
  </div>
</template>

<script lang="js">
export default {
  mounted() {
    const container = this.$refs.container
    // const scene = this.$refs.scene;
    // const renderer = this.$refs.renderer;
    const box = this.$refs.box.mesh;

    let mouseDown = false
    let mouseX = 0;
    let mouseY = 0;

    container.addEventListener('mousemove', function (e) {
      onMouseMove(e);
    }, false);
    container.addEventListener('mousedown', function (e) {
      onMouseDown(e);
    }, false);
    container.addEventListener('mouseup', function (e) {
      onMouseUp(e);
    }, false);

    function onMouseMove(event) {
      if (!mouseDown) {
        return;
      }

      event.preventDefault();

      let deltaX = event.clientX - mouseX;
      let deltaY = event.clientY - mouseY;

      mouseX = event.clientX;
      mouseY = event.clientY;

      rotateScene(deltaX, deltaY);
    }

    function onMouseDown(evt) {
      evt.preventDefault();

      mouseDown = true;
      mouseX = evt.clientX;
      mouseY = evt.clientY;
    }

    function onMouseUp(evt) {
      evt.preventDefault();

      mouseDown = false;
    }

    function rotateScene(deltaX, deltaY) {
      box.rotation.y += deltaX / 100;
      box.rotation.x += deltaY / 100;
    }
  },
};
</script>
