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

    <div class="home_button"></div>
  </div>
</template>

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
}

#frame {
  padding:60px 15px 20px;
  background-color: white;
  width: 450px;
  height: 90%;
  display: flex;
  border-radius:40px;
  margin:auto;
  align-items:center;
  flex-direction:column;
  position: relative;
}

.home_button{
  width:60px;
  height:60px;
  border-radius:50px;
  border:3px solid #cecece;
  margin-top:10px;
}

.home_button:hover{
  background-color: #fafafa;
}
</style>
