<template>
  <div class="main-view">
    <div class="bg_blur"></div>

    <FlashMessage :position="'right top'"></FlashMessage>
    <form>
      <div class="form_input">
        <input v-model="loginForm.number" placeholder="Your phone number" type="text"/>
      </div>
      <div class="form_input">
        <input v-model="loginForm.pin" placeholder="Your passcode" type="password"/>
      </div>
      <div id="example" class="form_input">
        <a class="submit_button" type="submit" value="Log in" v-on:click="submit()">Log In</a>
      </div>
    </form>
  </div>
</template>

<script>

import axios from 'axios';
import endpoint from '@/endpoint.json';

export default {
  data() {
    return {
      loginForm: {
        number: '772905835',
        pin: '1234',
      },
    };
  },
  methods: {
    submit() {
      axios.post(`${endpoint.url}/login`, this.loginForm)
        .then((response) => {
          if (response.status === 200) {
            sessionStorage.setItem('loggedIn', JSON.stringify(response.data));
            this.flashMessage.success({
              status: 'success',
              title: 'Success!',
              message: 'You provided correct credentials!',
              time: 2000,
            });
            setTimeout(() => {
              this.$router.push('/dashboard');
            }, 1000);
          }
        })
        .catch(() => {
          this.flashMessage.error({
            status: 'error',
            title: 'Error!',
            message: 'You provided incorrect credentials!',
            time: 200000,
          });
        });
    },
  },
};

</script>

<style scoped>
*{
  font-family: cg;
}

.main-view {
  background-image: url("tapeta.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

.bg_blur {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(7px);
  width: 100%;
  height: 100%;
}

form {
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

form .form_input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 20px 0;
  padding: 0;
}

form .form_input input {
  border-bottom: 1px solid white;
  width: 250px;
  padding: 5px 0;
  color: white;
  font-size: 24px;
  font-family: 'Courier New', Courier;
  text-align: center;
}

form .form_input input::placeholder {
  text-align: center;
  color: #ccc;
  font-family: 'Courier New', Courier;
  font-size: 20px;
}

form .form_input .submit_button {
  background-color: #91003d;
  border: none;
  padding: 20px 35px 15px;
  margin: 10px 0;
  text-align: center;
  width: 200px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin: 10px auto;
  transition: .5s ease;
  box-shadow: 5px 5px 0 0 #fff, inset 5px 5px 0 0 #fff;
}

form .form_input .submit_button:hover {
  background: transparent;
  box-shadow: 0 0 0 0 #fff, inset 108px 72px 0 0 #fff;
  transition: .5s ease;
  cursor: pointer;
  color: #393939;
}
</style>
