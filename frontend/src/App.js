import HomeScreen from "./screens/HomeScreen";
import "antd/dist/antd.css";
import "./App.css";
import LocationForm from "./components/LocationForm";

function App() {
  return (
    <div className="App">
      <HomeScreen />
      <LocationForm />
    </div>
  );
}

export default App;
