<template>
  <section id="landing">
    <div class="row">
    <div class="col-md-6 m-auto">
      <h2 class="fw-bold p-2 text-center">Register</h2>
        <form class="container border border-black h-100" @submit.prevent="register">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control pass m-auto" id="firstName" v-model="firstName">
      </div>
        <div class="form-group">
        <label for="lastName">Last tName</label>
        <input type="text" class="form-control pass m-auto" id="lastName" v-model="lastName">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control pass m-auto" id="email" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control pass m-auto" id="password" v-model="password">
      </div>
      <div class="form-group">
        <label for="mobile">Mobile</label>
        <input type="number" class="form-control pass m-auto" id="password" v-model="password">
      </div>
        <div class="form-group">
        <label class="form-control" v-show="userMsg">{{userMsg}}</label>
      </div>
      <button class="btn btn-primary my-5" type="submit">Submit</button>
    </form>
    </div>
    <div class="col-md-6 m-auto">
      <h2 class="text-dark text-center">Login</h2>
        <form class="container border border-black form-inline">
          <div class="form-group mb-2">
            <label for="staticEmail2" class="sr-only">Email</label>
            <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">Password</label>
            <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary mb-2">Login</button>
        </form>
    </div>
  </div>
</section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>


<style scoped>
  #landing{
    /*
   min-height: 100h;
   background: url(https://i.postimg.cc/wvxxpv9d/blue-cyber-circuit-future-technology-image-vector.webp) ;
   display: inline-flex;
   background-attachment: fixed;
   min-width: 100vw;
   margin-right: 300px;*/
   background: url(https://i.postimg.cc/6q2TRh4V/videoblocks-plexus-white-abstract-network-technology-business-science-background-loop-svveqlpgf-thum.png) fixed;
   min-height: 100vh;
   min-width: 100vw;
}

</style>