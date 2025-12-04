import { useEffect, useState } from "react";

const url =
  "https://api.weatherapi.com/v1/current.json?key=cc51a035fb6647b6bc445321250412&q=Chandigarh";

export default function Weather() {
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <div>
      {!error ? (
        <>
          <h1>Weather of {weatherData?.location?.name}</h1>
          <p>Temperature: {weatherData?.current?.temp_c}</p>
        </>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}
