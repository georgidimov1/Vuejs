<template>
  <div>
    <div v-if="isAuth" class="container">
      <div v-if="data" class="row">
         <div v-for="(item) in data" :key='item._id' id="treks-list" v-bind="item" @click="details()" >
            <a class="card overflow-hidden d-flex treksPlaceholder trek-details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
              <p class="card-text" ></p>
             {{item.name[0]}}
            </div>
            <img class="card-image"  v-bind:src="item.name[3]" alt="Card image cap" />
           <br/>
          </a>
        </div>
      </div>
      <div class="container" v-else>
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
    </div>
    <div class="home d-md-flex flex-md-equal my-md-3 pl-md-3" v-if="!isAuth">
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
import { get } from '../requester'
export default {
  name: 'Landing',
  data: function(){
    get('appdata', 'TREKKING', 'Kinvey')
    .then((response)=>{this.data = response;})
    
    return {
        isAuth: sessionStorage.authtoken,
        getTrek:"",
        namePlace:'',
        data:''
             }
        },
        methods:{
          details(){
             this.$router.push('/trek')
                     
          }
        }   
  }
 
</script>

<style scoped>
button {
    position: absolute;
right:    5px;
bottom:   5px;
  background-color: #f8d7d7;
  color: black;
  font-size: 16px;
  padding: 16px 30px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
      }

</style>
