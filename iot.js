const weatherOptions = Array.from(document.querySelectorAll('.weather-options__option'));
const controlls = Array.from(document.querySelectorAll('.controlls__tab'));

const power = document.querySelector('.weather__power');
const circleFill = document.querySelector('.weather__circle-fill');
const tempAmount = document.querySelector('.weather__amount');
const tempDegrees = document.querySelector('.weather__degrees');
const tempNull = document.querySelector('.weather__null');

const light = document.getElementById('light');
const shades = document.getElementById('shades');
const audio = document.getElementById('audio');
const coffee = document.getElementById('coffee');
const controlList = [light, shades, audio, coffee];

controlls.map(controll => {
  controll.addEventListener('click', (e) => {
    controll.classList.toggle('controlls__tab--active');

    let stateId = (e.currentTarget.innerHTML).match('(?:id=\")[a-z]*(?:\")');
    const id = stateId[0].slice(4, -1);
    controlList.filter(elem => {
      if(elem.id == id) {
        if(!controll.classList.contains('controlls__tab--active')) {
          var http = new XMLHttpRequest();
          http.onreadystatechange = function(){
            console.log(this)
          }  
          if(id == "light"){
            console.log(id + "OFF");
            http.open("GET","https://api.thingspeak.com/update?api_key=2E76H2Y9PYMEHZ7L&field1=0",true)
            http.send()
          }
          if(id == "shades"){
            console.log(id + "OFF");
            http.open("GET","https://api.thingspeak.com/update?api_key=2E76H2Y9PYMEHZ7L&field2=0",true)
            http.send()
          }
          if(id == "audio"){
            console.log(id + "OFF");
            http.open("GET","https://api.thingspeak.com/update?api_key=2E76H2Y9PYMEHZ7L&field3=0",true)
            http.send()
          }
          if(id == "coffee"){
            console.log(id + "OFF");
            http.open("GET","https://api.thingspeak.com/update?api_key=2E76H2Y9PYMEHZ7L&field4=0",true)
            http.send()
          }
          elem.textContent = 'OFF';
        } else {
          var http = new XMLHttpRequest();
          http.onreadystatechange = function(){
            console.log(this)
            console.log(id)
          }  
          if(id == "light"){
            console.log(id + "ON");
            http.open("GET","https://api.thingspeak.com/update?api_key=2E76H2Y9PYMEHZ7L&field1=1",true)
            http.send()
          }
          if(id == "shades"){
            console.log(id + "ON");
            http.open("GET","https://api.thingspeak.com/update?api_key=2E76H2Y9PYMEHZ7L&field2=1",true)
            http.send()
          }
          if(id == "audio"){
            console.log(id + "ON");
            http.open("GET","https://api.thingspeak.com/update?api_key=2E76H2Y9PYMEHZ7L&field3=1",true)
            http.send()
          }
          if(id == "coffee"){
            console.log(id + "ON");
            http.open("GET","https://api.thingspeak.com/update?api_key=2E76H2Y9PYMEHZ7L&field4=1",true)
            http.send()
          }
          elem.textContent = 'ON';
        }
      }
    })
  })
})

weatherOptions.map(weatherOption => {
  weatherOption.addEventListener('click', (e) => {
    Array.from(weatherOptions).map(option => {
      option.classList.remove('weather-options__option--active');
    })
    weatherOption.classList.toggle('weather-options__option--active');
  })
})

power.addEventListener('click', (e) => {
  circleFill.classList.toggle('weather__circle-fill--on');
  power.classList.toggle('weather__power--active');
  
  if(tempNull.textContent == '--') {
    tempNull.textContent = null;
    tempAmount.textContent = '24\xB0';
    tempDegrees.textContent = 'Celsius';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      console.log(this)
    }  
    xhttp.open("GET","https://api.thingspeak.com/update?api_key=2E76H2Y9PYMEHZ7L&field5=24",true)
    xhttp.send()
  } else {
    tempNull.textContent = '--';
    tempAmount.textContent = null;
    tempDegrees.textContent = null;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      console.log(this)
    }  
    xhttp.open("GET","https://api.thingspeak.com/update?api_key=2E76H2Y9PYMEHZ7L&field5=0",true)
    xhttp.send()
  }
})
