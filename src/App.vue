<template>

  <div id="frame">
    <div class="top_bar">
      <div class="aparat"></div>
      <div class="speaker"></div>
    </div>
    <div id="screen">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>

    <div class="home_button" v-on:click="changeRoute()"></div>
  </div>
</template>
<script>
export default {
  methods: {
    changeRoute() {
      this.$router.push('/dashboard')
        .catch((error) => {
          if (error.name !== 'NavigationDuplicated') {
            throw error;
          }
        });
    },
  },
};
</script>
<style lang="scss">
body{
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: #393939;
}

.top_bar{
  position: absolute;
  top:25px;
  margin:auto;
  width:80%;
  height:20px;
  display:flex;
  justify-content:center;
  align-items:center;
}

.aparat{
  width:10px;
  height:10px;
  background-color: #252525;
  border-radius:10px;
  margin: 0 5px;
}

.speaker{
  width:20%;
  height:8px;
  background-color: #252525;
  border-radius:20px;
  margin: 0 5px;
}

#screen {
  background-color: #000;
  padding:3px;
  width:100%;
  height:90%;
  margin:0.8% 1% 0.7%;
  display: flex;
  justify-content:center;
  align-items:center;
  border-radius:3px;
}

#frame {
  padding:60px 20px 20px;
  background-color: white;
  width: 410px;
  height: 90%;
  display: flex;
  border-radius:60px;
  margin:auto;
  align-items:center;
  flex-direction:column;
  position: relative;
  box-shadow:inset 0 0px 10px 2px #484848;
}

.home_button{
  width:60px;
  height:60px;
  border-radius:50px;
  border:3px solid #393939;
  margin-top:10px;
  transition:.5s ease;
}

.home_button:hover{
  background-color: #fafafa;
  cursor:pointer;
  transition:.5s ease;
  border:3px solid #ffd500;
  box-shadow: 0 0px 15px 1px #ffd500;
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

#menu-bar {
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  background-color: #222;
  padding: 14px 0;
  align-items:center;
}

#menu-bar button {
  width: 18%;
  height: 80%;
  border-radius: 20%;
  position: relative;
}

#menu-bar button:hover{
  cursor:pointer;
}

#call_button {
  background-color: #00ff84;
}

#call_button * {
  color: white;
}

#browser_button {
  background-color: #fff;
}

#sms_button {
  background-color: #fff;
}

#sms_button * {
  color: #393939;
}

#logout_button {
  background-color: #00ff84;
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
