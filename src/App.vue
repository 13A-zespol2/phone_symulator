<template>

  <div id="frame">
    <div id="screen">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
#screen {
  background-color: lightblue;
  width: 100%;
  height: 99%;
  margin: 0.8% 1% 0.7%;
  border-radius: 4% 4% 5% 5%;
  display: flex;
}

#frame {
  background-color: black;
  width: 27%;
  height: 98%;
  margin: 0.2% auto;
  border-radius: 5%;
  display: flex;
}

</style>
