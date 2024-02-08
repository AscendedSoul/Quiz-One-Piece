const perguntas = [
    {
      pergunta: 'Quem é o capitão dos Piratas do Chapéu de Palha?',
      respostas: [
        'Zoro',
        'Luffy',
        'Sanji',
      ], 
      correta: 1
    },
    {
      pergunta: 'Qual fruta do diabo Nami comeu?',
      respostas: [
        'Gomu Gomu no Mi',
        'Mera Mera no Mi',
        'Nenhuma, ela não comeu fruta do diabo',
      ], 
      correta: 2
    },
    {
      pergunta: 'Quem ensinou a Luffy o uso do Haki?',
      respostas: [
        'Shanks',
        'Rayleigh',
        'Garp',
      ], 
      correta: 1
    },
    {
      pergunta: 'Qual é o objetivo de encontrar o One Piece?',
      respostas: [
        'Se tornar o Rei dos Piratas',
        'Obter riquezas inimagináveis',
        'Descobrir a verdadeira história',
      ], 
      correta: 0
    },
    {
      pergunta: 'Quem foi o primeiro inimigo de Luffy no anime?',
      respostas: [
        'Crocodile',
        'Alvida',
        'Arlong',
      ], 
      correta: 1
    },
    {
      pergunta: 'Qual é o nome do arco em que Luffy e seus amigos entram na Grand Line?',
      respostas: [
        'Arco de Alabasta',
        'Arco de Skypiea',
        'Arco de Reverse Mountain',
      ], 
      correta: 2
    },
    {
      pergunta: 'Quem é conhecido como "O Cirurgião da Morte"?',
      respostas: [
        'Law',
        'Kid',
        'Blackbeard',
      ], 
      correta: 0
    },
    {
      pergunta: 'Qual é a principal habilidade de combate de Brook?',
      respostas: [
        'O uso de duas espadas',
        'O controle do gelo',
        'A música que hipnotiza os inimigos',
      ], 
      correta: 2
    },
    {
      pergunta: 'O que é o "Novo Mundo"?',
      respostas: [
        'A segunda metade da Grand Line',
        'Um parque de diversões para piratas',
        'Um novo continente descoberto',
      ], 
      correta: 0
    },
    {
      pergunta: 'Quem é o guardião da Floresta da Baleia em Zou?',
      respostas: [
        'Pedro',
        'Zunesha',
        'Nekomamushi',
      ], 
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    //remove a aparição do "item A".
    quizItem.querySelector('dl dt').remove()
    
      quiz.appendChild(quizItem) 
  }