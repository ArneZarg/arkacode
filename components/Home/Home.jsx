import React from "react";
import * as services from "../services"
import "./form.css"

class Home extends React.Component{
    state={
        form:""
    }
    componentDidMount(){
        this.getForm();
    }
    getForm=()=>{
        services.getContactForm()
            .then(this.getSuccess)
            .catch(this.getFail)
    }
    getSuccess=(response)=>{
        console.log(response)
        this.setState({form:response.content.rendered})
    }
    getFail=(response)=>{
        console.log("fail", response)
    }
    render(){
        return(
            <React.Fragment>
                <div className="row" id="home">
                    <div className="col">
                        <div className="container-fluid">
                            <div className="row">
                                    <div className="col-lg-6 col-sm-12 content">
                                        <h1>Arka Code</h1>
                                        <p className="home-text">
                                            Hello, and welcome to arkacode.com! My name is Arne Zargarian, and I am a professional full stack developer. Having designed and developed websites and web applications for a plethora of clients, I am always excited to make a difference in your project and take your company to the next level. Feel free to send me a message if you want to work with me. Please do not hesitate to take a look at my portfolio or my skill set to see what I can bring to the table. I look forward to working with you.
                                            <br/>
                                            <br/>
                                            "Not too long ago, I approached Arne to help me build a website for my father’s business. I had absolutely no idea about what needed to be done and the actual work that goes into it. Nonetheless, Arne was a huge help from beginning to end and turned the entire process into a smooth enjoyable experience!  He sat down with me and helped me every step of the way. He picked my brain about the company, bounced ideas off of me, and practically designed the website as well. After this phase, he began development on the website. I have to say, the turnaround time on the site was incredible. Within a few days he had finished the site, and all that was left was for me to fill in the content. In additional to all of this, the website ended up being fantastic, and both my father and I are extremely satisfied. To sum it up: Arne was top notch from beginning to end, and I 100% recommend him to everyone!"
                                            <br/>
                                            <br/>
                                            - Andre Hovsepian, Hai Metal
                                        </p>
                                    </div>
                                <div className="col-lg-6 col-sm-12 form-wrapper">
                                    <h4 className="pb-3">Contact Me</h4>
                                    <div dangerouslySetInnerHTML={{__html: this.state.form}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            )
};
}
export default Home;