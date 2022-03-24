import { Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';
import SighIn from './components/SignIn'
import CreateAccount from './components/CreateAccount'
import AddProblem from "./components/problem/AddProblem";
import Footer from "./components/Footer";
import ShowProblemDetails from "./components/problem/ShowProblemDetails";
import AdminSignIn from "./components/AdminSignIn";
import ShowProblem from "./components/problem/ShowProblem";
import AdminDashboard from "./components/admin/AdminDashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="SignIn" element={<SighIn />} />
        <Route path="CreateAccount" element={<CreateAccount />} />
        <Route path="addProblem" element={<AddProblem />} />
        <Route path="showProblem" element={<ShowProblem />} />
        <Route path="showProblemDetails/:id" element={<ShowProblemDetails />} />
        <Route path="adminsignin" element={<AdminSignIn />} />
        <Route path="adminDashBoard" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
