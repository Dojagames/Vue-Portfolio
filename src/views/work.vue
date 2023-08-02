<script>
export default {

    data(){
        return {
            pVaultImgs: ["../../src/assets/screenshots/pvault-1.png", "../../src/assets/screenshots/pvault-2.png", "../../src/assets/screenshots/pvault-3.png"],
            pVaultSelected: 0,

            ccImgs: ["../../src/assets/screenshots/cc-1.png", "../../src/assets/screenshots/cc-2.png", "../../src/assets/screenshots/cc-3.png"],
            ccSelected: 0,

            deskLampImgs: ["../../src/assets/screenshots/desklamp-1.jpg", "../../src/assets/screenshots/desklamp-2.jpg", "../../src/assets/screenshots/desklamp-3.jpg"],
            deskLampSelected: 0,

            ArminImgs: ["../../src/assets/screenshots/Armin-1.png", "../../src/assets/screenshots/Armin-2.png", "../../src/assets/screenshots/Armin-3.png"],
            ArminSelected: 0,

            cc2Imgs: ["../../src/assets/screenshots/cc2-1.jpg", "../../src/assets/screenshots/cc2-2.jpg", "../../src/assets/screenshots/cc2-3.jpg"],
            cc2Selected: 0,

            PwImgs: ["../../src/assets/screenshots/PW-1.png", "../../src/assets/screenshots/PW-2.png", "../../src/assets/screenshots/PW-3.png"],
            PwSelected: 0,

            currentModal: null,
            activateModal: false,
        }
    },
    components: {
        
    },
    props: {
        
    },
    methods: {
        changeImg(_name, _dir){
            if(_dir == 'r'){
                if(eval("this." + _name + "Selected") >= eval("this." + _name + "Imgs.length -1")){eval("this." + _name + "Selected  = 0")} else {
                    eval("this." + _name + "Selected++");
                }
            } else {
                if(eval("this." + _name + "Selected <= 0")){ eval("this." + _name + "Selected =" + "this." + _name + "Imgs.length -1") } else { 
                    eval("this." + _name + "Selected--");
                }
            }
        },
        OpenTab(_url){
            alert;
            window.open(url, _url).focus();
        },
        GoHome(){
            this.$router.push('/');
        },

    },
    created() {
        document.title = "my work";
    },
    mounted(){
        
    },
    watch: {
        
    },

}
</script>

<template>
    <div id="wrapper">
        <img  @click="GoHome()" id="home" src="../../src/assets/pngs/back.png" style="position: fixed; left: 40px; top: 30px; width: 48px" class="cyclebtn">

        <div class="tiles" id="currentlyworkingon">
            <h1>currently working on:</h1>

            <div class="projectwrapper">
                <div class="project">
                    <a href="https://github.com/Dojagames/Vue-PwManager" target="_blank" style="color: white; text-decoration: none;"><h2 class="linkText">P-Vault - VueJs Password Manager (2023)</h2></a>
                    <div class="imgcycler" style="display: flex; position: relative; left: 50%; transform: translateX(-50%); width: fit-content; align-items: center;">
                        <h2 style="margin-right: 20px;" class="cyclebtn" @click="changeImg('pVault', 'l')">&lt;</h2>
                        <a href="https://github.com/Dojagames/Vue-PwManager" target="_blank" class="imgBox"><img v-bind:src="pVaultImgs[pVaultSelected]"></a>
                        <h2 style="margin-left: 20px;" class="cyclebtn" @click="changeImg('pVault', 'r')">&gt;</h2>
                    </div>
                    <h3>todos: electron app, browserplugin, redesign / fine tuning</h3>
                </div>

                <div class="project">
                    <a href="https://github.com/Dojagames/Cryptchat" target="_blank" style="color: white; text-decoration: none;"><h2 class="linkText">CryptChat - Socket.io / VueJs Chat App (2023)</h2></a>
                    <div class="imgcycler" style="display: flex; position: relative; left: 50%; transform: translateX(-50%); width: fit-content; align-items: center;">
                        <h2 style="margin-right: 20px;" class="cyclebtn" @click="changeImg('cc', 'l')">&lt;</h2>
                        <a href="https://github.com/Dojagames/Cryptchat" target="_blank" class="imgBox"><img v-bind:src="ccImgs[ccSelected]"></a>
                        <h2 style="margin-left: 20px;" class="cyclebtn" @click="changeImg('cc', 'r')">&gt;</h2>
                    </div>
                    <h3>todo: backend, ui polishing<br> currently functioning as whatsapp backup viewer</h3>
                </div>
            </div>
        </div>



        <div class="tiles" id="pastProjects">
            <h1>past projects:</h1>

            <div class="projectwrapper">
                <div class="project">
                    <a href="https://github.com/Dojagames/Desklamp" target="_blank" style="color: white; text-decoration: none;"><h2 class="linkText">DeskLamp - DIY desklamp with esp32 / c++ (2020)</h2></a>
                        <div class="imgcycler" style="display: flex; position: relative; left: 50%; transform: translateX(-50%); width: fit-content; align-items: center;">
                            <h2 style="margin-right: 20px;" class="cyclebtn" @click="changeImg('deskLamp', 'l')">&lt;</h2>
                            <a href="https://github.com/Dojagames/Desklamp" target="_blank" class="imgBox"><img v-bind:src="deskLampImgs[deskLampSelected]" class="cyclebtn"></a>
                            <h2 style="margin-left: 20px;" class="cyclebtn" @click="changeImg('deskLamp', 'r')">&gt;</h2>
                        </div>
                        <h3>3d design & electronics are DIY too</h3>
                </div>
            </div>

            <div class="projectwrapper">
                <div class="project">
                    <a href="https://github.com/Dojagames/Armin-Space-Adventure" target="_blank" style="color: white; text-decoration: none;"><h2 class="linkText">Armin Space Adventure - Unity Topdown Shooter (2021)</h2></a>
                        <div class="imgcycler" style="display: flex; position: relative; left: 50%; transform: translateX(-50%); width: fit-content; align-items: center;">
                            <h2 style="margin-right: 20px;" class="cyclebtn" @click="changeImg('Armin', 'l')">&lt;</h2>
                            <a href="https://github.com/Dojagames/Armin-Space-Adventure" target="_blank" class="imgBox"><img v-bind:src="ArminImgs[ArminSelected]"></a>
                            <h2 style="margin-left: 20px;" class="cyclebtn" @click="changeImg('Armin', 'r')">&gt;</h2>
                        </div>
                        <h3>as part of the coumputersience course in Highschool</h3>
                </div>
            </div>

            <div class="projectwrapper">
                <div class="project">
                    <a href="https://github.com/Dojagames/cryptchat-og" target="_blank" style="color: white; text-decoration: none;"><h2 class="linkText">CrytpChat v1.0 - Vanilla Js / Socket.io Chat app (2021)</h2></a>
                        <div class="imgcycler" style="display: flex; position: relative; left: 50%; transform: translateX(-50%); width: fit-content; align-items: center;">
                            <h2 style="margin-right: 20px;" class="cyclebtn" @click="changeImg('cc2', 'l')">&lt;</h2>
                            <a href="https://github.com/Dojagames/cryptchat-og" target="_blank" class="imgBox"><img v-bind:src="cc2Imgs[cc2Selected]"></a>
                            <h2 style="margin-left: 20px;" class="cyclebtn" @click="changeImg('cc2', 'r')">&gt;</h2>
                        </div>
                        <h3>functioning without persistancy. <br> oauth & sha-256</h3>
                </div>
            </div>

            <div class="projectwrapper">
                <div class="project">
                    <a href="https://github.com/Dojagames/PW-Manager" target="_blank" style="color: white; text-decoration: none;"><h2 class="linkText">PW-Manager - C# Password Manager (2022)</h2></a>
                        <div class="imgcycler" style="display: flex; position: relative; left: 50%; transform: translateX(-50%); width: fit-content; align-items: center;">
                            <h2 style="margin-right: 20px;" class="cyclebtn" @click="changeImg('Pw', 'l')">&lt;</h2>
                            <a href="https://github.com/Dojagames/PW-Manager" target="_blank" class="imgBox"><img v-bind:src="PwImgs[PwSelected]"></a>
                            <h2 style="margin-left: 20px;" class="cyclebtn" @click="changeImg('Pw', 'r')">&gt;</h2>
                        </div>
                        <h3>aes & self-written db</h3>
                </div>
            </div>
        </div>

        <div class="tiles">
            <h1>small projects:</h1>

            <div id="smallWrapper">
                <div class="smallproject">
                    <a href="https://github.com/Dojagames/Rollcon" target="_blank" style="color: white; text-decoration: none;"><h2>Rollcon</h2></a>
                </div>

                <div class="smallproject">
                    <a href="https://github.com/Dojagames/LichtbierRechner" target="_blank" style="color: white; text-decoration: none;"><h2>Lichtbier</h2></a>
                </div>

                <div class="smallproject">
                    <a href="https://github.com/Dojagames/Lampcon" target="_blank" style="color: white; text-decoration: none;"><h2>Desklamp app</h2></a>
                </div>

                <div class="smallproject">
                    <a href="https://github.com/Dojagames/Abiplaner" target="_blank" style="color: white; text-decoration: none;"><h2>Abiplaner</h2></a>
                </div>
            </div>
            
        </div>
    </div>




    <div id="moon">
        <div class="sky">
            <div class="moon">
                <div class="stars stars1">*</div>
                <div class="stars stars2">*</div>
                <div class="shooting-star"></div>
                <div class="mountains"></div>
                <div class="lake"></div>
            </div>
        </div> 
    </div>
</template>

<style scoped>

    h1 {
        color: white;
        text-align: center;
        font-size: 2.3rem;
        padding-top: 10px;
    }

    .tiles{
        background-color: rgba(0, 0, 0, 0.404);
        border-radius: 18px;

        width: 70%;
        min-width: 1200;
        height: fit-content;

        margin-top: 60px;

        margin-bottom: 60px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);

        color: white;
        
    }

    .projectwrapper{
        display: flex;
        flex-direction: column;
    }

    .project{
        text-align: center;
        background-color: #00000075;
        border-radius: 12px;
        margin: 20px;
        padding: 5px;
    }

    .project img{
        height: 405px;
        max-width: 1000px;
    }


    #smallWrapper{
        display: flex;
        flex-wrap:wrap ;
        justify-content: space-evenly;
        padding-bottom: 20px;
    }

    .smallproject{
        width: 40%;
        text-align: center;
        background-color: #00000075;
        border-radius: 12px;
        margin: 20px;
        padding: 5px;
    }

    .smallproject h2 {
        text-decoration: underline;
        cursor: pointer;
    }

    .imgBox{
        width: 1000px;
    }

    .cyclebtn{
        font-size: 2.5rem;
        -webkit-touch-callout: none; 
        -webkit-user-select: none; 
        -khtml-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
        user-select: none; 
    }
    
    .cyclebtn:hover{
        cursor: pointer;
    }

    .linkText{
        text-decoration: underline;
    }

    .linkText:hover{
        cursor: pointer;
    }






  /* art */


#moon{
    position: fixed;
    right: 30px;
    bottom: 20px;
    transform: scale(65%);
    opacity: .85;

    z-index: 2;
}

.sky {
  display: flex;
  height: 100%;
  position: relative;
}

.moon {
  margin: auto;
  width: 14em;
  height: 14em;
  border-radius: 50%;
  background-color: rgb(253, 153, 169);
  position: relative;
  box-shadow: 0 0 0 0.6em #2c394b50, 0 0 0 1.4em #1f293850, 0 0 0 2em #1c273550;
  -webkit-box-shadow: 0 0 0 0.6em #2c394b50, 0 0 0 1.4em #1f293850, 0 0 0 2em #1c273550;
}

.stars {
  position: absolute;
  top: -20%;
  right: -30%;
  bottom: 0;
  left: -30%;
  color: #404c5d;
  text-align: right;
  animation: shine 2s linear infinite;
}

.stars:before,
.stars:after {
  position: absolute;
  content: "*";
  color: #404c5d;
  z-index: 2;
}

.stars:before {
  top: 30%;
  right: -4%;
  animation: shine 2s linear infinite alternate-reverse;
}

.stars:after {
  top: 10%;
  right: 10%;
  animation: shine 1.5s linear infinite;
}

.stars2 {
  top: -5%;
  right: 40%;
  text-align: left;
  transform: rotate(-90deg);
}

.stars2:after {
  top: 5%;
  right: 20%;
}

.stars2:before {
  top: -10%;
  right: 40%;
}

.shooting-star {
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  width: .3em;
  height: .3em;
  animation: cometFlight 3s ease infinite;
}

.mountains {
  top: 50%;
  border-left: 8em solid transparent;
  border-right: 8em solid transparent;
  border-bottom: 8em solid #2c80e7;
  width: 0;
  height: 0;
  overflow: visible;
  position: relative;
}

.mountains:before,
.mountains:after {
  position: absolute;
  top: 0.65em;
  content: "";
}

.mountains:before {
  top: 5em;
  left: 2.5em;
  border-left: 3em solid transparent;
  border-right: 3em solid transparent;
  border-bottom: 3.5em solid #f1f1f1;
  z-index: 1;
}

.mountains:after {
  top: 2.2em;
  right: -1em;
  border-left: 5em solid transparent;
  border-right: 5em solid transparent;
  border-bottom: 6em solid #2e63a5;
}

.lake {
  position: absolute;
  right: 0;
  bottom: -15%;
  left: 0;
  background-color: #2ce7b9;
  border-radius: 50%;
  border: 2px solid transparent;
  animation: lakeMovement 2s linear infinite;
}

@keyframes cometFlight {
  0% {
    top: 0;
    right: -50%;
    opacity: 1;
  }
  100% {
    top: 100%;
    right: 60%;
    opacity: 0;
  }
}

@keyframes shine {
  0%,
  100% {
    color: #404c5d;
  }
  50% {
    color: #8e9399;
  }
}

@keyframes lakeMovement {
  0%,
  100% {
    box-shadow: -45px 5px 0 0 #2ce7b9, 45px 5px 0 0 #27b797, -25px 10px 0 0 #238676, 25px 10px 0 0 #238676, -5px 15px 0 0 #1f5a58, 5px 15px 0 0 #1f5a58, 0 20px 0 0 #1d4b4c, -20px 20px 0 0 #1b383f, 50px 20px 0 0 #1b383f, 0 25px 0 0 #1b383f;
    -webkit-box-shadow: -45px 5px 0 0 #2ce7b9, 45px 5px 0 0 #27b797, -25px 10px 0 0 #238676, 25px 10px 0 0 #238676, -5px 15px 0 0 #1f5a58, 5px 15px 0 0 #1f5a58, 0 20px 0 0 #1d4b4c, -20px 20px 0 0 #1b383f, 50px 20px 0 0 #1b383f, 0 25px 0 0 #1b383f;
  }
  50% {
    box-shadow: -55px 5px 0 0 #2ce7b9, 55px 5px 0 0 #27b797, -35px 10px 0 0 #238676, 35px 10px 0 0 #238676, -10px 15px 0 0 #1f5a58, 10px 15px 0 0 #1f5a58, 5px 20px 0 0 #1d4b4c, -15px 20px 0 0 #1b383f, 60px 20px 0 0 #1b383f, -10px 25px 0 0 #1b383f;
    -webkit-box-shadow: -55px 5px 0 0 #2ce7b9, 55px 5px 0 0 #27b797, -35px 10px 0 0 #238676, 35px 10px 0 0 #238676, -10px 15px 0 0 #1f5a58, 10px 15px 0 0 #1f5a58, 5px 20px 0 0 #1d4b4c, -15px 20px 0 0 #1b383f, 60px 20px 0 0 #1b383f, -10px 25px 0 0 #1b383f;
  }
}


@media only screen and (min-width: 2400px) {
    .tiles{
        width: 65%;
    }

    #moon {
        right: 60px;
        bottom: 40px;
        transform: scale(75%);
    }
}

@media only screen and (orientation: portrait){
    .project img{
        height: auto;
        max-height: 405px;
        max-width: 50%;
    }

    .imgBox {
        width: 100%;
        
    }

    #moon {
        transform: scale(50%);
        right: 0px;
        bottom: -10px;
    }
}

</style>