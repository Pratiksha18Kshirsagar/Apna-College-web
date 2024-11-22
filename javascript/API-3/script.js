let url = "https://api.freeapi.app/api/v1/public/quotes";

async function quotes(){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.data.data[0].content);
}

quotes()