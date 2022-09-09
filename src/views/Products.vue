<template>
    <section class="section-products py-5 my-5 p-5">
        <div class="header">
          <!-- <h3>Featured Product</h3> -->
          <h1 class="text-dark">Products</h1>
        </div>
  
      <div class="container shadow-lg">
        <div class="row justify-content-center text-center">
          <div class="col-md-8 col-lg-6">
          </div>
      </div>
  
  
        <div class="row">
          <div id="product-1" class="single-product" v-for="(prod, index) in products" :key="index">
            <div class="card-body">
                <div class="part-1">
                  <img :src="prod.image" class="card-img-top" :alt="prod.title" />
                <ul>
                  <li>
                    <router-link to="#"><i class="bi bi-cart"></i></router-link>
                  </li>
                  <li>
                    <router-link to="#"><i class="bi bi-heart"></i></router-link>
                  </li>
                  <li>
                    <router-link to="#"><i class="bi bi-plus"></i></router-link>
                  </li>
                  <li>
                    <router-link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      ><i class="bi bi-arrows-angle-expand"></i
                    ></router-link>
                  </li>
                </ul>
              </div>
              <div class="part-2">
                <h3 class="product-title">{{prod.title}}</h3>
                <h4 class="product-price">R{{prod.price}}.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script>
  export default {
    computed: {
      products() {
        return this.$store.state.products;
      },
    },
    components: {
      // singleProduct,
    },
    data() {
      return {
        name: "app",
      };
    },
    mounted() {
      this.$store.dispatch("getProducts");
    },
  };
  
  
  
  
  
  
  // new Ribbons({
  //   colorSaturation: "60%",
  //   colorBrightness: "50%",
  //   colorAlpha: 0.5,
  //   colorCycleSpeed : 5,
  //   verticalPosition : "random",
  //   horizontalSpeed : 200,
  //   ribbonCount: 3,
  //   strokeSize: 0,
  //   parallaxAmount : -0.2,
  //   animateSections : true,
  // });
  </script>
  
  <style scoped>
  
  h1 {
  
    color: #fff;
    font-weight: 500;
    text-align: center;
  }





  
  .section-products .header {
      margin-bottom: 50px;
  }
  
  .section-products .header h3 {
      font-size: 1rem;
    color: #fe302f;
    font-weight: 500;
  }
  
  .section-products .header h2 {
      font-size: 2.2rem;
    font-weight: 400;
    color: #444444;
  }
  
  a,
  a:hover {
      text-decoration: none;
    color: inherit;
  }
  
  .section-products .single-product {
      margin-bottom: 26px;
  }
  
  .section-products .single-product .part-1 {
      position: relative;
    height: 290px;
    max-height: 290px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  
  .section-products .single-product .part-1::before {
      position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.3s;
  }
  
  .section-products .single-product:hover .part-1::before {
      transform: scale(1.2, 1.2) rotate(5deg);
  }
  
  .section-products #product-1 .part-1::before {
      background: #fff no-repeat center;
    background-size: cover;
    transition: all 0.3s;
  }
  
  .section-products .single-product .part-1 .discount,
  .section-products .single-product .part-1 .new {
      position: absolute;
    top: 15px;
    left: 20px;
    color: #ffffff;
    background-color: #fe302f;
    padding: 2px 8px;
    text-transform: uppercase;
    font-size: 0.85rem;
  }
  
  .section-products .single-product .part-1 .new {
      left: 0;
    background-color: #444444;
  }
  
  .section-products .single-product .part-1 ul {
      position: absolute;
    bottom: -41px;
    /* left: 20px; */
    margin: 0;
    padding: 0;
    list-style: none;
    opacity: 0;
    transition: bottom 0.5s, opacity 0.5s;
  }
  
  .section-products .single-product:hover .part-1 ul {
      bottom: 30px;
    opacity: 1;
  }
  
  .section-products .single-product .part-1 ul li {
      display: inline-block;
    margin-right: 4px;
  }
  
  .section-products .single-product .part-1 ul li a {
      display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #bbb;
    color: #444444;
    text-align: center;
    box-shadow: 0 2px 20px rgb(50 50 50 / 10%);
    transition: color 0.2s;
  }
  
  .section-products .single-product .part-1 ul li a:hover {
      color: #fe302f;
  }
  
  .section-products .single-product .part-2 .product-title {
      font-size: 1rem;
  }
  
  .section-products .single-product .part-2 h4 {
      display: inline-block;
    font-size: 1rem;
  }
  
  .section-products .single-product .part-2 .product-old-price {
      position: relative;
    padding: 0 7px;
    margin-right: 2px;
    opacity: 0.6;
  }
  
  .section-products .single-product .part-2 .product-old-price::after {
      position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #444444;
    transform: translateY(-50%);
  }
  
  #product-1{
      width: 20rem;
      height: 20rem;
      margin-bottom: 100px;
  }
  
  .card-img-top{
      width: 19rem;
      height: 19rem;
      object-fit: cover;
  }
  
  .part-2{
      background-color: #fff;
      padding: 15px;
      margin-bottom: 1000px;
  }
  
 
  
  .card-body{
      padding: 0;
  }
  </style>
  