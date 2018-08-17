<template>
  <div class="hello">
    <div id="welcome" v-bind:class="{hidden: hideIntro}">
      <h1>
        Welcome!<br>
      Everything is fine.
      </h1>
    </div>
    <h1 id="behavior">Have you ever<br>{{behavior}}?</h1>
  </div>
</template>

<script>
import behaviors from "../assets/bad-place-behavior.json";
import store from "../store";
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default {
  name: "BadPlaceBehaviors",
  created: function() {
    setTimeout(() => {
      this.onAny();
      window.addEventListener("keyup", this.onAny);
    });
    setTimeout(()=>{
      this.hideIntro = true;
    }, 2000)
  },
  data: function(){
    return {
      hideIntro: false
    }
  },
  computed: {
    behavior: ()=>{
      return store.state.behavior
    }
  },
  methods: {

    onAny: () => {
      var beh = behaviors[getRandomInt(0, behaviors.length - 1)];
      console.log(beh);
      store.commit("updateBehavior", {
        behavior: beh
      });

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1#behavior{
    color: #F4CB4E;
    font-size: 70px;
    display:block;
    max-width:765px;
  }
  #welcome{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    font-size: 70px;
    color: #4bd636;
    opacity: 1;
    transition: opacity 1s;
    pointer-events: none;
    &.hidden{
      opacity: 0;
      
    }
  }
</style>
