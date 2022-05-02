let searchNews= async(value)=>{
    try{
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        let data = await res.json()
        console.log(data)
        return data
    }catch(err){
        console.log(err)
    }
}

let appendNews=(data,container)=>{
    data.forEach(({title,urlToImage,description})=>{
        let div=document.createElement("div")
        div.setAttribute("id","news")
        div.onclick=()=>{
            showNews(data);
        }
        let t=document.createElement("h3")
        t.innerText=title;
        let img=document.createElement("img");
        img.src=urlToImage;
        let desc=document.createElement("p")
        desc.innerText=description;
        div.append(t,img,desc)
        container.append(div)
        let showNews=(data)=>{
            localStorage.setItem("news",JSON.stringify({title,urlToImage,description}))
                        window.location.href="news.html"

        }
    })
}



export {searchNews,appendNews}