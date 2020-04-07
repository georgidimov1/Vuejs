<template>
  <form class="create-trek" @submit.prevent="createHandler">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Wish for a new adventure!</h1>
      <p>Fill up the following information!</p>
    </div>

    <div class="form-label-group">
      <input
        type="text"
        v-model="place"
        class="form-control"
        placeholder="Location"
        required
        autofocus
      />
      <label for="inputTrekName">Location</label>
    </div>

    <div class="form-label-group">
      <input type="text" v-model="dateTime" class="form-control" placeholder="Date" required />
      <label for="inputTrekDate">Date</label>
    </div>

    <div class="form-label-group">
      <textarea
        type="text"
        v-model="description"
        class="form-control"
        placeholder="Description"
        required
      ></textarea>
      <label for="inputTrekDescription">Description</label>
    </div>

    <div class="form-label-group">
      <input
        type="text"
        v-model="imageURL"
        class="form-control"
        placeholder="Image"
        required
        autofocus
      />
      <label for="inputTrekImage">Image</label>
    </div>

    <button class="btn btn-lg btn-dark btn-block" type="submit">Make a wish =)</button>
  </form>
</template>

<script>
import { post } from "../requester";
export default {
  name: "Create",
  data: function() {
    return {
      place: "",
      dateTime: "",
      description: "",
      imageURL: ""
    };
  },
  methods: {
    createHandler() {
      const username = sessionStorage.username;
      const dateTime = this.dateTime;
      const place = this.place;
      const description = this.description;
      const imageURL = this.imageURL;
      post(
        "appdata",
        "TREKKING",
        {
          name: [place, dateTime, description, imageURL],
          likes:0,
          organizer: username
        },
        "Kinvey"
      )
        .then(data => {
          console.log(data._id);
           this.$router.push('/')
                 })
        .catch(console.error());
    }
  }
};
</script>

<style>
</style>