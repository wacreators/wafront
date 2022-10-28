import React from 'react';
import '../@styles/NotFound.css'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return(
        <div className='notfound'>
            <h1>404</h1>
            <p>page not found, try checking your link.</p>
            <ul>
                <li><Link to="/register">Login</Link></li>
                <li><Link to="/signin">Register</Link></li>
            </ul>
        </div>
    )
}
export default NotFound;