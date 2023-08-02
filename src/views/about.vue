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


        <div class="aboutContainer leftBound">
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

            

            
        </div>

        <div class="aboutContainer rightBound">
            <h1>Developer journey</h1>
            <p class="aboutText">From a young age I was interested in technological concepts. Pursuing my dream to develop software, I completed an internship as software developer at Funkwerk Kölleda, a system house for communication technology, in 2017. At the same time, I started my journey as a developer with PHP. In 2019 I switched to C++ and microcontroller development (Arduino). In the following year I finished my first DIY project, a self-designed desk lamp. During the 11th and 12th grade I had to write a term paper for which I chose the topic DIY smart home. Together with a classmate, I wrote a smart home system with its own voice assistant and a feature to implement commercial products. We also developed our own gadgets like weather stations, smart outlets and lamps. My final project in my CS class was a top-down shooter using Unity and C#. After highschool I wrote a chat app with ecryption in vanilla js with a friend. Later in 2021, I studied Computer Science at the Ilmenau University of Technology that I discontinued for personal reasons. In 2022 I continued my journey as a developer with C#. I wrote a password manager and a few small Windows applications. Then I came back to web development and started rewriting the chat app.
            In 2023, I used Vue.js to develop interfaces for my smart home system and to write another password manager.
           </p>
        </div>

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
        width: 100%;
        /* background-color: rgba(255, 0, 0, 0.384); */
    }

    .aboutContainer h1{
        font-style:oblique;
        text-shadow: 0px 0px 12px black;
    }

    .aboutText{
        font-size: 1.5rem;
        margin-top: 10px;
        color: white;
    }


    .rightBound{
        text-align: right;
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