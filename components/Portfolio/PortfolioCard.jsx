import React from "react";

const PortfolioCard = (props)=>{
    return(<React.Fragment>
        <div className="col-lg-4 col-sm-12">
            <div className="card mt-3 mb-3" style={{width: '100%'}}>
                <img style={{height:'250px'}} className="card-img-top" src={props.screenshot} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title" dangerouslySetInnerHTML={{__html:props.title}}></h5>
                        <p className="card-text pb-3" dangerouslySetInnerHTML={{__html: props.content}}></p>
                        <div className="pb-3" style={{position:"absolute", bottom:0}}>
                        {props.link ? <a href={props.link} target="_blank" className="btn btn-primary">Link</a> : <span></span>}
                        {props.github ? <a href={props.github} target="_blank" className={`btn btn-success ${props.link ? "ml-3" : ""}`} >GitHub Link</a> : <span></span>}
                        </div>
                    </div>
            </div>
        </div>
    </React.Fragment>)
}

export default PortfolioCard;