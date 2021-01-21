import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, HashRouter} from 'react-router-dom'
import { Provider } from "react-redux";
import store from './store';
import App from './App';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import PrivacyPolicy from './pages/MafiaPolicy';
import MafiaSupport from './pages/MafiaSupport';
import ARbillSupport from './pages/ArBillsSupport';
import ArBillsPolicy from './pages/ArBillsPolicy';
import SwitchWithSlide from "./components/SwitchWithSlide";
import BuildUpSupport from './pages/BuildUpSupport';
import BuildUpPolicy from './pages/BuildUpPolicy';
import PapiBirdSupport from './pages/PapiBirdSupport';
import PapiBirdPolicy from './pages/PapiBirdPolicy';
import DiabeticEyePolicy from './pages/DiabeticEyePolicy';
import DiabeticEyeSupport from './pages/DiabeticEyeSupport';

const router = (
    <Provider store={store}>
        <HashRouter >

            <SwitchWithSlide>
                <Route exact path="/" component={App} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/aboutme" component={AboutMe} />
                <Route exact path="/diabeticeye/policy" component ={DiabeticEyePolicy}/>
                <Route exact path="/diabeticeye/support" component ={DiabeticEyeSupport}/>
                <Route exact path="/papibird/support" component={PapiBirdSupport}/>
                <Route exact path="/papibird/policy" component={PapiBirdPolicy}/>
                <Route exact path="/buildup/support" component={BuildUpSupport}/>
                <Route exact path="/buildup/policy" component={BuildUpPolicy}/>
                <Route exact path="/arbills/support" component={ARbillSupport}/>
                <Route exact path="/arbills/policy" component={ArBillsPolicy}/>
                <Route exact path="/mafiacardgame/policy" component={PrivacyPolicy}/>
                <Route exact path="/mafiacardgame/support" component={MafiaSupport}/>
            </SwitchWithSlide>
        </HashRouter>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
