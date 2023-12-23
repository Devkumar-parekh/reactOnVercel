import "./App.css";
import { Col, Row } from "react-bootstrap";
import Parallax from "./components/parallax";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Parallax />
      <div className="container my-5">
        <div className="card rounded-4" style={{ background: "#343a46" }}>
          <div className="card-body">
            <h3 className="text-center text-light">Intro</h3>
            <p className="" style={{ color: "#149eca" }}>
              MERN Developer
            </p>
          </div>
        </div>
      </div>
      <Parallax
        height={`10vh`}
        backgroundImage="./assets/images/parallax2.png"
      />

      <div className="container my-5">
        <Row>
          <Col xs={12} md={6} className="my-2">
            <div className="card rounded-4" style={{ background: "#343a46" }}>
              <div className="card-body">
                <h3 className="text-center text-light">Skill Set</h3>
                <p className="" style={{ color: "#149eca" }}>
                  MERN Developer
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="my-2">
            <div className="card rounded-4" style={{ background: "#343a46" }}>
              <div className="card-body">
                <h3 className="text-center text-light">Skill Set</h3>
                <p className="" style={{ color: "#149eca" }}>
                  MERN Developer
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Parallax />

      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
