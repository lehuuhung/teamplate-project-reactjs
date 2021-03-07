import React from 'react';
import {Footer, Header} from './components';

const MainLayout = props => {
    return (
        <div className='layout'>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default MainLayout;