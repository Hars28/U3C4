// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
import { sidebar } from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML=sidebar()
import{appendNews, searchNews} from "./fetch.js"

let news=JSON.parse(localStorage.getItem("news"))
console.log(news)
let container=document.getElementById("detailed_news")
let t=document.createElement("h3")
t.innerText=news.title;
let img=document.createElement("img");
img.src=news.urlToImage;
let desc=document.createElement("p")
desc.innerText=news.description;
container.append(t,img,desc)
import { cSearch } from "./index.js";