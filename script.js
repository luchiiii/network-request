//event listener for the fetchWeather button

document.getElementById("fetchWeather").addEventListener("click", () => {
  //capture the user's input for the city
  const city = document.getElementById("locationInput").value;

  //validate that the user entered a city
  if (!city) {
    alert("Please enter a city");
    return;
  }

  //Fetch Weather Data
  fetchWeatherData(city);
});

//
const fetchWeatherData = async (city) => {
  try {
    const apiKey = `eabd2a6a8a673d4e13dc0b2943a7af18`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    //await api response
    const response = await fetch(apiUrl);

    //check for errors in the response
    if (!response.ok) {
      throw new Error("City not found");
    }

    //parse the response as JSON
    const weatherData = await response.json();

    //extract relevant response from the JSON data

    const location = `${weatherData.name}, ${weatherData.sys.country}`;
    const temperature = `${weatherData.main.temp} °C`;
    const description = weatherData.weather[0].description;

    // Update the HTML content with the weather data
    document.getElementById("location").innerHTML = `Location: ${location}`;
    document.getElementById("temperature").innerHTML = `Temperature: ${temperature}`,
    document.getElementById("description").innerHTML = `Description: ${description}`;

    console.log(weatherData);
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
};
