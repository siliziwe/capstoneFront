<template>
    <section id="contact">
  
    <h1 class="text-dark">Contact</h1>
  
    <div class="contact-wrapper">
  
    <!-- Left contact page -->
  
      <form id="contact-form" class="form-horizontal" role="form">
  
        <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required>
          </div>
        </div>
  
        <div class="form-group">
        <div class="col-sm-12">
            <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required>
        </div>
        </div>

        <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
            <i class="bi bi-airplane"></i><span class="send-text">SEND</span>
    </div>

        </button>

    </form>

    <!-- Left contact page -->

        <div class="direct-contact-container">

        <ul class="contact-list">
            <li class="list-item"><i class="bi bi-geo-alt fa-2x"><span class="contact-text place">City, State</span></i></li>

            <li class="list-item"><i class="bi bi-phone fa-2x"><span class="contact-text phone"><router-link to="tel:1-212-555-5555" title="Give me a call">(313) 555-5298</router-link></span></i></li>

            <li class="list-item"><i class="bi bi-envelope fa-2x"><span class="contact-text gmail"><router-link to="mailto:#" title="Send me an email">tommorowtech@gmail.com</router-link></span></i></li>

        </ul>

          <hr>
          <ul class="social-media-list">
            <li><router-link to="#" target="_blank" class="contact-icon">
              <i class="bi bi-github" aria-hidden="true"></i></router-link>
            </li>
            <li><router-link to="#" target="_blank" class="contact-icon">
              <i class="bi bi-facebook" aria-hidden="true"></i></router-link>
            </li>
            <li><router-link to="#" target="_blank" class="contact-icon">
              <i class="bi bi-twitter" aria-hidden="true"></i></router-link>
            </li>
            <li><router-link to="#" target="_blank" class="contact-icon">
              <i class="bi bi-instagram" aria-hidden="true"></i></router-link>
            </li>
          </ul>
          <hr>
  
          <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
  
        </div>
  
    </div>
  
  </section>
  
  
  </template>
  
  
  
  <script>
  
  </script>
  
  
  
  <style scoped>
  
  h1{
    color: #fff;
    font-weight: 500;
    text-align: center;
  }
  
  
  #contact {
    width: 100%;
    height: 100%;
  }
  
  .section-header {
    text-align: center;
    margin: 0 auto;
    padding: 40px 0;
    font: 300 60px 'Poppins', sans-serif;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 6px;
  }
  
  .contact-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    max-width: 840px;
  }
  
  /* Left contact page */
  .form-horizontal {
    /*float: left;*/
    max-width: 400px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  .form-control, 
  textarea {
    max-width: 400px;
    background-color: #ffffff;
    color: rgb(1, 1, 1);
    letter-spacing: 1px;
  }
  
  .send-button {
    margin-top: 15px;
    height: 34px;
    width: 400px;
    overflow: hidden;
    transition: all .2s ease-in-out;
    background-color: rgb(35, 35, 35);
  }
  
  .alt-send-button {
    width: 400px;
    height: 34px;
    transition: all .2s ease-in-out;
    background-color: rgb(0, 0, 0);
  }
  
  .send-text {
    display: block;
    margin-top: 10px;
    font: 700 12px 'Poppins', sans-serif;
    letter-spacing: 2px;
  }
  
  .alt-send-button:hover {
    transform: translate3d(0px, -29px, 0px);
  }
  
  /* Begin Right Contact Page */
  .direct-contact-container {
    max-width: 400px;
  }
  
  /* Location, Phone, Email Section */
  .contact-list {
    list-style-type: none;
    margin-left: -30px;
    padding-right: 20px;
  }
  
  .list-item {
    line-height: 4;
    color: rgb(14, 14, 14);
  }
  
  .contact-text {
    font: 300 18px 'Poppins', sans-serif;
    letter-spacing: 1.9px;
    color: rgb(10, 10, 10);
  }
  
  .place {
    margin-left: 62px;
  }
  
  .phone {
    margin-left: 56px;
  }
  
  .gmail {
    margin-left: 53px;
  }
  
  .contact-text a {
    color: rgb(8, 8, 8);
    text-decoration: none;
    transition-duration: 0.2s;
  }
  
  .contact-text a:hover {
    color: rgb(14, 112, 232);
    text-decoration: none;
  }
  
  
  /* Social Media Icons */
  .social-media-list {
    position: relative;
    font-size: 22px;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
  
  .social-media-list li a {
    color: #fff;
  }
  
  .social-media-list li {
    position: relative; 
    display: inline-block;
    height: 60px;
    width: 60px;
    margin: 10px 3px;
    line-height: 60px;
    border-radius: 50%;
    color: #fff;
    background-color: #3a47be;
    cursor: pointer; 
    transition: all .2s ease-in-out;
  }
  
  .social-media-list li:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 0 1px #fff;
    transition: all .2s ease-in-out;
  }
  
  .social-media-list li:hover {
    background-color: #fff; 
  }
  
  .social-media-list li:hover:after {
    opacity: 1;  
    transform: scale(1.12);
    transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
  }
  
  .social-media-list li:hover a {
    color: #000;
  }
  
  .copyright {
    font: 200 14px 'Poppins', sans-serif;
    color: #fff;
    letter-spacing: 1px;
    text-align: center;
  }
  
  hr {
    border-color: rgba(255,255,255,.6);
  }
  
  /* Begin Media Queries*/
  @media screen and (max-width: 850px) {
    .contact-wrapper {
      display: flex;
      flex-direction: column;
    }
    .direct-contact-container, .form-horizontal {
      margin: 0 auto;
    }  
    
    .direct-contact-container {
      margin-top: 60px;
      max-width: 300px;
    }    
    .social-media-list li {
      height: 60px;
      width: 60px;
      line-height: 60px;
    }
    .social-media-list li:after {
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }
  
  @media screen and (max-width: 569px) {
  
    .direct-contact-container, .form-wrapper {
      float: none;
      margin: 0 auto;
    }  
    .form-control, textarea {
      
      margin: 0 auto;
    }
   
    
    .name, .email, textarea {
      width: 280px;
    } 
    
    .direct-contact-container {
      margin-top: 60px;
      max-width: 280px;
    }  
    .social-media-list {
      left: 0;
    }
    .social-media-list li {
      height: 55px;
      width: 55px;
      line-height: 55px;
      font-size: 2rem;
    }
    .social-media-list li:after {
      width: 55px;
      height: 55px;
      line-height: 55px;
    }
    
  }
  
  @media screen and (max-width: 410px) {
    .send-button {
      width: 99%;
    }
  }
  </style>