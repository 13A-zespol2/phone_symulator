<template>

    <div id="main-view">
      <div class="messages_title">
        <p>Messages</p>
        <input class="sub_but" type="submit" value="➕" v-on:click="$router.push('/singlemessage')">
      </div>

      <div class="message_view">
        <div class="message_body">

          <div class="simple_message">
            <div class="icon">K</div>
            <div class="message_content">
              <p class="sender">Test sender</p>
              <p class="content">Simple content of sent message here</p>
            </div>
          </div>

          <div class="simple_message">
            <div class="icon">K</div>
            <div class="message_content">
              <p class="sender">Test sender</p>
              <p class="content">Simple content of sent message here</p>
            </div>
          </div>

          <div class="simple_message">
            <div class="icon">K</div>
            <div class="message_content">
              <p class="sender">Test sender</p>
              <p class="content">Simple content of sent message here</p>
            </div>
          </div>

          <div class="simple_message">
            <div class="icon">K</div>
            <div class="message_content">
              <p class="sender">Test sender</p>
              <p class="content">Simple content of sent message here</p>
            </div>
          </div>

          <div class="simple_message">
            <div class="icon">K</div>
            <div class="message_content">
              <p class="sender">Test sender</p>
              <p class="content">Simple content of sent message here</p>
            </div>
          </div>

          <div class="simple_message">
            <div class="icon">K</div>
            <div class="message_content">
              <p class="sender">Test sender</p>
              <p class="content">Simple content of sent message here</p>
            </div>
          </div>

          <div class="simple_message">
            <div class="icon">K</div>
            <div class="message_content">
              <p class="sender">Test sender</p>
              <p class="content">Simple content of sent message here</p>
            </div>
          </div>

          <div class="simple_message">
            <div class="icon">K</div>
            <div class="message_content">
              <p class="sender">Test sender</p>
              <p class="content">Simple content of sent message here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
  },
};
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #393939;
}

.top_bar {
  position: absolute;
  top: 25px;
  margin: auto;
  width: 80%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aparat {
  width: 10px;
  height: 10px;
  background-color: #252525;
  border-radius: 10px;
  margin: 0 5px;
}

.speaker {
  width: 20%;
  height: 8px;
  background-color: #252525;
  border-radius: 20px;
  margin: 0 5px;
}

#screen {
  background-color: #000;
  padding: 3px;
  width: 100%;
  height: 90%;
  margin: 0.8% 1% 0.7%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}

#frame {
  padding: 60px 20px 20px;
  background-color: white;
  width: 410px;
  height: 90%;
  display: flex;
  border-radius: 60px;
  margin: auto;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-shadow: inset 0 0px 10px 2px #484848;
}

.home_button {
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border: 3px solid #393939;
  margin-top: 10px;
  transition: .5s ease;
}

.home_button:hover {
  background-color: #fafafa;
  cursor: pointer;
  transition: .5s ease;
  border: 3px solid #ffd500;
  box-shadow: 0 0px 15px 1px #ffd500;
}

#main-view {
  background-color: #000;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
}

.message_view {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #282828;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-family: Verdana;
}

.messages_title {
  color: white;
  font-size: 20px;
  margin-top: 10px;
  font-family: Verdana;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  color: white;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  border-left: 1px solid #ff8282;
}

::-webkit-scrollbar-thumb {
  background: #ffd500;;
}

::-webkit-scrollbar-track-piece {
  background: #000;
}

.message_body {
  overflow-y: scroll;
  padding: 20px 00px;
  width: 100%;
}

.simple_message {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: .5s ease;
}

.simple_message:hover {
  background-color: #888;
  cursor: pointer;
  transition: .5s ease;
}

.simple_message p {
  margin: 5px 15px;
}

.simple_message .icon {
  background-color: #aaa;
  border-radius: 40px;
  padding: 20px 25px;
}

input[type="submit"] {
  background-color: #fff;
  border-radius: 40px;
  border: none;
  transition: .5s ease;
  padding: 10px;
}

input[type="submit"]:hover {
  cursor: pointer;
  background-color: #00960c;
  transition: .5s ease;
}

</style>
