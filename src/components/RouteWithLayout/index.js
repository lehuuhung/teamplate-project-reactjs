// route custom
import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

const RouteWithLayout = ({ layout: Layout, component: Component, rest }) => {
    return (
        <Route {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    )
}

RouteWithLayout.propTypes = {
    layout: PropTypes.any,
    component: PropTypes.any
}

export default RouteWithLayout;