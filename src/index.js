import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import store from './store';
import App from './App';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe'

const router = (
    <Provider store={store}>
        <BrowserRouter >

            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/aboutme" component={AboutMe} />
                {/* <Route path="/projects/audioplayer" component={Audio}/> */}
            </div>

        </BrowserRouter>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
