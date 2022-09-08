<template>
  <div class="container-fluid min-h-100">
    <div class="about-section">
      <div class="inner-container">
        <h1>About Us</h1>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
        </p>
        <div class="skills">
          <span>Web Design</span>
          <span>Photoshop & Illustrator</span>
          <span>Coding</span>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
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
  *{
    margin: 0;
    padding: 0;
    font-family: "Open Sans",sans-serif;
    box-sizing: border-box;
}

body{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
}

.about-section{
    background: url(https://i.postimg.cc/P5qDDxM3/ADAM-S-HAND.jpg) no-repeat;
    background-size: 50%;
    background-color: #fdfdfd;
    overflow: hidden;
    padding: 100px 0;
}

.inner-container{
    width: 55%;
    float: right;
    background-color: #fdfdfd;
    padding: 150px;
}

.inner-container h1{
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 900;
}

.text{
    font-size: 13px;
    color: #545454;
    line-height: 30px;
    text-align: justify;
    margin-bottom: 40px;
}

.skills{
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 13px;
}

@media screen and (max-width:1200px){
    .inner-container{
        padding: 80px;
    }
}

@media screen and (max-width:1000px){
    .about-section{
        background-size: 100%;
        padding: 100px 40px;
    }
    .inner-container{
        width: 100%;
    }
}

@media screen and (max-width:600px){
    .about-section{
        padding: 0;
    }
    .inner-container{
        padding: 60px;
    }
}
</style>