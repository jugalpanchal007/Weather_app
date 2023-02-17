const API_KEY = `4120eafd2f3ae37a0931a9d73d6984ac`
// const API = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
// const IMG_URL = `http://openweathermap.org/img/wn/10d@2x.png`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather =document.querySelector("#weather")


//here we make a function for get a weather from our api URL And In the URL we mention our api key .
const getWeather =async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
   // console.log(data)
   return showWeather(data) 
}


//here we are show the data from API . now data is =(api data) whole data of api
//whenever we mention data.name it fetch the name in the main data and print.

const showWeather = (data) => {
console.log(data)
    weather.innerHTML = `
     <div class="card-body p-4">
  
    <div class="d-flex">
      <h6 class="flex-grow-1"> ${data.name}</h6> 
      
    </div>

    <div class="d-flex flex-column text-center mt-5 mb-4">
      <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${data.main.temp}°C </h6>
      <span class="small" style="color: #868B94"> ${data.weather[0].main}</span>
    </div>

    <div class="d-flex align-items-center">
      <div class="flex-grow-1" style="font-size: 1rem;">
        <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.wind.speed}km/h
          </span></div>
        <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.main.pressure} </span>
        </div>
        <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 0.2h </span>
        </div>
      </div>
      <div>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
          width="100px">
      </div>
    </div>

  </div>
  `

}
form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)