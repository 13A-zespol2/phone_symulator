<template>
  <div id="main-view">
    <div id="menu-bar">
      <button id="call_button">
        <font-awesome-icon icon="phone"/>
      </button>
      <button id="other_button">
        <font-awesome-icon icon="search"/>
      </button>
      <button id="setting_button">
        <font-awesome-icon icon="cog"/>
      </button>
      <button id="message_button">
        <font-awesome-icon icon="sms"/>
      </button>
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
  position: relative;
}

#menu-bar {
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  background-color: #777;
  padding: 18px 7px;

}

#menu-bar button {
  width: 18%;
  height: 100%;
  border-radius: 20%;
  position: relative;
}

#call_button {
  background-color: #00ff84;
}

#call_button * {
  color: white;
}

#setting_button {
  background-color: #fff;
}

#other_button {
  background-color: #fff;
}

#other_button * {
  color: #393939;
}

#message_button {
  background-color: #00ff84;
}

#message_button * {
  color: white;
}

#menu-bar button * {
  font-size: 34px;
  transition: .5s ease;
}

#menu-bar button:hover * {
  font-size: 38px;
  transition: .5s ease;
}
</style>
