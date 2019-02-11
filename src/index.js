
const encodeBtn = document.getElementById('encodeBtn');

encodeBtn.addEventListener('click', ()=>{

	const inputOffset = document.getElementById('numberOffset');
	const inputText = document.getElementById('textToEncrypt');

	let valueText = inputText.value;
	let valueOffset = inputOffset.value;



	let finalText= cipher.encode(valueOffset, valueText);

	document.getElementById('final-offset').value = valueOffset;
	document.getElementById('final-encode-text').innerHTML= finalText;
	
	
});






/* Acá va tu código */