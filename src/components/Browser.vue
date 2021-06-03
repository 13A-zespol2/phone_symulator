<template>

  <div id="main-view">
    <iframe id="inlineFrameExample" frameBorder="0" height="100%" src="https://www.google.com/search?igu=1"
            width="410px"></iframe>
  </div>

</template>

<script>

</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #393939;
}

#main-view {
  background-image: url("/src/images/tapeta.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
}

#menu-bar button {
  width: 18%;
  height: 80%;
  border-radius: 20%;
  position: relative;
}

#menu-bar button:hover {
  cursor: pointer;
}

#call_button * {
  color: white;
}

#sms_button * {
  color: #393939;
}

#logout_button * {
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
