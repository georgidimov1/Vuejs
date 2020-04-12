<template>
  <div class="container" v-if='!array'>
        <div class="row">
          <div class="col-md-12">
            <div id="fouronefour">
              <img class="no-found-picture" src="../assets/empty.jpg" />
            </div>
            <div class="no-found-template">
              <h1>There aren't any treks, yet!</h1>
              <h2>What do you have in mind?</h2>
              <div class="no-found-details">Be the first explorer!</div>
              <div class="actions">
                <router-link to="/create" class="btn btn-dark btn-lg">Create the first trek?</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
name: "NoTemplate",
props:['array'],
data:
    function (){
        return {

        }
    }
}
</script>

<style>

</style>