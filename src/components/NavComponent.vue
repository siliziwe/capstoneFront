<template>
    <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="https://i.postimg.cc/mZXR5cc9/NEWTECH-removebg-preview.png" height="100" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item text-white">
             <router-link class="text-decoration-none text-black" to="/">Home</router-link>
            </li>
             <li class="nav-item text-decoration-none">
               <router-link class="text-decoration-none text-black" to="/about">About</router-link>
            </li>
            <li class="nav-item text-decoration-none">
                <router-link class="text-decoration-none text-black" to="/products">Products</router-link>
             </li>
             <li class="nav-item text-decoration-none">
                <router-link class="text-decoration-none text-black" to="/admin">Admin</router-link>
             </li>
             <li class="nav-item text-decoration-none">
                <router-link class="text-decoration-none text-black" to="/team">Team</router-link>
             </li>
             <li class="nav-item text-decoration-none">
                <router-link class="text-decoration-none text-black" to="/contact">Contact</router-link>
             </li>
             <li class="nav-item text-decoration-none">
                <router-link class="text-decoration-none text-black" to="/">Login/Signup</router-link>
             </li>

          </ul>
        </div>
      </div>
    </nav>
    </div>
    <router-view/>
    </template>
    <style>
    .nav-item{
    position: relative;
    padding: 20px;
    font-size: larger;
    }
    .navbar-brand{
      font-style: italic;
    }
    .btn{
      color: white;
      border-color: white;
    }
    nav {
    position:fixed;
    width: 100%;
    top: 0;
    background-color: rgb(156, 173, 254);
    z-index:50;
    }
    </style>