import React, { useState } from 'react';
import './App.css';

const App = () => {
    const images = [
        'https://source.unsplash.com/random/1920x1080?nature',
        'https://source.unsplash.com/random/1920x1080?city',
        'https://source.unsplash.com/random/1920x1080?abstract',
        'https://source.unsplash.com/random/1920x1080?technology',
        'https://source.unsplash.com/random/1920x1080?mountains'
    ];

    const [randomImage, setRandomImage] = useState(images[Math.floor(Math.random() * images.length)]);

    const changeBackground = () => {
        setRandomImage(images[Math.floor(Math.random() * images.length)]);
    };

    return (
        <div className="app" style={{ backgroundImage: `url(${randomImage})` }}>
            <h1>Welcome to My Page</h1>
            <button onClick={changeBackground}>Change Background</button>
        </div>
    );
};

export default App;
