import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details-date">{formattedDate}</div>
      <div className="forecast-details-temperature">
        Max Temperature: {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details-humidity">Humidity:{humidity}%</div>
      <div className="forecast-details-wind-speed">
        Wind speed: {wind.speed}mph
      </div>
      <div className="forecast-details-wind-direction">
        Wind Direction: {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
