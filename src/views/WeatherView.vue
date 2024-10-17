<script>
import axios from "axios";

const apikey = "2919b8ada89fead5a3bceb9c9201c1f3";

export default {
  name: "App",
  data() {
    return {
      city: "",
      weatherData: null,
      hourlyForecast: [],
      dailyForecast: [],
    };
  },
  computed: {
    temperature() {
      return this.weatherData
          ? Math.floor(this.weatherData.main.temp - 273)
          : null;
    },
    iconUrl() {
      return this.weatherData
          ? `https://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
          : null;
    },
  },
  mounted() {
    this.fetchCurrentLocationWeather();
  },
  methods: {
    async fetchCurrentLocationWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const {latitude, longitude} = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
          await this.fetchWeatherData(url);
        });
      }
    },
    async fetchWeatherData(url) {
      try {
        const response = await axios.get(url);
        this.weatherData = response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>WEATHER APP</h1>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Enter city name" class="search-input" v-model="city"/>
      <button @click="searchByCity" class="search-button">Search</button>
    </div>
  </div>

  <main>
    <div v-if="weatherData">
      <h2>
        {{ weatherData.name }}, {{ weatherData.sys.country }}
      </h2>
      <div>
        <img :src="iconUrl" alt="Weather Icon"/>
        <p>{{ temperature }} °C</p>
      </div>
      <span>{{ weatherData.weather[0].description }}</span>
    </div>
  </main>
</template>

<style scoped>

</style>