async function buscaCepFetch() {

  let cep = document.querySelector("input").value  //Aqui vai ler o cep que a pessoa vai digitar
  console.log("buscando cep", cep) //esse comando é para confirmar se a variável cep está funcionando
 // let cep = document.querySelector("input").value
 // console.log("buscando cep", cep)

  let url = await "https://viacep.com.br/ws/" + cep + "/json/" // concatenação
  let url2 = await `https://viacep.com.br/ws/${cep}/json/`  // template string

  salvarLogs(url, 'cep') //Salva a URL

  fetch(url)  //Envia a requisição para o API e recebe os dados do endereço
    .then((res) => {
      console.log('resposta aqui', res)
      return res.json()       //Converte para json
    })  
  salvarLogs(url, 'cep')

  fetch(url)
    .then((res) => {
      console.log('resposta aqui', res)
      return res.json()
    })
    .then((cep) => {
      console.log(cep.logradouro)
      document.querySelector("#dadoRua").innerText = cep.logradouro
      document.querySelector("#dadoBairro").innerText = cep.bairro
      document.querySelector("#dadoCidade").innerText = cep.localidade
      document.querySelector("#dadoEstado").innerText = cep.uf
    })

}