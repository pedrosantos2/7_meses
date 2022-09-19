const respostas = document.getElementById('respostas');


function mudarPergunta(){
    respostas.innerHTML = `<div class="respostas">
        <h1>Ache o trecho da música que está faltando</h1>
        <p>Mesmo papo de romance
        Porra eu só quero esse pau comer
        Ele não é o meu namorado mas aquele pau eu me encarrego de exercer
        Ele tem a língua de seda e mama meu peito como se fosse um bebê
        Me come gostoso negro e gravar um filme como se fosse no B.B.B
        Unha de fibra segurando o copão
        Trem bala da V.U que quebrou seu coração
        Ele perde a postura porque eu tenho bucetão
        ________, comigo é sucção</p>
        <input type="text" name="texto" id="texto" class="texto"/>
        <button id="btn">></button>
    </div>`
    respostas.style.textAlign = 'center';
         
        const texto = document.getElementById('texto');
        const btn =  document.getElementById('btn');

        btn.addEventListener('click', () => {
            if(texto.value == "Na rua ele é bandido"){
                respostas.innerHTML = `<div class="respostas">
                <img src="maxresdefault.jpg" style="width: 400px; height:300px; margin:20px;">
                <h1>Qual é a frase mais icônica dessa música?</h1>
                <p>Dica: Pon Mi</p>
                <input type="text" name="texto" id="texto2" class="texto"/>
                <button id="btn2">></button>
            </div>`
            }else{
                respostas.innerHTML = `<div class="respostas">
                <h1>Ache o trecho da música que está faltando</h1>
                <p>Mesmo papo de romance
                Porra eu só quero esse pau comer
                Ele não é o meu namorado mas aquele pau eu me encarrego de exercer
                Ele tem a língua de seda e mama meu peito como se fosse um bebê
                Me come gostoso negro e gravar um filme como se fosse no B.B.B
                Unha de fibra segurando o copão
                Trem bala da V.U que quebrou seu coração
                Ele perde a postura porque eu tenho bucetão
                ________, comigo é sucção</p>
                <input type="text" name="texto" id="texto" class="texto"/>
                <button>></button>
                <small style="color: red; font-size: 30px;">ERROU, TENTE DE NOVO!</small>
            </div>`
            }
            
            const btn2 = document.getElementById('btn2')
            const texto2 = document.getElementById('texto2')
    
            btn2.addEventListener('click', () => {
                if(texto2.value == "Pussy tight, pussy clean, pussy fresh"){
                    respostas.innerHTML = `<div class="respostas">
                    <h1>Qual jogo seu incrível namorado tem mais tempo jogado?</h1>
                    <ul style="margin: 15px;">
                        <li>FIFA</li>
                        <li>League of Legends</li>
                        <li>Rocket League</li>
                        <li>Stardew Valley</li>
                    </ul>
                    <input type="text" name="texto" id="texto3" class="texto"/>
                    <button id="btn3">></button>`
                }else{
                    respostas.innerHTML = `<div class="respostas">
                    <img src="maxresdefault.jpg" style="width: 400px; height:300px; margin:20px;">
                    <h1>Qual é a frase mais icônica dessa música?</h1>
                    <p>Dica: Pon Mi</p>
                    <input type="text" name="texto" id="texto2" class="texto"/>
                    <button id="btn2">></button>
                    <small style="color: red; font-size: 30px;">ERROU, TENTE DE NOVO!</small>`
                }

                const btn3 = document.getElementById('btn3');
                const texto3 = document.getElementById('texto3');

                btn3.addEventListener('click', () => {
                    if(texto3.value == "FIFA"){
                    respostas.innerHTML =   `<div class="respostas">
                    <h1>DECODIFIQUE A PALVRA A SEGUIR</h1>
                    <p>03c70a88689ac66e63b5b735c2174f90</p>`
                    }else{
                    respostas.innerHTML =    `<div class="respostas">
                    <h1>Qual jogo seu incrível namorado tem mais tempo jogado?</h1>
                    <ul style="margin: 15px;">
                        <li>FIFA</li>
                        <li>League of Legends</li>
                        <li>Rocket League</li>
                        <li>Stardew Valley</li>
                    </ul>
                    <input type="text" name="texto" id="texto3" class="texto"/>
                    <button id="btn3">></button>
                    <small style="color: red; font-size: 30px;">ERROU, TENTE DE NOVO!</small>`
                    }



                })

            })
        
        })

        
        
}