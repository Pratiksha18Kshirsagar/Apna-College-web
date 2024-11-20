// let url= "https://api.freeapi.app/api/v1/public/meals/meal/random";

// fetch(url).then((res)=>{
//  console.log(res)
//  res.json().then((data)=>{
//       console.log(data)   
//  })
// })


// let url = "https://api.freeapi.app/api/v1/public/meals/meal/random";

// async function getfact() {
//      try {
//           let res = await fetch(url);
//           console.log(res);
//           let data = await res.json();
//           console.log(data);
//      } catch (e) {
//           console.log(e);
//      }

// }

// let url = "https://catfact.ninja/fact";


// async function getfact() {
//      try {
//           let res = await axios.get(url);
//           // console.log(res);
//           // console.log(res.data);
//           console.log(res.data.fact);
//           return res.data.fact;


//      } catch (e) {
//           console.log(e);
//      }

// }

// console.log(getfact());
// let p = document.querySelector("p");
// let btn = document.querySelector("button");
// btn.addEventListener("click" ,async ()=>{
//     p.innerText = await getfact();

// })


let url2 = "https://dog.ceo/api/breeds/image/random";


async function getfact() {
     try {
          let res = await axios.get(url2);
          console.log(res.data.message);
          return res.data.message;
     } catch (e) {
          console.log(e);
     }

}

console.log(getfact());

let img = document.querySelector(".dog");
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
     img.src = await getfact();

})