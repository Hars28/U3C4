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
     window.location.href="search.html"
      })
    }  

}
document.getElementById("search_input").addEventListener("keypress",search)

let countries=document.getElementById("sidebar").children;


let cSearch=async()=>{
   
         let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)
            let data =await res.json();
                let container=document.getElementById("container")
                container.innerHTML=null;
                appendNews(data.articles,container)
                
          
    
}
for(let el of countries){
    el.addEventListener("click",cSearch)
}

export {cSearch}