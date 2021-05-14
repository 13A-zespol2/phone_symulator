<template>
  <div id="warper">

    <div id="background"></div>

    <v-form id="form">
      <v-col
        cols="3"
        sm="9"
      >
        <v-text-field class="input"
                      label="Wprowadz Numer telefonu"
                      placeholder="Numer telefonu"
                      v-bind:style="input"
        ></v-text-field>
        <v-text-field label="Wprowadz Pin"
                      placeholder="Pin"
                      v-bind:style="input"
        ></v-text-field>

        <v-btn
          class="mx-2"
          color="purple"
          dark
          fab
          large
        >
          <v-icon dark>
            mdi-android
          </v-icon>
        </v-btn>
      </v-col>
    </v-form>
  </div>
</template>

<script>

export default {
  name: 'VueBlockScreen',
  data() {
    return {
      input: {
        color: '#aba8ad',
      },
    };
  },
};
</script>

<style scoped>
#warper {
  width: 100%;
  height: 100%;
  background: #eae8e8;
  display: flex;
}

#background {
  width: 100%;
  height: 100%;
  background-image: url("tapeta.jpg");
  filter: blur(10px);
  -webkit-filter: blur(10px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#background-form {
  background: #989494;
  position: absolute;
  opacity: 0.1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 25%;
  height: 90%;

}

#form {
  position: absolute;

  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 20%;
  height: 50%;
  display: flex;
  justify-content: center;
}
</style>
