function getDadosEnderecoPorCEP(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);

    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let dadosJsonText = xmlHttp.responseText;
            let dadosJsonObj = JSON.parse(dadosJsonText);

            let logradouro = dadosJsonObj.logradouro;
            let bairro = dadosJsonObj.bairro;
            let localidade = dadosJsonObj.localidade;
            let uf = dadosJsonObj.uf;
            
            document.getElementById('endereco').value = logradouro;
            document.getElementById('bairro').value = bairro;
            document.getElementById('cidade').value = localidade;
            document.getElementById('uf').value = uf;
        }
    }

    xmlHttp.send();
}