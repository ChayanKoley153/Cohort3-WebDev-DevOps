import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/neet" element={<Layout />}>
                        <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
                        <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
                        <Route path="/" element={<Landing />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
                Footer | Contact Us
            </BrowserRouter>
        </div>
    );
}



function Layout() {
    return (
        <div style={{ height: "100vh", background: "green" }}>
            <Header />
            <div style={{ height: "90vh", background: "red" }}>
                <Outlet />
            </div>
            footer
        </div>
    );
}


function Header() {
    return (
        <div>
            <Link to="/neet">Allen</Link>
            |
            <Link to="/neet/online-coaching-class-11">Class 11</Link>
            |
            <Link to="/neet/online-coaching-class-12">Class 12</Link>
        </div>
    )
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

function ErrorPage() {
    return (
        <div>
            <h1>Sorry Page not found</h1>
        </div>
    );
}

export default App;