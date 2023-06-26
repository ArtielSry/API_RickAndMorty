const apiFetch = async(page) => {
    let url="https://rickandmortyapi.com/api/character/?page="+page; // url + page

    const api = await fetch(url);  // fecth

    const data = await api.json();  // to json

    console.log(data) // result in console

    divResult=document.getElementById("result")  // element in HTML display the info


    divResult.innerHTML=""

    // .map to display the result  in HTML
    data.results.map(item => {

        // creating a element li
        divItem=document.createElement('div')
        divItem.classList.add('list')

        // adding data in divResult(html div)
        divResult.appendChild(divItem) 
        divItem.innerHTML=`
                        <h3>Name: <strong>${item.name}</strong></h3>
                        <img src='${item.image}'>
                        <p>Status: ${item.status}</p>
                        <p>Species: ${item.species}</p>
                        <p>Location: ${item.location.name}</p>
                    
        `;

    }
)}


// starting the function
apiFetch(1);



