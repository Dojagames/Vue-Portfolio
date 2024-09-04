
<script>
import Flicking from "@egjs/vue3-flicking";
export default {

  data() {
    return {
      landscapeSize: 7,
      portraitSize: 15,
      randomImg1: undefined,
      randomImg2: undefined,
      randomImg3: undefined,
      randomImg4: undefined,

      activateModal: false,
      selectedImg: undefined,

      defaultView: true,

      categories: [{name: "portrait", active: true},{name: "landscape", active: true}],

      list: [],
    }
  },
  props: {

  },
  components: {
    Flicking,
  },
  watch: {

  },
  mounted() {
    this.randomImg1 = (Math.floor(Math.random() * this.portraitSize) + 1).toString().padStart(2, '0');
    this.randomImg2 = (Math.floor(Math.random() * this.portraitSize) + 1).toString().padStart(2, '0');
    if(this.randomImg2 === this.randomImg1){
      if(parseInt(this.randomImg2) === parseInt(this.portraitSize)){
        this.randomImg2 = (parseInt(this.randomImg2) - 1).toString().padStart(2, '0');
      } else {
        this.randomImg2 = (parseInt(this.randomImg2) + 1).toString().padStart(2, '0');
      }
    }

    this.randomImg3 = (Math.floor(Math.random() * this.landscapeSize) + 1).toString().padStart(2, '0');
    this.randomImg4 = (Math.floor(Math.random() * this.landscapeSize) + 1).toString().padStart(2, '0');
    if(this.randomImg3 === this.randomImg4){
      if(parseInt(this.randomImg4) === parseInt(this.landscapeSize)){
        this.randomImg4 = (parseInt(this.randomImg4) - 1).toString().padStart(2, '0');
      } else {
        this.randomImg4 = (parseInt(this.randomImg4) + 1).toString().padStart(2, '0');
      }
    }

    for(var i = 0; i < this.portraitSize; i++){
      this.list.push("portrait-" + (i + 1).toString().padStart(2, '0'));
    }

    for(var i = 0; i < this.landscapeSize; i++){
      this.list.push("landscape-" + (i + 1).toString().padStart(2, '0'));
    }

    console.log(this.list);
  },
  created() {
    document.title = "photography";


  },
  methods: {
    GoHome(){
      this.$router.push('/');
    },
    openImg(name, type){
      this.activateModal = true;
      if(type){
        this.selectedImg = "../../src/assets/photos/" + type + "-" + name + ".jpg";
      } else {
        this.selectedImg = "../../src/assets/photos/" + name + ".jpg";
      }
    },
    CloseModal(){
      this.activateModal = false;
    },
  },
  computed: {
    computedList(){
      var _tempList = [];
      this.categories.forEach(category => {
        if(category.active){
          this.list.forEach(img => {
            if(img.includes(category.name)){
              _tempList.push(img);
            }
          })
        }
      })
      return _tempList;
    }
  }
}
</script>

<template>



  <img  @click="GoHome()" id="home" src="../../src/assets/pngs/back.png" style="position: fixed; left: 40px; top: 30px; width: 48px; cursor: pointer; z-index: 1000" class="clickable">
  <div v-if="defaultView">
    <div id="introImgs">
      <div id="introImgsRow1">
        <img :src="'../../src/assets/photos/portrait-' + randomImg1 + '.jpg'" @click="openImg(randomImg1, 'portrait')">
        <img :src="'../../src/assets/photos/landscape-' + randomImg3 + '.jpg'" @click="openImg(randomImg3, 'landscape')">
      </div>
      <div id="introImgsRow2">
        <img :src="'../../src/assets/photos/portrait-' + randomImg2 + '.jpg'" @click="openImg(randomImg2, 'portrait')">
        <img :src="'../../src/assets/photos/landscape-' + randomImg4 + '.jpg'" @click="openImg(randomImg4, 'landscape')">
      </div>
    </div>

    <button class="navBtn" style="margin-left: 50%; transform: translateX(-50%)" @click="defaultView = false; window.scrollTo(0,0); ">view all</button>
  </div>



  <div v-else>

    <div id="imageSlider">
      <div id="imageSliderBtnSelect" style="height: 50px; width: 80%; margin-left: 10%; transform: translateY(-50%); margin-bottom: -25px; display: flex; flex-wrap: nowrap; flex-direction: row" >
        <div class="toggle-button" :class="(categories[index].active) ? 'on' : ''" v-for="(btn, index) in categories" @click="categories[index].active = !categories[index].active">{{btn.name}}</div>
      </div>
      <Flicking :options="{ renderOnlyVisible: true, circular: true }" >
        <div v-for="idx in computedList" class="flicking-panel" :key="idx" @click="openImg(idx.name)">
          <img :src="'../../src/assets/photos/' + idx + '.jpg'" style="pointer-events: none" class="flicking-photo" />
        </div>
      </Flicking>
    </div>


  </div>



  <div id="imgModal" class="modal" v-if="activateModal == true" v-on:click.self="CloseModal()">
    <div class="modal-content" @click.self="CloseModal()">
      <div class="close" @click="CloseModal()">&times;</div>
      <img :src="this.selectedImg">
    </div>
  </div>
</template>

<style scoped>
#introImgs {
  width: 80%;
  margin-left: 10%;
  margin-top: 50px;
  display: flex;

}
#introImgsRow1, #introImgsRow2 {
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 20px; /* Adds space between the rows */
}

#introImgsRow1 img, #introImgsRow2 img {
  width: 95%;
  height: auto;
  object-fit: contain;
  border: 5px solid #ffffff;

  margin-bottom: 10px;
}





#imageSlider{
  position: absolute;
  left: 50%;
  top: 50px;

  transform: translateX(-50%);

  height: 90%;
  width: 80%;

}

#imageSlider Flicking{
  width: 100%;
  height: 100%;
}

.flicking-panel{
  width: 90vw;
  margin-left: 5%;
  height: calc(90vh - 50px);
  margin-top: 20px;
}

.flicking-photo{
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  max-width: 90vw;
  object-fit: contain;
  border: 5px solid white;
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
  background-color: rgba(0,0,0,0.8); /* Black w/ opacity */
}

/* Modal Content/Box */

.modal-content {
  width: 90%;
  margin-left: 5%;
  height: 98%;
  margin-top: 1%;
}


.modal-content img {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 97.5%;
  object-fit: contain;
  border: 5px solid white;
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



.navBtn {
  color: #FFF;
  outline: none;
  background-color: transparent;
  border: 4px solid white;
  border-radius: 6px;
  padding: 5px 20px;

  margin-bottom: 10px;

  min-height: 50px;
  font-size: xx-large;
}

.navBtn:hover{
  cursor: pointer;
}

.navBtn:hover{
  border-color: #19F6E8;
  color: rgb(0, 255, 200);
  transform: scale(110%);
}











.toggle-button {
  width: 120px;
  height: 40px;
  background-color: transparent;
  border: 4px solid white;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0 10px;
  font-size: large;
  font-weight: 700;
  letter-spacing: 1.5px;
  transition: border-color 0.3s ease, color 0.3s ease;

  user-select: none;
}

.toggle-button:before {
  content: '';
  width: 8px;
  height: 8px;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  right: 8px;
  transition: background-color 0.3s ease;
}

.toggle-button.on {
  border-color: #4CAF50C0 ;
}

.toggle-button.on:before {
  background-color: #4CAF50;
}









</style>