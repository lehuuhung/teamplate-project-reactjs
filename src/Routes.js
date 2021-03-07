import { Switch } from 'react-router-dom'
import { RouteWithLayout } from './components'
import { MainLayout} from './layout'
import {
    Home, About
} from './pages'

const Routes = () => {
    return (
        <Switch>
            <RouteWithLayout
                path='/'
                exact
                layout={MainLayout}
                component={Home}
            />
            <RouteWithLayout
                path='/about'
                exact
                layout={MainLayout}
                component={About}
            />
        </Switch>
    )
}

export default Routes;