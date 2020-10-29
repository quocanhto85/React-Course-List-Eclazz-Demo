import React from "react"
import {Login, DashBoard} from "./screens/index";

import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Login} />
                <Route exact path="/main" component={DashBoard} />
                {/* <Route exact path="/main" component={() => {
                    window.location.href = "https://eclass.ftech.ai/"; 
                    return null;
                }} /> */}
            </Router>
        </div>
    )
}

export default App
