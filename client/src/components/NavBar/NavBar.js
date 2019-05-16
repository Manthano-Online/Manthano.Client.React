import React from 'react';

const NavBar = () => {
    return(
        <div className="navWrapper">
            <h1>Manthano</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Churches</a>
                <a href="#">Goals</a>
                <a href="#">Bookshelf</a>
            </nav>
        </div>
    );
}

export default NavBar;