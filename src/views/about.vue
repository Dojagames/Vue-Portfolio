<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        
    },
    components: {   
        
    },
    watch: {
        
    },
    mounted() {
        
    },
    created() {
        document.title = "about me";
    },
    methods: {
        GoHome(){
            this.$router.push('/');
        },
    }
}
</script>

<template>
    <img  @click="GoHome()" id="home" src="../../src/assets/pngs/back.png" style="position: fixed; left: 40px; top: 30px; width: 48px" class="clickable">

    <div id="wrapper">
        <h1 id="header">
            About Me
        </h1>


        <div class="aboutContainer leftBound" style="width: 100%;">
            <h1>Skills</h1>
            <div id="skillWrapper">
                <br>
                <div class="skills">
                    <div class="details">
                        <span>HTML/CSS</span>
                        <span>90%</span>
                    </div>
                    <div class="bar">
                        <div id="html-bar"></div>
                    </div>
                </div>
                <br>
                <div class="skills">
                    <div class="details">
                        <span>JS</span>
                        <span>75%</span>
                    </div>
                    <div class="bar">
                        <div id="js-bar"></div>
                    </div>
                </div>
                <br>
                <div class="skills">
                    <div class="details">
                        <span>Vue.js</span>
                        <span>75%</span>
                    </div>
                    <div class="bar">
                        <div id="vue-bar"></div>
                    </div>
                </div>
                <br>
                <div class="skills">
                    <div class="details">
                        <span>C#</span>
                        <span>65%</span>
                    </div>
                    <div class="bar">
                        <div id="cs-bar"></div>
                    </div>
                </div>
                <br>
                <div class="skills">
                    <div class="details">
                        <span>C++</span>
                        <span>35%</span>
                    </div>
                    <div class="bar">
                        <div id="cpp-bar"></div>
                    </div>
                </div>
                <br>
                <div class="skills">
                    <div class="details">
                        <span>Java</span>
                        <span>50%</span>
                    </div>
                    <div class="bar">
                        <div id="java-bar"></div>
                    </div>
                </div>

            </div>

            

            
        </div><br><br>

        <div class="aboutContainer rightBound">
            <h1>Developer journey</h1>
            <p class="aboutText">From a young age, I have been passionate about technology. Pursuing my dream of developing software, I completed an internship as a software developer at Funkwerk Kölleda in 2017. During this time, I began my journey as a developer by learning PHP. In 2019, I transitioned to C++ and microcontroller development using Arduino. The following year, I completed my first DIY project, a self-designed desk lamp.<br><br>
              While in 11th and 12th grade, I wrote a term paper on DIY smart home systems. Together with a classmate, we developed a smart home system featuring its own voice assistant and compatibility with commercial products. We also created custom gadgets, including weather stations, smart outlets, and lamps. My final project in my computer science class was a top-down shooter game developed with Unity and C#.<br><br>
              After high school, I collaborated with a friend to build a chat application with encryption in vanilla JavaScript. In 2021, I began studying Computer Science at the Ilmenau University of Technology, but I decided to leave college later that year for personal reasons. In 2022, I resumed my development journey with C#, creating a password manager and several small Windows applications. I then returned to web development, where I started rewriting the chat application.<br><br>
              In 2023, I used Vue.js to develop interfaces for my smart home system and created two web applications: another password manager and this portfolio page. Later that year, I developed three multiplayer games using JavaScript with Node.js, Socket.io, and Vue.js, along with a Spotify playlist editor utilizing the Spotify API, and a new backend for my chat application.<br><br>
              Since 2023, I have been employed at AbsoluteGPS, where I build internal tools such as a meeting scheduler and availability checker, which provides suggestions if conflicts arise. My most recent project is a cycling route planning tool.
           </p>
        </div><br><br>

        <div class="aboutContainer leftBound">
            <h1>Hobbies</h1>
            <p class="aboutText"> My hobbies include cycling, producing music, speedcubing, software development, and photography. I find cycling to be a fulfilling physical activity that allows me to enjoy nature and stay active. Producing music gives me a creative outlet, and speedcubing challenges my problem-solving skills.
            In my spare time, I engage in software development, finding satisfaction in creating digital solutions. Photography is a way for me to capture moments and express my artistic side. Additionally, I have an interest in philosophy, sociology, and psychology, which offer intellectual exploration into human existence and societal dynamics.
            These hobbies and interests contribute to my personal growth and provide opportunities for self-expression and learning. I find joy in pursuing these activities, and they help me strike a balance between physical, creative, and intellectual pursuits in life.</p>
    
        </div>

    </div>
</template>

<style scoped>
    
    h1{
        font-size: 3.5rem;
        color: white;
        margin: 0;
        padding: 0;
    }

    #header{
        text-align: center;
        font-size: 4.5rem;
        margin: 20px;
    }

    .clickable:hover{
        cursor: pointer;
    }

    #wrapper{
        width: 70%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .aboutContainer{
        margin-bottom: 50px;
        position: relative;
        width: 80%;
        /* background-color: rgba(255, 0, 0, 0.384); */
    }

    .aboutContainer h1{
        font-style:normal;
        text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.267);
    }

    .aboutText{
        font-size: 1.5rem;
        margin-top: 10px;
        color: white;
    }


    .rightBound{
        text-align: right;
        width: 80%;
        padding-left: 20%;
    }


    #skillWrapper{
        width: 70%;

    }

    .details{
        width: 100%;
        display: flex;  
        justify-content: space-between;
        margin-bottom: 3px;
        color: white;
    }
    .bar{
        border: 2px solid #ffffff;

        border-radius: 20px;
        margin-bottom: -3px;
    }
    .bar div{
        width: 0;
        height: 9px;
        border-radius: 10px;
        background-color: #ff58a6;


    }

    #html-bar{
        animation: html-fill 3s forwards;
    }
    @keyframes html-fill{
        100%{
            width: 90%;
        }
    }


    #js-bar{
        animation: js-fill 2.5s forwards;
    }
    @keyframes js-fill{
        100%{
            width: 75%;
        }
    }


    #vue-bar{
        animation: vue-fill 2.5s forwards;
    }
    @keyframes vue-fill{
        100%{
            width: 75%;
        }
    }


    #cs-bar{
        animation: cs-fill 2.16s forwards;
    }
    @keyframes cs-fill{
        100%{
            width: 65%;
        }
    }


    #cpp-bar{
        animation: cpp-fill 1.16s forwards;
    }
    @keyframes cpp-fill{
        100%{
            width: 35%;
        }
    }

    #java-bar{
        animation: java-fill 1.666s forwards;
    }
    @keyframes java-fill{
        100%{
            width: 50%;
        }
    }

</style>