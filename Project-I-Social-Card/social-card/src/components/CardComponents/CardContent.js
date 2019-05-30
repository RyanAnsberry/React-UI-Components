import React from 'react';
import './Card.css';

function CardContent() {
    return (<div className="card-content-container">
        <h2 className="Content-title">Get started with React</h2>
        <p className="text-content">React makes it painless to create interactive UIS. Design simple views for each state in your application.</p>
        <span className="linked-url">reactjs.org</span>
    </div>);
}

export default CardContent;
