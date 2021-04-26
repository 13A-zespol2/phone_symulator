<template>
  <div id="main-view">
    <div id="background-menu"></div>
    <div id="menu-bar">
      <button>asd</button>
      <button></button>
      <button></button>
      <button></button>
    </div>

  </div>
</template>

<script>
export default {};
</script>
<style scoped>
#main-view {
  background-image: url("tapeta.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 3% 3% 4% 4%;
  display: flex;
}

#menu-bar {
  width: 25%;
  height: 8%;
  border-radius: 1.600em;
  margin: 0.5% 0.3% 0.7% 0.7%;
  bottom: 1.2%;
  position: absolute;
  display: inline-flex;
}

#background-menu {
  opacity: 0.4;
  background-color: #d4dbdb;
  width: 25%;
  height: 8%;
  border-radius: 1.300em;
  margin: 0.5% 0.3% 0.7% 0.7%;
  bottom: 1.2%;
  position: absolute;
  display: inline-flex;
}

#menu-bar button {

  background-color: #13f800;
  width: 14%;
  height: 90%;
  margin-left: 5.5%;
  margin-right: 5%;
  margin-top: 1%;
  border-radius: 30%;
}
</style>
