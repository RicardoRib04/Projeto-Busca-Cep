function listarLogs() {
    // 1. Pega os logs do localStorage. Se não houver, usa um array vazio.
    let logs = JSON.parse(localStorage.getItem('logs')) || [];
    console.log(logs); // Bom para checar se os logs estão vindo certo

    // 2. Seleciona o elemento da página (provavelmente um <ul> ou <ol>)
    let listaLogs = document.querySelector("#lista-logs");

    // 3. Inicia a string que vai guardar todo o HTML
    let listItems = "";

    // 4. O loop 'for' percorre cada log para montar o HTML da lista
    for (let log of logs) {
        listItems += `
            <li class="collection-item">
                Busquei no(a) ${log.tipo} na URL ${log.url} em ${log.data}
                
                <a onclick="montarLogs('${log.url}')" class="waves-effect waves-light red-text" style="cursor: pointer;">
                    <i class="material-icons left">remove_red_eye</i>
                </a>
            </li>
        `;
    }

    // 5. Insere todo o HTML (todos os 'li') dentro da lista na página
    listaLogs.innerHTML = listItems;
}