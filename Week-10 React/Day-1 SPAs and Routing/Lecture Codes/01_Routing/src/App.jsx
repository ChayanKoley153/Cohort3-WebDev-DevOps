
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Link to="/">Allen</Link>
        |
        <Link to="/neet/online-coahing-class-11">CLASS 11</Link>
        |
        <Link to="/neet/online-coahing-class-12">CLASS 12</Link>
        <Routes>
          <Route path="/neet/online-coahing-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coahing-class-12" element={<Class12Program />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ErrorPage() {
  return (
    <div>
      <h1>Sorry page not found</h1>
    </div>
  );
}

function Landing() {
  return (
    <div>
      <h1>Welcome to Allen</h1>
    </div>
  );
}

function Class11Program() {
  return (
    <div>
      <h2>Neet Programs for Class 11th</h2>
    </div>
  );
}


function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return (
    <div>
      <h2>Neet Programs for Class 12th</h2>
      <button onClick={redirectUser}>Back to Landing Page</button>
    </div>
  );
}

export default App;


