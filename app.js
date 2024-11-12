function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container') 
    //VARIAVEL CONTAINER BUSCADA PELO ID 'container'
    let cartao = document.createElement('article') 
    //VARIAVEL CARTAO QUE CRIA <ARTICLE> NO HTML
    cartao.className = 'cartao'
    //CRIA CLASSE "cartao" para o elemento criado
    cartao.innerHTML = ` 
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `//inner.HTML insere texto no HTML via JAVASCRIPT
    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)
    container.appendChild(cartao)
}