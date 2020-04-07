<template>
  <form @submit.prevent="registerHandler">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <p>Join our family and make a wish!</p>
    </div>

    <div class="form-label-group">
      <input
        v-model="username"
        type="text"
        class="form-control"
        placeholder="Username"
        required
        autofocus
      />
      <label for="inputUsername">Username</label>
    </div>

    <div class="form-label-group">
      <input
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      />
      <label
        for="inputPassword"
        v-if="!$v.password.minLength"
      >Password must have at least {{$v.password.$params.minLength.min}} letters.</label>
      <label for="inputPassword" v-else>Password</label>
    </div>

    <div class="form-label-group">
      <input
        v-model="rePassword"
        type="password"
        class="form-control"
        placeholder="Re-Password"
        required
      />
      <label for="inputRePassword" v-if="$v.rePassword.sameAs">Re-Password</label>
      <label for="inputRePassword" v-else>Re-Password must be equal to Password</label>
    </div>

    <button class="btn btn-lg btn-dark btn-block" type="submit">Sign Up</button>

    <div class="text-center mb-4">
      <p class="alreadyUser">
        Already have account? Then just
        <router-link to="/login">Sign-In</router-link>!
      </p>
    </div>

    <p class="mt-5 mb-3 text-muted text-center">© The Trekking Zone - 2019.</p>
  </form>
</template>

<script>
import { minLength, sameAs } from "vuelidate/lib/validators";
import { post } from "../requester";
export default {
  name: "Register",
  data: function() {
    return {
      username: "",
      password: "",
      rePassword: ""
    };
  },
  validations: {
    password: {
      minLength: minLength(6)
    },
    rePassword: {
      sameAs: sameAs("password")
    }
  },
  methods: {
    registerHandler() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const username = this.username
        const password = this.password
                post("user", "", { username, password }, "Basic")
              .then(data => {
                console.log(data);
                this.$router.push('/login')
              })
              .catch(console.error());
          
              }
    }
  }
};
</script>

<style>
</style>