import { useData } from "../context/dataContext";

export default function Form() {
  const { city, setCity } = useData();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="city">City Name</label>
      <input
        id="city"
        type="text"
        placeholder="Enter city name"
        required
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
    </form>
  );
}
