import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { Home } from '../containers/Home/Home'

export const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </Layout>
        </Router>
    )
}
