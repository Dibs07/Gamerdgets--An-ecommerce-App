import React from 'react'
import Nav from '../Navbar/nav'
import Foot from '../Footer/Foot'


function Layout({children}) {
    return (
        <div>
                <Nav />
                <div className='main-content min-h-screen'>
                        {children}
                </div>
                <Foot/>
        </div>
    )
}

export default Layout