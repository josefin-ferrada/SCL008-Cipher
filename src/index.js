
const encodeBtn = document.getElementById('encodeBtn');

encodeBtn.addEventListener('click', (event)=>{

	event.preventDefault()

	const inputOffset = document.getElementById('numberOffset');
	const inputText = document.getElementById('textToEncrypt');

	let valueText = inputText.value;
	let valueOffset = inputOffset.value;



	let finalText= cipher.encode(valueOffset, valueText);

		if(finalText == false){

			
			document.getElementById('alert-parameter-missing').style.display="block";
		}

		else{

			document.getElementById('final-offset').value = valueOffset;
			document.getElementById('final-encode-text').value= finalText;
			document.getElementById('section-final-encode').scrollIntoView();
			document.getElementById('alert-parameter-missing').style.display="none";
		}

	
	
});


const decodeBtn = document.getElementById("decodeBtn");

decodeBtn.addEventListener('click',(event)=>{

	event.preventDefault()

	const inputOffset = document.getElementById('numberOffsetToShow');
	const inputText = document.getElementById('textToShow');
	let valueText = inputText.value;
	let valueOffset = inputOffset.value;

		let finalText = cipher.decode(valueOffset,valueText);

		if(finalText == false){


			document.getElementById('alert-parameter-missing2').style.display="block";
		}

		else{

		document.getElementById('final-show-offset').value= valueOffset;
		document.getElementById('final-decode-text').value= finalText;
		document.getElementById('section-final-decode').scrollIntoView();
		document.getElementById('alert-parameter-missing2').style.display="none";
		}

	

	
});

const ocultEncode = document.getElementById('btn');

ocultEncode.addEventListener('click', () => {



	document.getElementById('section3').style.display="none";
	document.getElementById('section-final-decode').style.display="none";
});


const ocultDecode = document.getElementById('btn2');

ocultDecode.addEventListener('click', () => {

	document.getElementById('section2').style.display="none";
	document.getElementById('section-final-encode').style.display="none";


});


const refreshBtn1 = document.getElementById('back');

refreshBtn1.addEventListener('click', () => {
	
	document.getElementById('textToShow').value= "";
	document.getElementById('numberOffsetToShow').value= "";
	document.getElementById('textToEncrypt').value= "";
	document.getElementById('numberOffset').value= "";
	document.getElementById('section3').style.display="block";
	document.getElementById('section-final-decode').style.display="block";
	document.getElementById('section2').style.display="block";
	document.getElementById('section-final-encode').style.display="block";

});


const refreshBtn2 = document.getElementById('back-btn2');

refreshBtn2.addEventListener('click', () => {
	
	document.getElementById('textToEncrypt').value= "";
	document.getElementById('numberOffset').value= "";
	document.getElementById('textToShow').value= "";
	document.getElementById('numberOffsetToShow').value= "";
	document.getElementById('section3').style.display="block";
	document.getElementById('section-final-decode').style.display="block";
	document.getElementById('section2').style.display="block";
	document.getElementById('section-final-encode').style.display="block";

});


const copyBtnEncode =document.getElementById('copy-button2');

copyBtnEncode.addEventListener('click', () => {

	document.getElementById('final-encode-text').select();
	document.execCommand('copy');
	

});


const copyBtnDecode = document.getElementById('copy-button1');

copyBtnDecode.addEventListener('click', ()=>{

	document.getElementById('final-decode-text').select();
	document.execCommand('copy');



});













/* Acá va tu código */