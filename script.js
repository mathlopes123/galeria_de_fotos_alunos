// JavaScript para controlar o clique nas imagens da galeria
function toggleExpand(element) {
    // Remove expanded class de todos os outros itens
    const allItems = document.querySelectorAll(".gallery-item")
    allItems.forEach((item) => {
      if (item !== element) {
        item.classList.remove("expanded")
      }
    })
  
    // Alterna a classe expanded no item clicado
    element.classList.toggle("expanded")
  }
  
  function adicionarAluno() {
    const input = document.getElementById("nomeAluno")
    const nome = input.value.trim()
  
    if (nome === "") {
      alert("Por favor, digite um nome válido.")
      return
    }
  
    const listaAlunos = document.getElementById("listaAlunos")
  
    // Cria elemento do aluno
    const alunoTag = document.createElement("span")
    alunoTag.className = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
    alunoTag.innerHTML = `
      ${nome}
      <button onclick="removerAluno(this)" class="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none">
        ×
      </button>
    `
  
    listaAlunos.appendChild(alunoTag)
    input.value = ""
    input.focus()
  }
  
  function removerAluno(button) {
    button.parentElement.remove()
  }
  
  // Permite adicionar aluno pressionando Enter
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("nomeAluno")
    if (input) {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          adicionarAluno()
        }
      })
    }
  })
  