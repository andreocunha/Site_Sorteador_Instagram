var array = [];
var qtdPessoas = 0;

function handleFile(e) {
    var files = e, f = files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});
        
        /* DO SOMETHING WITH workbook HERE */

        var first_sheet_name = workbook.SheetNames[0];

        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];
        array = XLSX.utils.sheet_to_json(worksheet);
        qtdPessoas = array.length;
        console.log(array);
        // console.log(qtdPessoas);

        document.getElementById('qtd').innerHTML = `Número de seguidores: ${qtdPessoas}`
        verficador = true;

  };
  reader.readAsArrayBuffer(f);
}