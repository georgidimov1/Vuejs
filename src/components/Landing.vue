<template>
  <div>
    <div v-if="isAuth" class="container">
      <Card  :isAuth='isAuth'
             :array='array'/>
      <NoTemplate :array='array'/>
    </div>
    <div class="home d-md-flex flex-md-equal my-md-3 pl-md-3" v-else>
      <div style=" padding-left: 7%; padding-top:3%;" class="col-md-7">
        <h2 class="featurette-heading">
          Here you will find the treks you've
          <span class="text-highlighted">
            always dreamed
            about!
          </span>
        </h2>
        <p class="lead">1. Join our family.</p>
        <p style="padding-left:5%" class="lead">2. Request the trek you've always wanted.</p>
        <p style="padding-left:10%" class="lead">3. Find people who like your idea.</p>
        <p class="lead">If you find enough supporters, we will organize everything for you!</p>
      </div>
      <div class="col-md-5">
        <img class="home-picture" src="../assets/mountainLogo.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import NoTemplate from '../components/NoTemplate.vue'
export default {
  name: 'Landing',
  components: {
    Card,
    NoTemplate
  },
  props:["isAuth", "array"],
  data: function(){
    
    
    return {
        
             
        }
  },
  }
  
 
</script>

<style>

</style>
