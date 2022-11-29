// full body 
let container=document.createElement("div")
container.classList.add("conatainerall")
document.body.append(container)

//nav bar
let nav=document.createElement("div")
nav.classList.add("nav-bar")
container.append(nav)

// navbar bar content
let h3=document.createElement("h3")
h3.classList.add("logo")
h3.innerHTML="Breweries "
nav.append(h3)


// header
let divh =document.createElement("div") //half in first div
divh.classList.add("header")
container.append(divh)

let divh1 =document.createElement("div")  //content inside first div
divh1.classList.add("content")
divh.append(divh1)

let h1=document.createElement("h1")  //head inside first divh1
h1.innerText="Eat.drink.Events"
h1.classList.add("head")
divh1.append(h1)

let span=document.createElement("span")  //span inside first divh1
span.innerText=""
span.classList.add("span")
divh1.append(span)

// second div

let divb1=document.createElement("div")
divb1.classList.add("inp-bt")
divb1.innerHTML="<label class=lab>  Refresh Page And Search -></label>"
container.append(divb1)

let divb=document.createElement("div")
divb.classList.add("innercontainer")
container.append(divb)


let search=document.createElement("select")
search.setAttribute("id","op")
search.classList.add("input")
divb1.append(search)

let a=document.createElement("button")
a.addEventListener('click',showData)
a.innerHTML="search"
a.classList.add("button")
divb1.append(a)

// function for request data
async function myfun(){
  let data = await fetch("https://api.openbrewerydb.org/breweries")
  let final = await data.json()
  console.log(final)
  console.log(final.length)
 
 
  for(let i=0;i<final.length;i++){
    let option=document.createElement("option")
  option.setAttribute("value",`${final[i].name}`)
  option.innerHTML=`${final[i].name} select`
  option.classList.add("option")
  search.append(option)
  }
  

  final.forEach(element=>{
      displayCards(element)
  })
  }
  myfun()


async function showData(){

  let inp=document.getElementById("op").value
  console.log(inp)
 
  let data = await fetch(`https://api.openbrewerydb.org/breweries?by_name=${inp}`)
    let final = await data.json()
    // console.log(final)
    let name;
    for(let i=0;i<final.length;i++){
      console.log(final[i])
    fin=final[i]
    }
  let searc=document.createElement('div')
  searc.innerHTML=`<div class="card border-success mb-3 cd" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">${fin.name}</div>
  <div class="card-body text-success">
          <p class="card-text"><strong>Type :</strong> ${fin.brewery_type}</p>
          <p class="card-text"><strong>Street :</strong> ${fin.street}</p>
          <p class="card-text"><strong>Phone :</strong> ${fin.phone}</p>
        </div>
  <div class="card-footer bg-transparent border-success"><strong>url :</strong> ${fin.website_url}</div>
</div>`
  
divb1.append(searc)
    
}






// display all data in cards
    function displayCards(element){
    
        let temp = document.createElement('div')
        temp.classList.add('temp')
        temp.innerHTML=`<div class="card border-success mb-3" style="width: 18rem;">
        <div class="card-header bg-transparent border-success"><strong>${element.name}</strong></div>
        <div class="card-body text-success">
          <p class="card-text"><strong>Type :</strong> ${element.brewery_type}</p>
          <p class="card-text"><strong>Street :</strong> ${element.street}</p>
          <p class="card-text"><strong>Phone :</strong> ${element.phone}</p>
        </div>
        <div class="card-footer bg-transparent border-success"><strong>url :</strong> ${element.website_url}</div>
      </div>`
        
      divb.append(temp)
    }
    