<script>
import { reactive} from "vue";
export default {
  data() {
    return {
      viewText: true,
      timelineActiveElements: {
        academic: true,
        projects: false,
        work: false
      },
      timelineStartingYear: 2003,
      events: {
        academic: [
          { start: "07/2009", end: "06/2014", header: "Grundschule", text: "Sophienschule Buttstädt Staatliche Grundschule"},
          { start: "07/2014", end: "06/2021", header: "Gymnasium", text: "Prof. Fritz. Hofmann Gymnasiums Kölleda"},
          { start: "10/2021", end: "02/2022", header: "University", text: "BSc in Computer Science. <br> in tu ilmenau <br> (abgebrochen)" }
        ],
        projects: [
          { start: "12/2019", end: "", header: "VertretungsplanApp", text: "an app for my school to look up the representation plan", link: null, linkText: null },
          { start: "01/2020", end: "05/2021", header: "James smart assistant", text: "a complete smarthome system with a voice assistant, multiple selfmade smarthome devices and the feature to integrate commercial and selfmade devices", link: null, linkText: null },
          { start: "03/2020", end: "04/2020", header: "Desklamp", text: "a diy desklamp with alexa integration etc", link: "https://github.com/Dojagames/Desklamp", linkText: "Github" },
          { start: "12/2020", end: "", header: "Rollcon", text: "a smart roller shutter device / interface", link: "https://github.com/Dojagames/Rollcon", linkText: "Github" },
          { start: "01/2021", end: "03/2021", header: "Armin Space Adventure", text: "a topdown shooter made in unity", link: "https://github.com/Dojagames/Armin-Space-Adventure", linkText: "Github" },
          { start: "01/2022", end: "03/2022", header: "Abiplaner", text: "a planing tool for highschool", link: "https://github.com/Dojagames/Abiplaner", linkText: "Github" },
          { start: "04/2022", end: "07/2022", header: "PasswordManager", text: "an encrypted password manager, written in C#", link: "https://github.com/Dojagames/PW-Manager", linkText: "Github" },
          { start: "08/2022", end: "", header: "LFS-Companion", text: "a simple helper app for my vocational school", link: "https://github.com/Dojagames/lfsCompanion", linkText: "Github" },
          { start: "01/2023", end: "", header: "blackJack and sinking ships", text: "2 games made in delphi just for fun", link: "https://github.com/Dojagames/DelphiGames", linkText: "Github" },
          { start: "03/2023", end: "06/2023", header: "P-Vault", text: "a more sophisticated password manager written in vue.js", link: "https://github.com/Dojagames/P-Vault", linkText: "Github" },
          { start: "05/2023", end: "", header: "Poker", text: "a poker algorithm for evaluating poker hands", link: "https://github.com/Dojagames/poker2/blob/master/js/game.js", linkText: "Github" },
          { start: "06/2023", end: "", header: "Landingpage", text: "my landing page", link: "https://github.com/Dojagames/jonx.dev", linkText: "Github" },
          { start: "07/2023", end: "", header: "TicTacToe", text: "tic tac toe and ultimate tic tac toe as a multiplayer games with vue and node.js/socket.io", link: "https://github.com/Dojagames/ttt2", linkText: "Github" },
          { start: "08/2023", end: "", header: "Portfolio", text: "this portfolio page in the version 1.0", link: "https://github.com/Dojagames/Vue-Portfolio", linkText: "Github" },
          { start: "09/2023", end: "11/2023", header: "Spotify playlist editor", text: "using the spotify api", link: "https://github.com/Dojagames/Vue-Spotify", linkText: "Github" },
          { start: "10/2023", end: "11/2023", header: "WaschmachinenQuartett", text: "a card game with washing machines", link: "https://github.com/Dojagames/waschmaschienenQuartett", linkText: "Github" },
          { start: "12/2023", end: "01/2024", header: "internal tools", text: "internal tool for stoneman", link: null, linkText: null },
          { start: "02/2024", end: "07/2024", header: "Radstrecken Planungstool", text: "a cycling route planner for stoneman", link: null, linkText: null },
          { start: "04/2024", end: "", header: "elevation mapper", text: "a tool which uses tiffs to evaluate the height at coordinates", link: null, linkText: null },
          { start: "06/2024", end: "", header: "Arbeitszeit tool", text: "a tool to track you working hours", link: null, linkText: null },
          { start: "07/2024", end: "Present", header: "TTT2", text: "a first person shooter inspired by trouble in terrorist town", link: null, linkText: null },
          { start: "08/2024", end: "Present", header: "CC2", text: "cryptchat v2 - an end to end encrypted chat app with a focus on privacy", link: "https://github.com/Dojagames/CryptChat-final", linkText: "Github" },
          { start: "09/2024", end: "", header: "photo gallery", text: "a showcase website for my photos", link: null, linkText: null },
          { start: "11/2024", end: "", header: "soundcloud sessions", text: "listening sessions for soundcloud like spotify jams (beta)", link: null, linkText: null },
        ],
        work: [
          { start: "12/2023", end: "Present", header: "Frontend Developer", text: "@stoneman / absolutGPS" }
        ]
      },

      tooltipsVisible: reactive([]),
      timelineBarWidth: 0,
      activeEventIndex: null,
    };
  },
  computed: {
    years() {
      let start = this.timelineStartingYear;
      const container = [];
      const end = new Date().getFullYear() + 1;
      for (start; start <= end; start++) {
        container.push(start);
      }
      return container;
    },
    activeEvents() {
      return Object.keys(this.timelineActiveElements).find(
          (key) => this.timelineActiveElements[key]
      );
    },
    activeCategoryEvents() {
      return this.events[this.activeEvents] || [];
    }
  },
  methods: {
    GoHome() {
      this.$router.push("/");
    },
    setTimelineActiveElement(activeElement) {
      Object.keys(this.timelineActiveElements).forEach(
          (key) => (this.timelineActiveElements[key] = false)
      );
      this.timelineActiveElements[activeElement] = true;

      if (activeElement === "projects") {
        this.timelineStartingYear = 2018;
      } else if (activeElement === "work") {
        this.timelineStartingYear = 2022;
      } else {
        this.timelineStartingYear = 2003;
      }
    },

    // Update the timeline bar width
    updateTimelineBarWidth() {
      if(this.viewText){
        return
      }
      this.$nextTick(() => {
        this.timelineBarWidth = this.$refs.timelineBar.offsetWidth;
      });
    },

    // Calculate event position relative to the timelineBar
    calculatePosition(startDate) {
      const [startMonth, startYear] = startDate.split("/").map(Number);
      const totalMonths = (startYear - this.timelineStartingYear) * 12 + startMonth;
      const totalTimelineMonths =
          (new Date().getFullYear() - this.timelineStartingYear + 1) * 12;
      const positionPercentage = (totalMonths / totalTimelineMonths) * 100;
      return `${positionPercentage}%`;
    },

    // Calculate the event line width relative to the timelineBar width
    calculateLineWidth(startDate, endDate, offset = 0) {
      const [startMonth, startYear] = startDate.split("/").map(Number);
      const [endMonth, endYear] = endDate === "Present"
          ? [new Date().getMonth() + 1, new Date().getFullYear()]
          : endDate.split("/").map(Number);

      const totalStartMonths = (startYear - this.timelineStartingYear) * 12 + startMonth;
      const totalEndMonths = (endYear - this.timelineStartingYear) * 12 + endMonth;
      const durationMonths = totalEndMonths - totalStartMonths;

      const totalTimelineMonths = (new Date().getFullYear() - this.timelineStartingYear + 1) * 12;
      const lineWidthPercentage = (durationMonths / totalTimelineMonths) * 100;

      return `${((this.timelineBarWidth * lineWidthPercentage) / 100) + offset }px`;
    },


    // New function to calculate and adjust the left position of the ending date
    calculateEndingDateLeft(startDate, endDate) {
      const [startMonth, startYear] = startDate.split("/").map(Number);
      const [endMonth, endYear] = endDate === "Present"
          ? [new Date().getMonth() + 1, new Date().getFullYear()]
          : endDate.split("/").map(Number);

      const totalStartMonths = (startYear - this.timelineStartingYear) * 12 + startMonth;
      const totalEndMonths = (endYear - this.timelineStartingYear) * 12 + endMonth;
      const durationMonths = totalEndMonths - totalStartMonths;

      const totalTimelineMonths = (new Date().getFullYear() - this.timelineStartingYear + 1) * 12;
      const lineWidthPercentage = (durationMonths / totalTimelineMonths) * 100;

      return `${((this.timelineBarWidth * lineWidthPercentage) / 100) }px`;
    },

    calculateLeftOffset(){
      this.$nextTick(() => {
        let startingElement = document.getElementsByClassName("startingDateEvent")[0];
        let endingElement = document.getElementsByClassName("endingDateEvent")[0];
        if(startingElement.getBoundingClientRect().left + startingElement.getBoundingClientRect().width > endingElement.getBoundingClientRect().left) {
          endingElement.style.left = startingElement.getBoundingClientRect().width + 10 + "px";
        }
      });
    },

    // Show the tooltip for an event
    showTooltip(index) {
      this.tooltipsVisible[index] = true;
    },

    // Hide the tooltip for an event
    hideTooltip(index) {
      this.tooltipsVisible[index] = false;
      this.resetActiveEventIndex();
    },

    // Check if the tooltip for an event is visible
    isTooltipVisible(index) {
      return this.tooltipsVisible[index];
    },

    setActiveEventIndex(index) {
      this.activeEventIndex = index;
    },
    // Reset the hovered event index when mouse leaves
    resetActiveEventIndex() {
      this.activeEventIndex = null;
    }


  },
  mounted() {
    // Initially calculate the width of the timeline bar
    this.$nextTick(() => {
      this.updateTimelineBarWidth();
    });

    // Add resize listener to update the width on window resize
    window.addEventListener('resize', this.updateTimelineBarWidth);
  },
  beforeDestroy() {
    // Clean up the resize listener when the component is destroyed
    window.removeEventListener('resize', this.updateTimelineBarWidth);
  },
};
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
          <span class="buttonWrapper">
            <button :class="{activeBtnClass: viewText}" @click="viewText = true">text</button>
            <button :class="{activeBtnClass: !viewText}" @click="viewText = false; updateTimelineBarWidth()">timeline</button>
          </span>

          <div id="textJourney" v-if="viewText">
            <h1>Developer journey</h1>
            <p class="aboutText">From a young age, I have been passionate about technology. In 2017, I pursued my dream of developing software with an internship as a software developer at Funkwerk Kölleda. During this internship, I began my journey by learning PHP. By 2019, I transitioned to C++ and microcontroller development with Arduino. The following year, I completed my first DIY project: a self-designed desk lamp.<br><br>
              In high school, I wrote a term paper on DIY smart home systems. Alongside a classmate, I developed a smart home system with its own voice assistant and compatibility with commercial products. We also created custom gadgets, such as weather stations, smart outlets, and lamps. For my computer science class final project, I developed a top-down shooter game using Unity and C#.<br><br>
              After high school, I collaborated with a friend to build a chat application with encryption using vanilla JavaScript. In 2021, I began studying Computer Science at the Ilmenau University of Technology but left later that year for personal reasons. In 2022, I resumed my development journey with C#, creating a password manager and several small Windows applications, before returning to web development to rewrite the chat application.<br><br>
              In 2023, I used Vue.js to develop interfaces for my smart home system and created two web applications: another password manager and this portfolio page. Later that year, I developed three multiplayer games using JavaScript, Node.js, Socket.io, and Vue.js, along with a Spotify playlist editor utilizing the Spotify API and a new backend for my chat application.<br><br>
              Since 2023, I have been employed at AbsoluteGPS, where I build internal tools like a meeting scheduler and availability checker that suggests solutions when conflicts arise. My most recent project is a cycling route planning tool.
            </p>
          </div>

          <div id="timelineJourney" v-else>
            <h1>Developer journey</h1>
            <div id="timelineButtonWrapper">
              <button :class="{ activeBtnClass: timelineActiveElements['academic'] }" @click="setTimelineActiveElement('academic')">
                academic
              </button>
              <button :class="{ activeBtnClass: timelineActiveElements['projects'] }" @click="setTimelineActiveElement('projects')">
                projects
              </button>
              <button :class="{ activeBtnClass: timelineActiveElements['work'] }" @click="setTimelineActiveElement('work')">
                work
              </button>
            </div>
            <div id="timelineBar" ref="timelineBar">
              <div class="timelineStampWrapper">
                <div class="timelineStamp" v-for="year in years" :key="year">
                  <p>{{ year }}</p>
                </div>
              </div>
              <div id="timelineEventWrapper">
                <div v-for="(event, index) in activeCategoryEvents" :key="index" class="timelineEvent"
                     :style="{ left: calculatePosition(event.start) }"
                     @mouseover="showTooltip(index); setActiveEventIndex(index); calculateLeftOffset()"
                     @mouseleave="hideTooltip(index)" >

                  <p class="eventName" v-if="activeEventIndex === null && timelineActiveElements['projects'] === false">{{event.header}}</p>
                  <div class="eventDot" v-if="activeEventIndex === null || activeEventIndex === index" ></div>


                  <!-- Set the width of the event line based on the total timeline width -->
                  <div class="startingDateEvent eventDate" v-if="isTooltipVisible(index)" ref="startingDateEvent">{{event.start}}</div>
                  <div v-if="isTooltipVisible(index) && event.end" class="eventLine" :style="{ width: calculateLineWidth(event.start, event.end) }"></div>
                  <div class="endingDateEvent eventDate" :style="{ left: calculateEndingDateLeft(event.start, event.end) }" ref="endingDateEvent" v-if="isTooltipVisible(index) && event.end">{{event.end}}</div>
                  <!-- Tooltip -->
                  <div v-if="isTooltipVisible(index)" class="tooltip">
                    <h4>{{ event.header }}</h4>
                    <p v-html="event.text"></p>
                    <a v-if="event.link && event.linkText" :href="event.link" target="_blank">{{event.linkText}}</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div><br><br>

        <div class="aboutContainer leftBound">
            <h1>Hobbies</h1>
            <p class="aboutText"> My hobbies include cycling, producing music, speedcubing, software development, and photography. I find cycling to be a fulfilling physical activity that allows me to enjoy nature and stay active. Producing music gives me a creative outlet, and speedcubing challenges my problem-solving skills.<br>
              In my spare time, I engage in software development, finding satisfaction in creating digital solutions. Photography is a way for me to capture moments and express my artistic side. Additionally, I have a deep interest in philosophy, particularly absurdism and determinism, which offer profound insights into human existence and the nature of free will. This philosophical exploration encourages critical thinking and enhances my approach to problem-solving, both in life and as a software engineer.<br>
              I am also writing a book in the field of political theory, which has further honed my analytical skills and understanding of complex systems. The process of articulating and structuring my thoughts in writing has improved my ability to approach software development projects with a clear, methodical mindset.<br>
              Furthermore, my interest in sociology and psychology allows me to explore the dynamics of human behavior and societal systems, which aids in designing user-centric digital solutions. These hobbies and intellectual pursuits contribute to my personal growth, providing opportunities for self-expression, learning, and a deeper understanding of the world. They help me strike a balance between physical, creative, and intellectual pursuits, all of which enrich my skills as a software engineer and my ability to think critically and creatively.</p>
    
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




  /* timeline switch buttons */

    .buttonWrapper button{
      position: relative;
      margin-left: 1rem;

      width: fit-content;
      height: fit-content;
      padding: .3rem 2rem;

      border-radius: 1rem;
      border: none;
      outline: none;
      background-color: #FFFFFF40;
      backdrop-filter: blur(4px);
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 1.2px;
      text-transform: uppercase;

      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
      cursor: pointer;
    }


    .activeBtnClass::after{
      content: '';
      width: .75rem;
      height: .75rem;
      top: .2rem;
      right: .4rem;
      position: absolute;
      background-color: rgb(60, 179, 113);
      border-radius: 50%;
      border: 1px solid #00000010;
    }


    /* timeline */



    #timelineJourney h1{
      margin-bottom: 2rem;
    }

    #timelineBar {
      width: 100%;
      height: 2rem;
      background-color: #FFFFFF40;
      backdrop-filter: blur(6px);
      border-radius: 4rem;
      border: 2px solid #00000060;
      position: relative; /* For positioning the vertical lines */
    }

    .timelineStampWrapper {
      position: relative; /* Allows positioning of the vertical line and text */
      width: 100%;
      height: 100%;
      display: flex; /* Enable Flexbox */
      justify-content: space-between; /* Distribute items evenly with space in between */
      align-items: center;
    }

    .timelineStamp {
      position: relative; /* Ensure the position of text and line is properly controlled */
      text-align: center;
      width: fit-content;
      height: fit-content;
    }

    .timelineStamp::after {
      content: '';
      position: absolute;
      top: 0; /* Align the line with the top of the bar */
      left: 50%;
      transform: translateX(-50%) translateY(-50%); /* Center the line horizontally */
      width: 1px;
      height: 2rem; /* Length of the vertical line */
      background-color: black; /* Line color */
    }

    .timelineStamp:first-child::after,
    .timelineStamp:last-child::after {
      content: none; /* Remove the line for the first and last elements */
    }

    .timelineStamp p {
      position: absolute; /* Ensure the text stays below the bar */
      top: 2.5rem; /* Push text below the bar */
      left: 50%;
      transform: translateX(-50%); /* Center the text */
      margin: 0;
      font-size: 1rem; /* Adjust font size */
    }

    #timelineButtonWrapper{
      margin: 2rem;
    }

    #timelineButtonWrapper button{
      position: relative;
      margin-left: 1rem;

      width: fit-content;
      height: fit-content;
      padding: .3rem 2rem;

      border-radius: 1rem;
      border: none;
      outline: none;
      background-color: #FFFFFF40;
      backdrop-filter: blur(4px);
      font-size: .9rem;
      letter-spacing: 1.1px;

      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
      cursor: pointer;
    }


    #timelineEventWrapper{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .timelineEvent {
      position: absolute; /* Absolute position to align events within the bar */
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
    }

    .eventName{
      position: absolute;
      top: 0;
      left: 0;
      width: fit-content;
      white-space: nowrap;
      transform: translateY(calc(-100% - 1rem)) translateX(-50%);
    }

    .eventDot {
      width: 10px;
      height: 10px;
      background-color: black;
      border-radius: 50%;
      position: relative; /* Center the dot on the event */
    }

    .eventLine {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      height: .3rem; /* Set the height of the event line */
      background-color: black;
    }

    .eventDate{
      position: absolute;
      transform: translateY(80%) translateX(-50%);
      bottom: 0;

      background: #FFFFFFA0;
      backdrop-filter: blur(6px);
      border-radius: 0.4rem;
      border: 1px solid #00000020;
      padding: .1rem 0.2rem;
      font-weight: bold;
      letter-spacing: 1.1px;
    }


    .eventLine::after{
      content: '';
      position: absolute;
      right: 0;
      top:50%;
      width: 10px;
      height: 10px;
      background-color: black;
      border-radius: 50%;
      transform: translateY(-50%);
    }

    .tooltip {
      position: absolute;
      top: 0; /* Position the tooltip below the event */
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
      background-color: #FFFFFFC0;
      backdrop-filter: blur(4px);
      border: 1px solid #ccc;
      border-radius: .5rem;
      padding: .5rem;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      text-align: justify;
    }

    .tooltip h4 {
      margin: 0;
      font-size: 1.2rem;
    }

    .tooltip p {
      margin: 0;
      font-size: 1rem;
      min-width: 10rem;
    }







</style>