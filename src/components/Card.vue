<template>
  <div class="row" v-if="array" >
         <div v-for="(item) in array" :key='item._id' id="treks-list" @click="details(item)">
             <a class="card overflow-hidden d-flex treksPlaceholder trek-details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
              <p class="card-text" > {{item.name[0]}} </p>
               {{$route.params._id}}
         </div>
            <img class="card-image"  v-bind:src="item.name[3]" alt="Card image cap" />
            <br/>
          </a>
        
        </div>
         
      </div>
      
</template>

<script>
export default {
name: "Card",
props:["array"],
array:
    function (){
        return {
        }
    },
methods:{
          details(item){
             this.$router.push(`/trek/${item._id}`)      
          }
        }  
}
</script>

<style>

</style>