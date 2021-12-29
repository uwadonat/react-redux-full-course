import React, { Component } from "react";

import Component3 from "../components/component3";
import Component4 from "../components/component4";
import Component2 from "../Component/Component2";
import Container1 from "../container/container";
import { Router, route } from 'react-router';

class Routes extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Route path="/container" component={Container1} />
                    <Route path="/component3" component={Component3} />
                    <Route path="/component4" component={Component4} />
                    <Route path="/Component2" component={Component2} />
                </Router>
            </div>
        )
    }
}

