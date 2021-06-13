<template>
  <div id="screen">
    <div id="main-view">

      <div class="message_view">

        <div class="recipent">
          <input disabled type="text" class="message_to" id="number_input">
          <font-awesome-icon v-on:click="deleteInputVal" id="del" :icon="['fa', 'backspace']" />
        </div>

        <div class="message_body">
          <div class="number_container">
            <div v-on:click="getElementId($event)" class="number" id="1"><p class="nr">1</p></div>
          </div>
          <div class="number_container">
            <div v-on:click="getElementId($event)" class="number" id="2"><p class="nr">2</p></div>
          </div>
          <div class="number_container">
            <div v-on:click="getElementId($event)" class="number" id="3"><p class="nr">3</p></div>
          </div>
          <div class="number_container">
            <div v-on:click="getElementId($event)" class="number" id="4"><p class="nr">4</p></div>
          </div>
          <div class="number_container">
            <div v-on:click="getElementId($event)" class="number" id="5"><p class="nr">5</p></div>
          </div>
          <div class="number_container">
            <div v-on:click="getElementId($event)" class="number" id="6"><p class="nr">6</p></div>
          </div>
          <div class="number_container">
            <div v-on:click="getElementId($event)" class="number" id="7"><p class="nr">7</p></div>
          </div>
          <div class="number_container">
            <div v-on:click="getElementId($event)" class="number" id="8"><p class="nr">8</p></div>
          </div>
          <div class="number_container">
            <div v-on:click="getElementId($event)" class="number" id="9"><p class="nr">9</p></div>
          </div>
          <div class="number_container">
            <div v-on:click="getElementId($event)" class="number" id="0"><p class="nr">0</p></div>
          </div>
        </div>
        <div class="number_container">
          <div v-on:click="createNewCall($event)" class="number call_icon"><font-awesome-icon icon="phone-alt" /></div>
        </div>
      </div>
      <div class="popup">
        <div>
          <p class="popup_text">Calling</p>
          <p class="popup_text">+48 <span id="calling_number"></span></p>
          <p class="popup_text timer_text"><span id="minutes"></span>:<span id="seconds"></span></p>
        </div>

        <div class="number_container">
          <div v-on:click="endCall()" class="number decline_icon"><font-awesome-icon icon="phone-alt" /></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import $ from 'jQuery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import endpoint from '@/endpoint.json';

library.add(faBackspace);

export default {
  data() {
    return {
      idd: '',
      minutes: 0,
      seconds: 0,
      callTimer: '',
    };
  },

  mounted() {
    this.phoneNumberVue = JSON.parse(sessionStorage.getItem('loggedIn')).number;
  },

  name: 'Calling',
  methods: {
    getElementId(event) {
      const len = $('#number_input').val();
      if (len.length < 9) {
        $('#number_input').val($('#number_input').val() + event.currentTarget.id);
      }
    },
    deleteInputVal() {
      let value = $('#number_input').val();
      value = value.slice(0, -1);
      $('#number_input').val(value);
    },
    createNewCall() {
      $('.popup').css('display', 'flex');
      $('#calling_number').html($('#number_input').val());
      setTimeout(() => {
      }, 3000);

      this.callTimer = setInterval(() => {
        this.minutes += 1;
        this.seconds += 1;
        if (this.seconds < 60) {
          $('#minutes').html('00');
        }
        $('#seconds').html(this.seconds);

        if (this.seconds === 60) {
          this.minutes += 1;
        }
      }, 1000);
    },
    endTimer() {
      $('.popup').css('display', 'none');
      clearInterval(this.callTimer);
      this.minutes = 0;
      this.seconds = 0;
      $('#seconds').html('');
      $('#minutes').html('');
    },

    destroyed() {
      this.endTimer();
    },

    endCall() {
      console.log(this.seconds);
      axios.put(`${endpoint.url}/phone/call/${this.phoneNumberVue}/${this.seconds}`, this.phoneNumberVue, this.seconds)
        .then((response) => {
          if (response.status === 200) {
            // this.endTimer();
            console.log('dsa');
          }
        })
        .catch(() => {
          console.log('dsa');
        });
    },
  },
};

</script>

<style scoped>
.popup{
  width:100%;
  height:100%;
  background-color:#000;
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  color:#fff;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.popup_text{
  font-family: cg;
  font-size: 28px;
  color: #fff;
  text-align: center;
  width: 100%;
}

.timer_text{
  font-size: 18px;
  margin-top:20px;
}

@font-face {
  font-family: "cg";
  src: url("../fonts/CenturyGothic.ttf") format("ttf");
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

#main-view {
  background-color: #000;
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

#call_button {
  background-color: #00ff84;
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

.message_view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #000;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-family: cg;
}

.delete_from_input{
  background-color:#fff;
  border-radius: 50px;
}

.message_title p {
  margin: 0;
  font-size: 13px;
}

.message_title div {
  color: #78e8ff;
  font-size: 17px;
  padding-bottom: 2px;
  border-bottom: 2px solid #78e8ff;
}

.recipent {
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0 10px;
  border-bottom: 1px solid #333;
}

.recipent input {
  width: 70%;
  font-family: cg;
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: white;
  text-align: center;
}

.recipent input:focus {
  outline: none;
}

.message_text {
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 20px;
  border-top: 1px solid #777;
  margin-bottom: 10px;
}

.message_text textarea {
  width: 80%;
  background-color: transparent;
  border: none;
  color: white;
}

.message_text textarea:focus {
  outline: none;
}

input[type="submit"] {
  background-color: #fff;
  border-radius: 40px;
  border: none;
  transition: .5s ease;
  padding: 15px;
}

input[type="submit"]:hover {
  cursor: pointer;
  background-color: #00960c;
  transition: .5s ease;
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

.message_sent {
  width: 51%;
  float: right;
  padding: 20px;
  background-color: green;
  margin: 15px;
  border-radius: 9px;
  position: relative;
}

.message_sent:before {
  content: '';
  width: 50px;
  height: 30px;
  background-color: green;
  position: absolute;
  bottom: 0;
  transform: rotate(45deg);
  right: 15px;
}

.message_received {
  width: 51%;
  float: left;
  padding: 20px;
  background-color: #484848;
  margin: 15px;
  border-radius: 9px;
  position: relative;
}

.message_received:before {
  content: '';
  width: 50px;
  height: 30px;
  background-color: #484848;
  position: absolute;
  bottom: 0;
  transform: rotate(45deg);
  left: 5px;
}

.message_body p {
  position: relative;
}

.message_body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
}

.number_container {
  width:30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
}

.number {
  padding: 40px;
  background-color: #393939;
  border-radius: 50px;
  color: #fff;
  position: relative;
  font-family: cg;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s ease;
  touch-action: none;
  user-select: none;
  position: relative;
}
.number p{
  position: absolute;
}

.number:hover {
  background-color: #666;
  transition: .5s ease;
  cursor: pointer;
}

.call_icon {
  background-color: green;
  padding:25px;
  margin-top:-20px;
}

.decline_icon{
  background-color: red;
  padding:25px;
  margin-top:-20px;
}

.onhover {
  background-color: #666;
}

#del{
  transition: .5s ease;
}
#del:hover{
  cursor: pointer;
  transform: scale(1.2);
  transition: .5s ease;
}

</style>
