<template>
  <div id="main-view">
    <FlashMessage :position="'right top'"></FlashMessage>
    <div class="message_title">
      <div class="back_but" v-on:click="$router.push('/messages')"> Back</div>
    </div>

    <div class="message_view">


      <div class="recipent">
        <div class="message_number">To:</div>
        <input v-model="newSms.phoneNumberReceiver" class="message_to" id="message_to" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');">
      </div>

      <div class="message_body">
        <div v-for="(oneMessage, index) in allMessages" :key="'mess'+index">
          <div v-if="oneMessage.phoneNumberSender.number === newSms.phoneNumberSender.number">
            <div class="message_sent" >
              <p>{{oneMessage.message}}</p>
            </div>
          </div>

          <div v-else>
            <div class="message_received">
              <p>{{ oneMessage.message }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="message_text">
        <textarea id="textara" v-model="newSms.message"></textarea>
        <input class="sub_but" id="send_message_button" type="submit" value="➕" v-on:click="send()">
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import endpoint from '@/endpoint.json';
import $ from 'jQuery';

$(document).on('keypress', 'input', function(){
  if($(this).val().length > 8){
    event.preventDefault();
  }
});
export default {

  data() {
    return {
      newSms: {
        phoneNumberSender: '',
        phoneNumberReceiver: '',
        message: '',
        date: '',
      },
      allMessages: [],
    };
  },

  mounted() {
    this.newSms.phoneNumberSender = JSON.parse(sessionStorage.getItem('loggedIn'));
    if(sessionStorage.getItem('is_new_message') ==  'false') {
      if (sessionStorage.getItem('phoneNumberReceiver') != null) {
        this.newSms.phoneNumberReceiver = JSON.parse(sessionStorage.getItem('phoneNumberReceiver')).phoneNumberSender.number;
        if (this.newSms.phoneNumberSender.number === this.newSms.phoneNumberReceiver) {
          this.newSms.phoneNumberReceiver = JSON.parse(sessionStorage.getItem('phoneNumberReceiver')).phoneNumberReceiver;
        }
        this.loadCurrentNumberSms();
      }
      $('#message_to').css( 'pointer-events', 'none' );
    }
  },

  methods: {
    send() {
      if(this.newSms.phoneNumberReceiver == this.newSms.phoneNumberSender.number){
        this.flashMessage.error({
          status: 'error',
          title: 'Error!',
          message: 'You cannot send message to yourself :( Provide correct number!',
          time: 2000,
        });
        return;
      }
      if ( $('textarea').val().length < 1){
        this.flashMessage.error({
          status: 'error',
          title: 'Error!',
          message: 'Text message cannot be empty!',
          time: 2000,
        });
        return;
      }
      axios.post(`${endpoint.url}/sms/singlemessage`, this.newSms)
        .then((response) => {
          if (response.status === 200) {
            this.allMessages.push(response.data);
            this.newSms.message = '';
          }
        })
        .catch(() => {
          this.flashMessage.error({
            status: 'error',
            title: 'Error!',
            message: 'Provided number does not exist. Please provide correct data.',
            time: 2000,
          });
        });
    },

    loadCurrentNumberSms() {
      console.log(this.newSms);
      $('.message_to').text('');
      axios.post(`${endpoint.url}/sms/load`, this.newSms)
        .then((response) => {
          if (response.status === 200) {
            this.allMessages = response.data
            console.log(this.allMessages);
          }
        })
        .catch(() => {
          console.log('err');
        });
    },
  },
};


</script>

<style scoped>

*{
  font-family: cg;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #393939;
}

textarea {
  border: 1px solid white !important;
  border-radius: 10px;
  resize: none;
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

.message_title {
  color: white;
  font-size: 20px;
  margin-top: 20px;
  font-family: Verdana;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
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
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 10px;
  border-bottom: 1px solid #777;
}

.recipent input {
  width: 90%;
  background-color: transparent;
  border: none;
  color: white;
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
  color: white;
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

.message_body {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 20px 0;
}

.message_sent {
  width: 51%;
  float: right;
  padding: 20px;
  background-color: green;
  margin: 15px;
  border-radius: 9px;
  position: relative;
  word-wrap: break-word;

}
.message_sent p{
  word-wrap: break-word;
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
</style>
