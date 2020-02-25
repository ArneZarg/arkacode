import React from "react";

const Navbar = () =>{
    return (
        <React.Fragment>
            <div id="myNav">
                <nav>
                    <ul className="pt-4">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#skillset">Skill Set</a></li>
                    </ul>
                </nav>
            </div>
            <nav id="mobileNav">
                <div className="container-fluid">
                    <button id="menuBtn">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
                </div>
                <div id="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#skillset">Skill Set</a></li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Navbar;