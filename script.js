class Produto {
  constructor() {
    this.id = 1
    this.arrayProdutos = []
  }

  Adicionar() {
    let produto = this.LerDados()
    if (this.Validar(produto)) {
      this.salvar(produto)
    }
    this.listar()
  }

  LerDados() {
    let produto = {}

    produto.id = this.id
    produto.nomeProduto = document.getElementById('nome_produto').value
    produto.precoProduto = document.getElementById('preco_produto').value

    return produto
  }

  Validar(produto) {
    let mensagem = ''

    if (produto.nomeProduto == '') {
      mensagem += 'Insira o nome do produto \n'
    }
    if (produto.precoProduto == '') {
      mensagem += 'Insira o preço do produto \n'
    }
    if (mensagem != '') {
      alert(mensagem)
      return false
    }
    return true
  }

  salvar(produto) {
    this.arrayProdutos.push(produto)
    this.id++
    this.Cancelar()
  }

  listar() {
    let tbody = document.getElementById('body_table')
    tbody.innerText = ''

    for (let i = 0; i < this.arrayProdutos.length; i++) {
      let tr = tbody.insertRow()
      let td_id = tr.insertCell()
      let td_nome = tr.insertCell()
      let td_preco = tr.insertCell()
      let td_delete = tr.insertCell()

      td_id.innerText = this.arrayProdutos[i].id
      td_nome.innerText = this.arrayProdutos[i].nomeProduto
      td_preco.innerText = this.arrayProdutos[i].precoProduto

      let imgDelete = document.createElement('img')
      imgDelete.src = './images/lixeira.png'
      imgDelete.setAttribute(
        'onclick',
        'produto.deletar('+ this.arrayProdutos[i].id +')'
      )

      td_delete.appendChild(imgDelete)
    }
  }

  Cancelar() {
    document.getElementById('nome_produto').value = ''
    document.getElementById('preco_produto').value = ''
  }

  deletar(id) {
    let tbody = document.getElementById('body_table')
    for (let i = 0; i < this.arrayProdutos.length; i++) {
      if (this.arrayProdutos[i].id == id) {
        this.arrayProdutos.splice(i, 1)
        tbody.deleteRow(i)
      }
    }
  }
}

var produto = new Produto()
