<template>
  <form @submit.prevent="loginHandler">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
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
      <label>Username</label>
    </div>

    <div class="form-label-group">
      <input
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      />
      <label>Password</label>
    </div>

    <button class="btn btn-lg btn-dark btn-block">Sign In</button>

    <div class="text-center mb-4">
      <p class="alreadyUser">
        Don't have account? Then just
        <router-link to="/register">Sign-Up</router-link>!
      </p>
    </div>

    <p class="mt-5 mb-3 text-muted text-center">© The Trekking Zone - 2019.</p>
  </form>
</template>

<script>
import { post } from "../requester";
export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginHandler() {
      const username = this.username;
      const password = this.password;
      post("user", "login", { username, password }, "Basic")
        .then(data => {
          sessionStore(data);
          console.log(sessionStorage.authtoken);
          console.log(sessionStorage.username);
          this.$router.push('/');
          location.reload()
          })
        .catch(console.error());
      function sessionStore(data) {
        sessionStorage.setItem("authtoken", data._kmd.authtoken);
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("userId", data._id);
      }
    }
  }
};
</script>

<style>
</style>