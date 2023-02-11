var salvar=  new Array();

class CadastroCliente {
  constructor(nome, sobrenome, nomeUsuario, email, senha, senhaConfere){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeUsuario = nomeUsuario;
    this.email = email;
    this.senha = senha;
    this.senhaConfere = senhaConfere;
    
  }
  mensagem(){
    alert("Seu cadastro foi efetuado com sucesso!" + "\n" + "\n" +
    this.nome + " " + this.sobrenome + "Seu usuario é: " + this.usuario + "\n" +
    "Sua senha é: " + this.senha);
  }
}

/* Salvar cadastros realizados */
document.querySelector('btnSalvar').onclick = function(event){
  
  var nome = document.querySelctor('#validationCustom01').value;
  var sobrenome = document.querySelector('validationCustom02').value;
  var nomeUsuario = document.querySelector('validationCustomUsername');
  var email = document.querySelector('validationCustom03').value;
  var senha = document.querySelector('validationCustom05').value;
  var senhaConfere = documente.querySelector('validationCustom06').value;
  
  if(senha != senhaConfere){
    alert("Senhas não conferem!");
  }else{
    var usuario = new
    cadastro(nome, sobrenome, email, senha, senhaConfere, nomeUsuario);
    salvar.push(usuario);
    usuario.mensagem();
    limpar();

  }

  

  


}
