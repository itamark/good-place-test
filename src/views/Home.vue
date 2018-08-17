<template>
  <div class="home">
    <BadPlaceBehaviors />
  </div>
</template>

<script>
// @ is an alias to /src
import BadPlaceBehaviors from '@/components/BadPlaceBehaviors.vue'

export default {
  name: 'home',
  components: {
    BadPlaceBehaviors
  }
}
</script>

<style lang="scss">
  html, body{
    background: #11BCEC;
    height:100%;
        margin: 0px;
  }
  body{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

