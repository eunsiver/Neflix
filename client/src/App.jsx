import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
    const user = false;
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/">
                    {user ? <Home /> : <Navigate to="/register" replace={true}/>}
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/movies" element={<Home type="movies" />} />
                <Route path="/series" element={<Home type="series" />} />
                <Route path="/watch" element={<Watch />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
