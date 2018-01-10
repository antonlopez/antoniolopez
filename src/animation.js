// react essentials
const Component = React.Component;
const render = ReactDOM.render;
// react-motion essentials
const Motion = ReactMotion.Motion;
const spring = ReactMotion.spring;
const TransitionMotion = ReactMotion.TransitionMotion;
const StaggeredMotion = ReactMotion.StaggeredMotion;
// react-router-dom essentials
const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const NavLink = ReactRouterDOM.NavLink;

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Route path='/' exact component={Home} />
                    <Route path='/test1' component={Test1} />
                    <Route path='/test2' component={Test2} />
                </div>
            </Router>
        );
    }
}

class Nav extends Component {
    render() {
        return (
            <ul className='nav nav-pills nav-fill'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/test1' activeClassName='active'>
                        Test1
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/test2' activeClassName='active'>
                        Test2
                    </NavLink>
                </li>
            </ul>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <div className='container-fluid text-center ani-show'>
                <h1>Hello World!</h1>
                <h5>Welcome to my react animations testing page!</h5>
                <div>I made this codepen to practice animations with react.</div>
                <div>Use the buttons above to navigate between different tests</div>
                <h6 className='text-center'>Check out my <a href='https://github.com/kennethlumalicay' target='_blank'>Github</a>.</h6>
            </div>
        );
    }
}

class Test1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{key: 'j4q2q7lu', text: 'j4q2q7lu'},{key: 'j4q2q9rq', text: 'j4q2q9rq'},{key: 'j4q2qb7k', text: 'j4q2qb7k'}]
        }
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.willLeave = this.willLeave.bind(this);
        this.willEnter = this.willEnter.bind(this);
    }
    addItem(e) {
        const items = this.state.items;
        const key = Date.now().toString(36);
        this.setState({
            items: [...items, {key: key,text: key }]
        });
    }
    removeItem(e) {
        const items = this.state.items;
        this.setState({
            items: items.filter((v,i)=>v.key!=e.currentTarget.getAttribute('value'))
        });
    }
    willLeave() {
        return {
            opacity: spring(0),
            rotate: spring(-90),
            width: spring(0)
        };
    }
    willEnter() {
        return {
            opacity: 0.5,
            rotate: 90,
            width: 0
        };
    }
    render() {
        const items = this.state.items;
        return (
            <div className='container-fluid text-center ani-show'>
                <h1>Test1 is where the List at!</h1>
                <div className='container'>
                    <button onClick={this.addItem}>Add Item</button>
                    <TransitionMotion
                        willLeave={this.willLeave}
                        willEnter={this.willEnter}
                        styles={items.map(e=>({
                            data: e.text,
                            key: e.key,
                            style: {
                                opacity: spring(1),
                                rotate: spring(0),
                                width: spring(100)
                            }
                        }))}>
                        {interpolated =>
                            <div className='container-fluid row'>
                                {interpolated.map(config=>(
                                    <div
                                        className='item'
                                        style={{
                                            opacity: config.style.opacity,
                                            transform: 'rotateX('+config.style.rotate+'deg)',
                                            width: config.style.width + 'px'
                                        }}
                                        key={config.key}
                                        value={config.key}
                                        onClick={this.removeItem}>
                                        {config.data}
                                    </div>
                                ))}
                            </div>
                        }
                    </TransitionMotion>
                </div>
            </div>
        );
    }
}

class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{key: 'j4q2q7lu', text: 'j4q2q7lu'},{key: 'j4q2q9rq', text: 'j4q2q9rq'},{key: 'j4q2qb7k', text: 'j4q2qb7k'},{key: 'j4q2q7lu', text: 'j4q2q7lu'},{key: 'j4q2q9rq', text: 'j4q2q9rq'},{key: 'j4q2qb7k', text: 'j4q2qb7k'}],
            yOff: 0
        }
        this.move = this.move.bind(this);
    }
    move(e) {
        if(this.state.yOff>99) {
            this.setState({
                yOff: 0
            })
        } else {
            this.setState({
                yOff: 100
            })
        }
    }
    render() {
        const items = this.state.items;
        return (
            <div className='container-fluid text-center ani-show'>
                <h1>Did someone say staggered animation?</h1>
                <button
                    onClick={this.move}
                >Move</button>
                <StaggeredMotion
                    defaultStyles={items.map(e=>({translateY:0}))}
                    styles={prevInterpolated => prevInterpolated.map((e,i) => {
                        return i===0
                            ? {translateY: spring(this.state.yOff)}
                            : {translateY: spring(prevInterpolated[i-1].translateY)}
                    })}
                >
                    {interpolated =>
                        <div className='container-fluid row block-center'>
                            {interpolated.map((style,i) => (
                                <div key={i}
                                     className='item2 col-6 col-sm-2'
                                     style={{transform: 'translateY('+style.translateY+'px)'}}>
                                    {items[i].text}
                                </div>
                            ))}
                        </div>
                    }
                </StaggeredMotion>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));