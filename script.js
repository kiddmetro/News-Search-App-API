const apiKey = '6af905b1164e40dfa28f4de86ba4692d';

const blogContainer =document.getElementById("blog-container");

async function fetchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=tesla&pageSize=10&apiKey=${apiKey}`;
        const response= await fetch(apiUrl)
        const data = await response.json();
        console.log(data);

    } catch(error){
        console.error("Error fetcjng random news", error);
        return []
    }
}