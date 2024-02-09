import React from 'react';

const Header = () => {
    return (
        <div className = 'header'>
            <h1><img src={`${process.env.PUBLIC_URL}/images/maggiano.png`} className="image" alt="chef" /> Misato's </h1>
            <h2> Fine Japanese </h2>
            <h1> 口に入れてください </h1>
        </div>
    );
};

export default Header;
