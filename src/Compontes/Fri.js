import { Fragment } from 'react';
import './main.css'; // CSS file
import List from './List'

const Fri = () => {
    return (
        <Fragment>
            <h1 className="title">List Of Proverbs</h1>
            <div className="Card">
                <List />
            </div>


        </Fragment >
    )
}

export default Fri;
