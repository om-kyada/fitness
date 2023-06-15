import "./App.css";
import Barchart from "./shared/components/charts/chart";
import Dashboard from "./features/dashboard/container/dashboard";

function App() {

  return (
    <>
      <Dashboard />
      <Barchart />
    </>
  );
}

export default App;
