<template>

  <div id="main-view">
    <iframe id="inlineFrameExample" frameBorder="0" height="100%" src="https://www.google.com/search?igu=1"
            width="364px"></iframe>
  </div>

</template>

<script>

import axios from 'axios';
import endpoint from '@/endpoint.json';

export default {
  data() {
    return {
      timeData: {
        phoneNumber: '',
        time: 0,
      },
      timeSpent: '',
    };
  },

  mounted() {
    this.timeData.phoneNumber = JSON.parse(sessionStorage.getItem('loggedIn')).number;
    console.log(this.timeData.phoneNumber);
    this.load();
    this.timeSpentOnInternet();
  },


  destroyed() {
    this.endConnection();
    clearInterval(this.timeSpent);
    this.timeData.time = 0;
  },

  methods: {
    load() {
      axios.post(`${endpoint.url}/browser`, '1')
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
        .catch(() => {
          console.log('nie poszlo');
        });
    },

    timeSpentOnInternet() {
      setTimeout(() => {
      }, 3000);

      this.timeSpent = setInterval(() => {
        this.timeData.time += 1;
      }, 1000);
    },
    endConnection() {
      console.log(this.timeData);
      console.log(this.timeData.time);

      axios.post(`${endpoint.url}/browser/time`, this.timeData)
        .then((response) => {
          if (response.status === 200) {
            console.log('poszlo');
          }
        })
        .catch(() => {
          console.log('nie poszlo');
        });
    },
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
