import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import AuthDetails from "../../AuthDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <AuthDetails />
    </div>
  );
}

export default App;
