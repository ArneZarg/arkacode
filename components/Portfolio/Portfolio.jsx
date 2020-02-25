import React from "react"
import * as services from "../services";
import PortfolioCard from "./PortfolioCard";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";


export default class Portfolio extends React.Component{
    state={
        totalPosts:[],
        cards:[],
        cardComponents:[],
        totalItems:0,
        activePage:1
    }
    componentDidMount(){
        this.getAllPosts(1)
        this.getTotal()
    }
    getTotal=()=>{
        services.getEveryPost()
            .then(this.getTotalSuccess)
            .catch(this.genericError)
    }
    getTotalSuccess=(response)=>{
        this.setState(()=>{
            return{
                totalPosts:response,
                totalItems:response.length
            }
        })
    }
    getAllPosts=(number)=>{
        services.getPosts(number)
            .then(this.getSuccess)
            .catch(this.genericError)
    }
    getSuccess=(response)=>{
        this.setState(()=>{
            return{
                cards:response,
                cardComponents:response.map(this.mapCard)
            }
        })
    }
    genericError=(response)=>{
        console.log("Error", response)
    }
    renderPagination = () => {
        return(
            <Pagination
                total={this.state.totalItems}
                onChange={this.handlePagination}
                current={this.state.activePage}
                pageSize={3}
                locale={localeInfo}
            >
            </Pagination>
        )
    }
    handlePagination = page =>{
        this.setState({activePage:page},()=>this.getAllPosts(this.state.activePage))
    }
    mapCard = post =>{
        return(
            <PortfolioCard 
                key={post.id} 
                title={post.title.rendered} 
                content={post.content.rendered}
                link={post.acf.link}
                github={post.acf.github}
                screenshot={post.acf.screenshot}
            >
            </PortfolioCard>
        )
    }
    render(){
        return(<React.Fragment>
        <div className="row" id="portfolio">
            <div className="col">
                <div className="container-fluid">
                    <div className="top-padding">
                        <h3 className="mb-4">Portfolio</h3>
                        <p className="card-text">
                            Take a look at some of my past and current work. For a more in-depth, 
                            comprehensive list, and source code, please take a look at my {""}
                            <a href="https://github.com/ArneZarg" target="_blank">GitHub page</a>.
                        </p>
                        <div className="row">
                            {this.state.cardComponents}
                        </div>
                        <div className="row pt-3 pb-3">
                            <div className="col">
                                {this.renderPagination()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>)
    }
}