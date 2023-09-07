const botaoAdicionar = document.getElementById('adicionar')
const botaoRemover = document.getElementById('remover')
const ul = document.querySelector('ul');
const valorInput = document.getElementById('texto')

botaoAdicionar.addEventListener('click', () => {
  const novoInput = valorInput.value
  
  if(novoInput !== ''){
    const novoItem = document.createElement('li')
    novoItem.textContent = novoInput
    ul.appendChild(novoItem)
    valorInput.value = ''
  }
})

botaoRemover.addEventListener('click', () => {
  const itensSelecionados = ul.querySelectorAll('li');
  if (itensSelecionados.length > 0) {
    ul.removeChild(itensSelecionados[itensSelecionados.length - 1])
  }
})