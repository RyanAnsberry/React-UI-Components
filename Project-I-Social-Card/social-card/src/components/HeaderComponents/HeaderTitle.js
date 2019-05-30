import React from 'react';
import './Header.css';

function HeaderTitle() {
    return ( 
        <div className="header-title-container">
            <h1 className="header-title">Lambda School</h1>
            <a className="handle">@LambdaSchool</a>
            <span className="timestamp">30 may</span>
        </div> 
    );
}

export default HeaderTitle;