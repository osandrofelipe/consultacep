const cep = document.querySelector("#cep")

const showData = result => {
    for(const field in result) {
        if(document.querySelector("#"+field))
        document.querySelector("#"+field).value = result[field]
    }
}



const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

cep.addEventListener("blur", () => {

    let search = cep.value.replace("-", "")

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => { response.json()
    .then(data => showData(data))
    
    })
    .catch(err => console.log('Erro encontrato' + err.message))
    // console.log(cep.value)
})