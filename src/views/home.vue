<script>

export default {

    data(){
        return {
          window: "work",
          activateModal: false,
        }
    },
    components: {
    },
    props: {

    },
    methods: {
      OpenModal(){
        this.activateModal = true;
        document.title = 'contact';
      },
      CloseModal(){
        this.activateModal = false;
        document.title = 'portfolio';
      },
      ChangeWindow(_name){
        // if(_name == "about"){
        //   document.title = "about me";
        // } else if(_name == "work"){
        //   document.title = "my work";
        // }
        this.$router.push('/' + _name);
      }
    },
    created() {
      document.title = "portfolio";
    },
    mounted(){

    },
    watch: {
    
    },

}
</script>

<template>

  <!-- <div id="mobile" style="width: 80%; margin-left: 10%;">
    <h1 style="color: white;">Mobile view coming soon...</h1>
     <div style=" cursor: pointer;" @click="ChangeWindow('about')"><h2 style="text-decoration: underline; font-size: 4rem; text-align: center;">check out my about me page:</h2></div>
  </div> -->
  <div id="viewContainer">
    <!-- <div id="gradient"></div> -->
    <div id="wrapper">
      <div id="header">
        <h1>Jonas Werner</h1>
        <div id="headerNav">
          <button class="navBtn" @click="ChangeWindow('about')">about me</button>
          <button class="navBtn" @click="ChangeWindow('work')">my work</button>
          <button class="navBtn" @click="ChangeWindow('photo')">photography</button>
          <button class="navBtn" @click="OpenModal()" :class="{ activeBtnClass: activateModal }">contact</button>
        </div>

      </div>
      <div id="centerContent">
        <p>An independent web developer</p>
        <p>I am a self-taught software engineer based in Leipzig, Germany. I specialized in Vue Js / Web development. </p>

        
      </div>
    </div>
    <div id="coffee"> 

      <div class="steam" id="steam1"> </div>
      <div class="steam" id="steam2"> </div>
      <div class="steam" id="steam3"> </div>
      <div class="steam" id="steam4"> </div>

      <div id="cup">
        <div id="cup-body">
          <div id="cup-shade"></div>
        </div>
          <div id="cup-handle"></div>
        </div>

        <div id="saucer"></div>

        <div id="shadow"></div>

    </div>

    <div id="myModal" class="modal" v-if="activateModal == true" v-on:click.self="CloseModal()">

      <!-- Modal content -->
      <div class="modal-content">
       

        <div id="contactCard">
          <div class="close" @click="CloseModal()">&times;</div>
          <h1 class="contactHeader">Jonas Werner</h1><br>

          <div id="contactCardDivWrapper">

            <div class="contactCardDiv">
              <img src="../../src/assets/pngs/email.png">
              <p><a href="mailto:dev.jonx.eu@gmail.com" target="_blank" style="text-decoration: none;"><b>mail:</b></a> dev.jonx.eu@gmail.com</p>
            </div>

            <div class="contactCardDiv">
              <img src="../../src/assets/pngs/telephone.png">
              <p><a href="tel:015120686034" target="_blank" style="text-decoration: none;"><b>phone:</b></a> 0151-20686034</p>
            </div>

            <div class="contactCardDiv">
              <img src="../../src/assets/pngs/link.png">
              <p><a href="https://www.jonx.dev" style="text-decoration: none;"><b>web:</b></a> www.jonx.dev</p>
            </div>

            <div class="contactCardDiv">
              <img src="../../src/assets/pngs/location.png">
              <p><b>city :</b> Leipzig, Germany</p>
            </div>

          </div>

          <div id="contactCardLogoWrapper">
              <div class="contentCardLogo">
                <a href="https://www.instagram.com/jonx.dev/" target="_blank"><img src="../../src/assets/pngs/instagram.png" style="width: 56px;"></a>
              </div>

              <div class="contentCardLogo">
                <a href="https://github.com/Dojagames" target="_blank"><img src="../../src/assets/pngs/github.png" style="width: 56px;"></a>
              </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
  #viewContainer{
    width: 100vw;
    height: 100vh;
  }

  #wrapper{
    min-width: 700px;
    width: 80%;
    height: 100%;


    /* background-color: red; */
    position: absolute;
    inset: 0;
    margin: auto;
  }
    h1{
      color: black;
      text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.233);
      font-size: 3.5rem;
      margin: 0;
      text-transform: uppercase;
    }

    #header{
      margin-top: 20px;
      height: 100px;
      display: flex;
      position: relative;
      align-items: center;
    }


    #headerNav {
      position: absolute;
      right: 10px;
      height: fit-content;
      width: fit-content;
      display: flex;
      flex-wrap: nowrap;
    }

    .navBtn {
      color: #FFF;
      outline: none;
      background-color: transparent;
      border: 3px solid white;
      border-radius: 6px;
      padding: 5px;
      margin: 5px;

      min-height: 50px;
      aspect-ratio: 1.76;
      font-size: large;
      z-index: 1000;
      transition: all .05s;
    }

    .navBtn:hover{
      cursor: pointer;
    }

    .navBtn:hover{
      border-color: #19F6E8;
      color: rgb(0, 255, 200);
      transform: scale(110%);
    }

    .activeBtnClass{
      border-color: #19F6E8;
      color: rgb(0, 255, 200);
    }

  #centerContent{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 10px;
  }

  #centerContent p{
    font-size: 4.8rem;
    line-height: 120%;
    font-weight: bolder;
    color: rgba(255, 255, 255, 0.95);
  }



  .modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: hidden; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    background-color: transparent;
    margin: auto; /* 15% from the top and centered */
    padding: 0;
    border-radius: 6px;
    width: fit-content;
    height: fit-content;
  }

  /* The Close Button */
  .close {
    color: #aaa;
    position: absolute;
    right: 10px;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }






  #mobile{
    display: none;
  }






  #contactCard{
    width: fit-content;
    height: fit-content;
    background: rgb(20,20,20);
    border-radius: 12px;
    -webkit-box-shadow: 0px 0px 8px 8px rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 8px 8px rgba(255, 255, 255, 0.1);
    padding: 1rem 1.5rem;
  }


  #contactCardDivWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 38px;

  }
  .contactCardDiv{
    display:inline-flex;
    padding: 10px;

    border-radius: 6px;
    width: 250px;
    height: 20px;
    margin-top: 30px;

    background-color: #ffffff28;
  }

  .contactCardDiv p{
    margin: 0;
    color: white;
  }

  .contactCardDiv b {
    color: #19F6E8;
  }

  .contactCardDiv img{
    margin-right: 10px;
    width: 20px;
  }


  #contactCardLogoWrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }


.contactHeader {
  margin-top: 35px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  outline: 1px solid #19F6E8;
  display: inline-block;
  padding: 1rem 3rem;

  text-transform: uppercase;
  font-size: 2em;
  color: white;
  font-weight: normal;
  line-height: 32px;
  letter-spacing: 4px;
  width: fit-content;
}






#gradient{
  width: 100%;
  height: 25%;
  position: fixed;
  left: 0;
  top: 0;
  background: linear-gradient(180deg, rgba(0,0,0,.8) 0%, rgba(0,0,0,0) 100%);
}









#coffee{
    position: fixed;
    transform: scale(55%);
    bottom: 20px;
    right: 10px;
    opacity: .45;
  }

  #cup {
    z-index: 1;
  }

  #cup-body {
    position: absolute;
    height: 200px;
    width: 300px;
    border-radius: 0 0 150px 150px;
    background-color: #fff;
    margin: auto;
    display: inline-block;
    overflow: hidden;
    z-index: 1;
  }

  #cup-shade {
    position: relative;
    height: 320px;
    width: 200px;
    background-color: #e0e0e0;
    display: inline-block;
    margin-left: 44%;
    margin-top: -3px;
    transform: rotate(55deg);
    z-index: 1;
  }

  #cup-handle {
    position: relative;
    height: 75px;
    width: 80px;
    border-radius: 0 150px 150px 0;
    border: 15px solid #F3F3F3;
    margin-bottom: 95px;
    margin-left: 250px;
    display: inline-block;
    z-index: 0;
  }

  #saucer {
    position: absolute;
    height: 30px;
    width: 300px;
    border-radius: 0 0 100px 100px;
    background-color: #F9F9F9;
    margin-top: -32px;
    margin-left: 5px;
    z-index: 2;
  }

  #shadow {
    height: 10px;
    width: 300px;
    border-radius: 50%;
    margin-top: -5px;
    margin-left: 6px;
    background-color: #00000060;
  }

  .steam {
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-color: #fff;
    margin-top: -75px;
    margin-left: 75px;
    z-index: 0;
    opacity: 0;
  }

  #steam1 {
    -webkit-animation: steam1 4s ease-out infinite;
    animation: steam1 4s ease-out infinite;
  }

  #steam2 {
    -webkit-animation: steam2 4s ease-out 0.5s infinite;
    animation: steam2 4s ease-out 0.5s infinite;
  }

  #steam3 {
    -webkit-animation: steam1 4s ease-out 1s infinite;
    animation: steam1 4s ease-out 1s infinite;
  }


  #steam4 {
    -webkit-animation: steam2 4s ease-out 1.5s infinite;
    animation: steam2 4s ease-out 1.5s infinite;
  }

  @-webkit-keyframes steam1 {
    0% {transform: translateY(0) translateX(0) scale(0.25); opacity: 0.2;}
    100% {transform: translateY(-200px) translateX(-20px) scale(1); opacity: 0;}
  }

  @keyframes steam1 {
    0% {transform: translateY(0) translateX(0) scale(0.25); opacity: 0.2;}
    100% {transform: translateY(-200px) translateX(-20px) scale(1); opacity: 0;}
  }

  @-webkit-keyframes steam2 {
    0% {transform: translateY(0) translateX(0) scale(0.25); opacity: 0.2;}
    100% {transform: translateY(-200px) translateX(20px) scale(1); opacity: 0;}
  }

  @keyframes steam2 {
    0% {transform: translateY(0) translateX(0) scale(0.25); opacity: 0.2;}
    100% {transform: translateY(-200px) translateX(20px) scale(1); opacity: 0;}
  }






  @media only screen and (min-width: 2400px) {
    #wrapper{
      width: 60%;
    }
  }

  @media only screen and (orientation: portrait) {
    /*TODO: Contact Panel, Photo on mobile, work on mobile*/
    html, body {
      width: 100vw;
      height: 100vh;
    }
    h1{
      margin-top: 10px;
      margin-bottom: 20px;
      font-size: 5rem;
      width: 100vw;
      text-align: center;
      position: relative;
    }

    #wrapper{
      width: 90%;
      margin-left: 5%;
    }

    #header{
      display: flex;
      flex-direction: column;
    }

    #headerNav {
      position: relative;
      height: fit-content;
      justify-content: space-around;
      display: flex;
      left:0;
      width: 100%;
    }

    .navBtn {
      margin: 0 10px;
      font-size: 2rem;
      width: 20vw;
      height: fit-content;
      text-wrap: nowrap;
    }

    #centerContent {
      margin-top: 50px;
    }

    #centerContent p{
      font-size: 3rem;
      color: rgba(255, 255, 255, 1);

      line-height:normal;
      font-weight: bold;
    }
  }
  body{
    overflow-y: hidden;
  }
</style>