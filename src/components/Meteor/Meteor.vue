<template>
  <div class="container">
    <div class="line" style="--color:#ec3e27;--x:3;--z:3;--d:1;"></div>
    <div class="line" style="--color:#fff;--x:3;--z:2;--d:2;"></div>
    <div class="line" style="--color:#fff;--x:4;--z:1;--d:3;"></div>
    <div class="line" style="--color:#fd79a8;--x:4;--z:0;--d:1;"></div>
    <div class="line" style="--color:#fff;--x:6;--z:-1;--d:2;"></div>
    <div class="line" style="--color:#0984e3;--x:6;--z:-2;--d:3;"></div>
    <div class="line" style="--color:#fff;--x:8;--z:-3;--d:1;"></div>
    <div class="line" style="--color:#fff;--x:10;--z:-4;--d:2;"></div>
    <div class="line" style="--color:#fff;--x:12;--z:-5;--d:3;"></div>
    <div class="line" style="--color:#fff;--x:14;--z:-6;--d:1;"></div>
    <div class="line" style="--color:#fff;--x:16;--z:-7;--d:2;"></div>
    <div class="line" style="--color:#fff;--x:18;--z:-8;--d:3;"></div>
    <div class="line" style="--color:#e056fd;--x:20;--z:-9;--d:1;"></div>
  </div>
</template>

<script>
export default {
  name: 'Meteor',
  mounted() {
    const window_width = document.documentElement.clientWidth
    const window_height = document.documentElement.clientHeight
    const container = document.querySelector('.container')
    container.addEventListener('mousemove', (event) => {
      let leftPercent = event.clientX / window_width
      let topPercent = event.clientY / window_height
      container.style.perspectiveOrigin = leftPercent + '%' + topPercent + '%'
    })
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: #aedfff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
  perspective-origin: left;
  transform-style: preserve-3d;
}

.line {
  position: absolute;
  width: 200px;
  height: 3px;
  border-radius: 3px;
  /* background-color: #fff; */
  background-image: linear-gradient(to right, var(--color), #ffffff50, transparent);
  animation: down 1s linear infinite both;
  animation-delay: calc(var(--d) * 0.3s);
}

.line::before,
.line::after {
  position: absolute;
  content: "";
  width: inherit;
  height: inherit;
  background-image: inherit;
}

.line::before {
  filter: blur(5px);
}

.line::after {
  filter: blur(10px);
}

@keyframes down {
  0% {
    transform: translateY(calc(var(--z) * 60px)) translateZ(calc(var(--z) * 100px)) rotate(-45deg) translateX(calc(var(--x) * 100px));
  }
  100% {
    transform: translateY(calc(var(--z) * 60px)) translateZ(calc(var(--z) * 100px)) rotate(-45deg) translateX(calc(var(--x) * -100px));
  }
}
</style>
