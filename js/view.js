import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import HOME from "../Components/HOME/Layout/HOMELayout";
import GMAT from "../Components/GMAT/Layout/GMATLayout";
import CFA from "../Components/CFA/Layout/CFALayout";
import GRE from "../Components/GRE/Layout/GRELayout";
import IELTS from "../Components/Ielts/Layout/IELTSLayout";
const content = document.getElementById('content');

ReactDOM.render(
	<Router history={hashHistory}>
	    <Route path="/" component={HOME}></Route>
	    <Route path="GMAT" name="layoutgmat" component={GMAT}></Route>
	    <Route path="CFA" name="layoutcfa" component={CFA}></Route>
	    <Route path="GRE" name="layoutigre" component={GRE}></Route>
	    <Route path="IELTS" name="layoutielts" component={IELTS}></Route>
	</Router>
    ,content);