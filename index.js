
const $textIn = document.getElementById('textIn'),
    $btnEncriptar = document.getElementById('btnEncriptar'),
    $bntDesencriptar = document.getElementById('btnDesencriptar'),
    $textOut = document.getElementById('textOut'),
    $desencriptar = document.getElementById('desencriptar'),
	$btnCopiar = document.getElementById(`btnCopiar`),
    $desencriptar2 = document.getElementById('desencriptar2');

	
	function encriptar() {
		let text = $textIn.value;
		text = text
		  .replace(/e/gi, "enter")
		  .replace(/i/gi, "imes")
		  .replace(/a/gi, "ai")
		  .replace(/o/gi, "ober")
		  .replace(/u/gi, "ufat");
		  $textOut.value = text;
	  }

	function desencriptar() {
		let text = $textIn.value;
		text = text
		  .replace(/enter/gi, "e")
		  .replace(/imes/gi, "i")
		  .replace(/ai/gi, "a")
		  .replace(/ober/gi, "o")
		  .replace(/ufat/gi, "u");
		  $textOut.value = text;
	  }

    $btnEncriptar.onclick = async () => {
		if (!$textIn.value) {
			return alert("No hay texto para encriptar");
		}
		if ($textIn.value.match(/^[a-z ¡¿?!.\s ]*$/)) {
		  encriptar();
		}else{
			return alert (`Solo letras minusculas y sin acentos.`);
		}
		encriptar();
		$desencriptar.style.display = "none";
		$desencriptar2.style.display = "block";
		$textIn.value = "";
		
		
	}
	$bntDesencriptar.onclick = async () => {
		
		let textoPlano = $textIn.value;
		if (!textoPlano) {
			return alert("No hay texto para desencriptar");
		}
		$desencriptar.style.display = "none";
		$desencriptar2.style.display = "block";		
		desencriptar();
		}
	
	$btnCopiar.onclick = async () => {
		navigator.clipboard.writeText($textOut.value);
		$textOut.value = "";
		return alert (`texto copia en la papelera`);
	}
