

let countEl=document.getElementById("count-el")
let count =0
let savEl=document.getElementById("save-el")
console.log(savEl)

function increment()
{

  
   count +=1
   countEl.innerText=count

  

    
}

function save()
{   
    let countStr= count + " - "
    savEl.textContent+=countStr
    console.log(count)

    countEl.textContent=0
    count =0

}

 