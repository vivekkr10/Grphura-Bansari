import "./App.css";
import Sidebar from "./components/salesExecutive/sidebar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Main Content Area</h1>
      </div>
    </div>
  );
}

export default App;
