import "./App.css";
import "./index.css";
import Topbar from "./components/Topbar.js";
import Sidebar from "./components/Sidebar.js";
import Products from "./components/Products.js";

function App() {
  return (
    <div className="App font-beatrice">
      <Topbar />
      <div className="md:flex">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}

export default App;
