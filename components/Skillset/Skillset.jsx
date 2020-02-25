import React from "react"
import reactLogo from "../../../src/assets/skill-logos/react-logo.png";
import jQueryLogo from "../../../src/assets/skill-logos/jQuery-logo.png"
import jsLogo from "../../../src/assets/skill-logos/js-logo.png"
import bsLogo from "../../../src/assets/skill-logos/bs-logo.png"
import cssLogo from "../../../src/assets/skill-logos/css-logo.png"
import htmlLogo from "../../../src/assets/skill-logos/html-logo.png"
import cSharpLogo from "../../../src/assets/skill-logos/c-sharp-logo.png"
import sqlLogo from "../../../src/assets/skill-logos/sql-logo.png"
import phpLogo from "../../../src/assets/skill-logos/php-logo.png"
import psdLogo from "../../../src/assets/skill-logos/psd-logo.png"
import wpLogo from "../../../src/assets/skill-logos/wp-logo.png"

const Skillset = () =>{
    return(<React.Fragment>
        <div className="row pb-5" id="skillset">
            <div className="col">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="top-padding">
                                <h3 className="mb-4">Skill Set</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <h5>Front End</h5>
                            <img className="logos" src={reactLogo}/>
                            <img className="logos" src={jQueryLogo}/>
                            <img className="logos" src={jsLogo}/>
                            <img className="logos" src={bsLogo}/>
                            <img className="logos" src={cssLogo}/>
                            <img className="logos" src={htmlLogo}/>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <h5>Back End</h5>
                            <img className="logos" src={cSharpLogo}/>
                            <img className="logos" src={sqlLogo}/>
                            <img className="logos" src={phpLogo}/>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <h5>Other</h5>
                            <img className="logos" src={psdLogo}/>
                            <img className="logos" src={wpLogo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>)
}
export default Skillset;