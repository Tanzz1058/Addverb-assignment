import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import Details from "./components/details";
import Spinner from "./components/spinner";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://restcountries.com/v3.1/region/asia")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setError(false);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
        alert("Something went wrong!");
      });
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <div className="App">
        <h2>ASIAN COUNTRIES INFORMATION</h2>
        <div className="row justify-content-center">
          {!loading &&
            !error &&
            data?.length > 0 &&
            data.map((res) => (
              <Details
                key={res.name.common}
                flag={res.flags.png}
                country={res.name.common}
                population={res.population}
                capital={res.capital}
                region={res.region}
                subregion={res.subregion}
                border={[res.borders]}
                lang={res.languages}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
