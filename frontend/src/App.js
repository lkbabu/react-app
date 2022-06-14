import HomeScreen from "./screens/HomeScreen";
import "antd/dist/antd.css";
import "./App.css";
import LocationForm from "./components/LocationForm";
import KpiScreen from "./screens/KpiScreen";

function App() {
  return (
    <div className="App">
      {/* <HomeScreen />
      <LocationForm /> */}

      <KpiScreen />
    </div>
  );
}

export default App;
