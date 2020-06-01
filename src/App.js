import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Covid from './pages/Covid'
import About from './pages/About'
import { TabNavigate } from './components'

class App extends React.Component {    
    constructor(props) {
        super(props)
        this.path = window.location.pathname
    }
    render() {
        const path = this.path
        return (
            <div>
                <TabNavigate path={path}/>
                <Switch>
                    <Route component={Covid} exact path={'/'} />
                    <Route component={About} exact path={'/about'} />
                </Switch>
            </div>

        )
    }
}

export default App