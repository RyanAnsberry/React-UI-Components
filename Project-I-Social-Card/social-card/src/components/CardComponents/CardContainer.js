import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

function CardContainer() {
    return (
        <a className="card-anchor" href="https://www.reactjs.org">
            <div className="card-container">
                <CardBanner />
                <CardContent />
            </div>
        </a>
    );
}

export default CardContainer;