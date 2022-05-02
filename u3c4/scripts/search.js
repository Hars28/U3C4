// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
import { sidebar } from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML=sidebar()
import{appendNews, searchNews} from "./fetch.js"


let search=(e)=>{

    if(e.key==="Enter"){
      let value=document.getElementById("search_input").value

      searchNews(value).then((data)=>{
      console.log(data)
      let container=document.getElementById("results");
      container.innerHTML=null;

      appendNews(data.articles,container)
      })
    } 
  

}

document.getElementById("search_input").addEventListener("keypress",search)
