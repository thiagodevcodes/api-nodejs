async function handleClick() {
    try {
        const cpf = document.querySelector("#cpf").value;
        const dadosContainer = document.getElementById('valid');
        let classText = "invalidCpf"
        
        if(cpf) {
            const res = await fetch(`http://localhost:8080/validator/${cpf}`);
            const dados = await res.json();
            let validP = "Inválido"

            if(dados.valid) {
                validP = "Válido"
                classText = "validCpf"
            }
    
            dadosContainer.innerHTML = `
                <P>Situação: <strong class=${classText}>${validP}</strong></p>
            `;
        } else {
            dadosContainer.innerHTML = `<p>Digite algum valor</p>`;
        }
    } catch(err) {
        console.log(err)
    }
}



