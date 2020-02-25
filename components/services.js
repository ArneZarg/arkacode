import axios from "axios";
import * as serviceHelper from "./serviceHelper"


/* let postsEndpoint = `http://localhost/wp-json/wp/v2/posts/?page=` */
let livePostsEndpoint = "http://arkacode.com/wp-json/wp/v2/posts/?page="

const getPosts = (pageNumber) =>{
    const settings = {
        method: "GET",
        headers:{"Content-Type":"application/json"},
        url:`${livePostsEndpoint}${pageNumber}&per_page=3`
    };
    return axios(settings)
            .then(serviceHelper.onGlobalSuccess)
            .catch(serviceHelper.onGlobalError);
}
const getEveryPost = () =>{
    const settings = {
        method: "GET",
        headers:{"Content-Type":"application/json"},
        url:`http://arkacode.com/wp-json/wp/v2/posts`
    };
    return axios(settings)
            .then(serviceHelper.onGlobalSuccess)
            .catch(serviceHelper.onGlobalSuccess);
}
const getContactForm = () =>{
    const settings = {
        method: "GET",
        headers:{
            "Content-Type":"application/json",
        },
        url:`http://arkacode.com/wp-json/wp/v2/pages/2`
    }
    return axios(settings)
            .then(serviceHelper.onGlobalSuccess)
            .catch(serviceHelper.onGlobalError);
}

export {
    getPosts,
    getEveryPost,
    getContactForm
}