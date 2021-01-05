<template>
  <v-app>
    <v-content>
      <div class="wrapper">
              <div class="top-bar">
                <v-container class="search">
                  <v-row>
                    <v-col cols="12" md="3" sm="10" offset-md="9">
                      <v-text-field label="Shakisha" prepend-inner-icon="search"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            <div class="shopping-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#fff">
                <path d="M3.44 2l-.439-2h17.994l-.439 2h-17.116zm-1.44 3l-.439-2h20.879l-.44
                2h-20zm10.099 10.716l.004.283h-5.939l-.048-.292c-.133-.779-.177-1.224.582-1.43.842-.227 
                1.684-.429 1.168-1.289-1.627-2.546-.849-3.99.634-3.99 1.454 0 2.516 1.39 1.355 3.99-.348.854.5
                1.056 1.401 1.289.801.208.834.655.843 1.439zm6.628-4.716h-4.784l-.028 
                1h4.675l.137-1zm.273-2h-5l-.028.999h4.892l.136-.999zm-.548 4h-4.566l-.029.999h4.459l.136-.999zm-.273 
                2h-4.351l-.028.999h4.241l.138-.999zm5.821 3h-24l2 6h20l2-6zm-20.625-2l-1.085-8.001h19.411l-1.119 
                8.001h2.021l1.397-10h-24l1.356 10h2.019z"/>
              </svg>
            </div>

            <div class="social-icons">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="#fff">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 
                          5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 
                          0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 
                          1.064-3.077 3.461-3.077h2.539v3z"/>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="#fff">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 
                          1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 
                          4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 
                          0-3.204.013-3.583.07-4.849.149-3.227 
                          1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 
                          0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0
                          3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0
                          3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 
                          0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0
                          5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 
                          6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 
                          1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441
                          1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.twitter.com/login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="#fff">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 
                          0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 
                          4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 
                          1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 
                          1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 
                          1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 
                          6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 
                          2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 
                          1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/>
                        </svg>
                      </a>
                    </li>

                    <li>

                      <a href="https://www.pinterest.com/login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="#fff">
                          <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 
                          7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 
                          1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 
                          1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 
                          2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414
                          0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 
                          1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 
                          7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 
                          7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 
                          1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" 
                          fill-rule="evenodd" clip-rule="evenodd"/>
                        </svg>
                      </a>
                    </li>
                  </ul>
            </div>
     
        <div class="hero">
          <div class="desc">
            <h1>YANGE APP</h1>
            <p>Yange ni urubuga ruhuza abantu bataye ndetse 
                nabatoye ibyangombwa(amakarita)
        
                Rufasha kuba umuntu wataye ikarita ye
                   runaka yabasha kuyirangisha ndetse 
                     ikanafasha umuntu watoye ikarita 
              iyo ariyo yose kubona uburyo bwo kuyiranga. </p>
            <!--   <span> <img src="real.png" class="play-btn" alt=""> Watch Video </span> -->
            <router-link v-for="link in links" :key="link.text" router :to="link.route">
                    <button>{{link.text}}</button>
            </router-link>
          </div>
          <div class="cards">
              <img src="card.png" alt="">
              <!-- <v-img src="card.png"></v-img> -->
              <!-- <small><b>Powered by <a href="">Code Swamp</a></b></small> -->
          </div>    
        </div>
        <div class="powered">
          <small><b>Powered by <a href="">Code Swamp</a></b></small>
        </div>
        
      </div>
    </v-content>
  </v-app>
</template>

<style scoped>
  /* GENERAL STYLES */
  template{
    margin: 0;
    padding: 0;
    font-family: 'Didact Gothic', sans-serif;
  }
  /* END GENERAL STYLES */

  /* GENERAL CODE STYLES */
  .wrapper{
    height: 100vh;
  }
  /* END GENERAL STYELS */

  /* STYLES FOR TOP BAR */
  .top-bar{
    width: 80%;
    height: 50px;
    margin: 3px auto;
  }
  a{
    text-decoration: none;
  }
  /* END TOP BAR STYLES */

  /* STYLES FOR TOP-BAR SEARCH PART */
  /* .search-box{
    width: 20%;
    float: right;
  }
  .input-search{
    margin: 11px auto;
    display: inline-flex;
    border-bottom: 1px solid #2c97e4;
  }

  .input-search input{
    float: right;
    padding: 5px;
    box-shadow: none;
    outline: none;
    border: 0;
    background: transparent;
  }

  .search-icon .fa{
    color:#2c97e4 ;
  } */
  /* END SEARCH PART STYLES */

  /* STYLEYS FOR BOTH DESCRIPTIONS */
  .hero{
     width: 80%;
     height: 80%;
     margin: 0 auto;
     position: relative;
  }
  /* END BOTH DESCRIPTIONS STYYLES  */

  /* STYLES FOR DESCRIPTON PARAGRAPH */
  .desc{
     width: 40%;
     height: 100%;
     float: right;
  }
  .desc h1{
    margin: 100px 0 50px 70px;
    line-height: 40px;
  } 
  .desc p{
    padding-left: 20px;
    line-height: 25px;
  }

  .desc .play-btn{
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 30px 0 0px;
    vertical-align: middle;
    box-shadow:0 0 16px 2px rgba(44,156,228,0.7);
  }
  button{
    width: 150px;
    height: 40px;
    border-radius: 10%;
    cursor: pointer;
    margin: 50px 30px 0px 0px;
    outline: none;
    background-color: #0F658C;
    color:white;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  }
  /* END DESCRIPTON PARAGRAPH STYLES *
  
  /* STYLES FOR DESCRIPTION IMAGE */
  .cards{
    width: 50%;
    height: 100%;
    float: left;
    text-align: center;
  }

  .cards img{
    width: 90%;
    margin-top: 35px;
  /*   margin: 100px auto; */
  }
  /* END DESCRIPTION IMAGE STYLES */

  /* SHOPING BAG STYLES */
  .shopping-box{
    /* padding-top: 10px !important; */
    width: 150px;
    height: 150px;
    right: 0;
    top: -20px;
    position: absolute;
    background-image: linear-gradient(#0F658C,#d7e6fa);
    border-radius:0 0 60px 240px;
  }
  .shopping-box svg{
    font-size: 25px;
    color:#fff;
    bottom: 60px;
    right: 40px;
    cursor: pointer;
    position: absolute;
  } 

  /* .shopping-box1{
    width: 150px;
     height: 100px;
     right: 0;
     top: 200px;
     position: absolute;
     background-image: linear-gradient(#0F658C,#d7e6fa);
     border-radius:0 0 60px 240px;
     }
  .shopping-box .fa{
      font-size: 25px;
      color:#fff;
      bottom: 60px;
      right: 70px;
      cursor: pointer;
      position: absolute;
      z-index: 1;
  }  */
  /* END SHOPING BAG STYLES */

  /* STYLES FOR SIDE ICONS */
  .social-icons{
    width: 200px;
    height: 300px;
    left: -70px;
    top: 150px;
    position: absolute;
    border-top-right-radius:275px 309px;
    border-bottom-right-radius:328px 627px;
    border-bottom-left-radius:108px 345px;
    background-image:linear-gradient(#0F658C,#d7e6fa);
  }  

  .social-icons ul{
    display: block;
    margin-top: 105px;
    margin-left: 75px;
  }
  .social-icons ul li{
    list-style: none;
    margin-top: 25px;
    cursor: pointer;
  }

  /* .social-icons ul li svg{
    font-size:22px ;
    cursor: pointer;
    z-index: 1;
    color:#fff !important;
  } */
  /* END SIDE ICONS STYLES */

  /* STYLES FOR THE ED LINE */
  .wrapper small{
    margin-left:210px ;
  }
  .wrapper small b{
    margin-right: 50px;
  }
  /* END STYLES FOR END LINE */

  /* MAKING THE PAGE RESPONSIVE */
  @media screen and (min-width: 600px) and (max-width: 1340px) {
    .cards{
      display: none;
    }
    .desc{
      width: 90%;
      font-size: 20px;
      margin-left: 5px;
    }
    /* .cards{
      position: absolute;
      z-index: -100;
      top: 0;
      left: 0;
    } */
    .shopping-box{    
      width: 150px;
      height: 150px;
      /* right: 0; */
      right: 10px !important;
      position: absolute;
      background-image: linear-gradient(#0F658C,#d7e6fa);
      border-radius:0 0 60px 240px;

    }
    .search{
      width: 300px;
    }
  }
  /* END RESPONSIVE STYLES */
</style>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    links: [
      {text: 'RANGISHA', route: '/Rangisha'},
      {text: 'RANGA', route: '/Ranga'},
    ],
    icons: [
      {icon: 'fas fa-home', route: '/'},
    ]
  })
}
</script>