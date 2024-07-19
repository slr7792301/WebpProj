import React, { useState } from 'react';

const colors = ['#474747', '#FAAA96', '#FAEFA8', '#D6FA99', '#BBFAE3', '#ACAFFA', '#E6E6E6'];

function Grid() {
    const [color, setColor] = useState(Array(66).fill().map(() => colors[Math.floor(Math.random() * colors.length)]));

    const handleClick = (index) => {
        const newColor = [...color];
        newColor[index] = colors[Math.floor(Math.random() * colors.length)];
        setColor(newColor);
    }

    return (
        <container>
            <div className="wrapper">
                {color.map((c, index) => (
                    <div key={index} style={{backgroundColor: c}} onClick={() => handleClick(index)}></div>
                ))}
            </div>
        </container>
    );
}

export default Grid;