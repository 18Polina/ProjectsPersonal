import "./styless/App.css";
import "./styless/Table.css"
import "./styless/Menu.css"
import "./styless/Images.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import ContactUs from "./components/ContactUs";
import Table from "./components/Table";

function App() {
  return (
      <div>

        <Router>
            <Routes>
            <Route
                path="/"
                element={<Home /> }
            />

            <Route
                path="/about"
                element={<Menu />}
            />
                <Route
                    path="/table"
                    element={<Table />}
                />
            <Route
                path="/contactus"
                element={<ContactUs />}
            />

            </Routes>

        </Router>
      </div>
  );
}

export default App;