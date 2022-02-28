import { Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';
import SighUp from './components/SignUp'
import CreateAccount from './components/CreateAccount'
import AddProblem from "./components/problem/AddProblem";
import Footer from "./components/Footer";
import ShowProblemDetails from "./components/problem/ShowProblemDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="SignUp" element={<SighUp />} />
        <Route path="CreateAccount" element={<CreateAccount />} />
        <Route path="addProblem" element={<AddProblem />} />
        <Route path="showProblemDetails/:id" element={<ShowProblemDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
