import React from 'react';
import classes from './ErrorComponent.module.css';


function ErrorComponent({error}) {
    return (
        <div className={classes.errorWrapper}>
            <h2>Error! please try again</h2>
            <h4>Error message: {error.message}</h4>
        </div>
    );

}

export default ErrorComponent;