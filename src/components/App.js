import { Container } from "react-bootstrap";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path="/" Component={Dashboard} />
                <Route path="/signup" Component={Signup} />
                <Route path="/login" Component={Login} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;
