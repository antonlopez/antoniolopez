import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import store from './store';
import App from './App';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import PrivacyPolicy from './pages/MafiaPolicy';
import MafiaSupport from './pages/MafiaSupport';
import SwitchWithSlide from "./components/SwitchWithSlide";

const router = (
    <Provider store={store}>
        <BrowserRouter >

            <SwitchWithSlide>
                <Route exact path="/" component={App} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/aboutme" component={AboutMe} />
                <Route exact path="/mafiacardgame/policy" component={PrivacyPolicy}/>
                <Route exact path="/mafiacardgame/support" component={MafiaSupport}/>
                {/* <Route path="/projects/audioplayer" component={Audio}/> */}
            </SwitchWithSlide>

        </BrowserRouter>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
