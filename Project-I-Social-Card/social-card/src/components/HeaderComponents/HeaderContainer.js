import React from 'react';
import Thumbnail from './ImageThumbnail';
import Title from './HeaderTitle';
import Content from './HeaderContent';
import './Header.css';

function HeaderContainer() {
    return (
        <div className="header-container">
            <Thumbnail />
            <div className="content-container">
                <Title />
                <Content />
            </div>
        </div>
    );
}

export default HeaderContainer;