function adicionarPlaca() {
  const nome = document.getElementById("nome").value;
  const sexo = document.getElementById("sexo").value;
  const armario = document.getElementById("armario").value;

  if (nome && armario) {
    const container = document.getElementById("placas-container");

    for (let i = 0; i < 2; i++) {
      // Adiciona duas cópias
      const div = document.createElement("div");
      div.className = `placa ${sexo.toLowerCase()}`; // Adiciona classe com base no sexo
      div.innerHTML = `<p class="placa-armario">${armario}</p><p class="placa-nome">${nome}</p>`;
      container.appendChild(div);
    }

    document.getElementById("nome").value = "";
    document.getElementById("sexo").value = "Masculino";
    document.getElementById("armario").value = "";
  } else {
    alert("Preencha todos os campos.");
  }
}
