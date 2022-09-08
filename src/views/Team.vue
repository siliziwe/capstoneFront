<template>
    <div class="container shadow-lg">
        <div class="row mb-3 justify-content-center text-center mx-lg-5 m-5" id="row">
            <h2 class="text-dark text-center">Our Team</h2>
            <div class="col">
                <div class="card">
                    <div class="img"><img src="https://i.postimg.cc/t4qRtq0S/IMG-20220805-WA0007.jpg" alt="" height="90"></div>
                    <div class="info">
                    <span>Siliziwe Pani</span>
                    <p>Web Dev</p>
                    </div>
                    <a href="#">Get In Touch</a>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="img"><img src="https://i.postimg.cc/XvtW7nHs/Philani-3.jpg" alt="" height="90" width="90"></div>
                    <div class="info">
                    <span>Philani Mxathule</span>
                    <p>Web Dev</p>
                    </div>
                    <a href="#">Get In Touch</a>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="img"><img src="" alt="" height="90" width="90"></div>
                    <div class="info">
                    <span>Lunga Booi</span>
                    <p>Web Dev</p>
                    </div>
                    <a href="#">Get In Touch</a>
                </div>
            </div>
        </div>


        <div class="row mb-3 justify-content-center text-center mx-lg-5 m-5">
            <div class="col-md-4 mb-4 mb-md-0">
                <div class="card">
                    <div class="img"><img src="https://i.postimg.cc/5tnGMgTS/liam.png" alt="" height="90"></div>
                    <div class="info">
                    <span>Liam Angel</span>
                    <p>Web Dev</p>
                    </div>
                    <a href="#">Get In Touch</a>
                </div>
            </div>
            <div class="col-md-4 mb-4 mb-md-0">
                <div class="card">
                    <div class="img"><img src="https://i.postimg.cc/MHTSKX0f/Sibongile-1.jpg" alt="" height="90" width="90"></div>
                    <div class="info">
                    <span>Sibongile Rwayi</span>
                    <p>Web Dev</p>
                    </div>
                    <a href="#">Get In Touch</a>
                </div>
            </div>
            <div class="col-md-4 mb-4 mb-md-0">
                <div class="card">
                    <div class="img"><img src="" alt="" height="90" width="90"></div>
                    <div class="info">
                    <span>Yaseen Jattiem</span>
                    <p>Web Dev</p>
                    </div>
                    <a href="#">Get In Touch</a>
                </div>
            </div>
        </div>
    </div>
</template>



    <style scoped>


    #row{
        margin-left: 150px;
    }

    /* From uiverse.io by @benjimich */
    .card {
        width: 190px;
        height: 254px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #f2f2f3;
        border-radius: 12px;
        box-shadow: inset 5px 5px 10px #2c2c2c77,
                    inset -5px -5px 10px #ffffff7e;
    }

    .card .img {
        height: 100px;
        margin-top: 1.6em;
        aspect-ratio: 1;
        border-radius: 30%;
        background: #f2f2f3;
        margin-bottom: 0.4em;
        box-shadow: -5px -5px 8px #ffffff7a, 
                    5px 5px 8px #a9a9aa7a;
    }

    .card .info {
        text-align: center;
        margin-top: 0.4em;
        background: linear-gradient(120deg, rgb(45, 45, 45) 0%, rgb(12, 12, 12) 100%);
        background-clip: border-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .card .info > span {
        font-weight: bold;
        font-size: 1.2em;
    }

    .card a {
        margin-top: 1em;
        color: #fff;
        text-decoration: none;
        background: linear-gradient(90deg, rgba(0,194,255,1) 0%, rgb(0, 0, 0) 100%);
        padding: .5em 2em;
        border-radius: 0.7em;
    }

    .card a:active {
        box-shadow: inset 3px 3px 3px #0056ff,
                    inset -3px -3px 3px #00c2ff;
    }
    </style>