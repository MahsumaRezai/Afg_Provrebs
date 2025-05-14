import { Fragment } from 'react';
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <Fragment>
            <nav>
                <ul>
                    <li>
                        <Link to="welcome"></Link>
                    </li>
                </ul>
            </nav>

        </Fragment>
    )
}
export default Nav;