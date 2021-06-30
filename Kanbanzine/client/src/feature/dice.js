var form = document.getElementById("DiceChoiceForm");
var compteur = 4;


function DiceNumberSubmit(){
	/*
	var diceTest = document.createElement('img');
	diceTest.src = 'desIMG/'+dice+'/des'+numero+'.png';
	document.main.appendChild(diceTest);
	*/
	var diceNum1 = document.querySelector('#diceNumber1').value;
    var diceNum2 = document.querySelector('#diceNumber2').value;
    var diceNum3 = document.querySelector('#diceNumber3').value;
	var diceNum4 = document.querySelector('#diceNumber4').value;
	return [diceNum1, diceNum2, diceNum3, diceNum4];
}

document.querySelector('#btnLancerDes').addEventListener('click', function() {
	if(compteur > 0)
	{
		compteur--;
		var container = document.getElementById("dieContainer");
		var html = "", total1 = 0, total2 = 0, total3 = 0, total4 = 0, total = 0;
        var diceNum = DiceNumberSubmit();
		var diceNum1 = diceNum[0];
        var diceNum2 = diceNum[1];
        var diceNum3 = diceNum[2];
		var diceNum4 = diceNum[3];

		if(diceNum1 > 0)
		{
			html +='<div>';
			for (var i = 0; i < diceNum1; i++) 
			{			
				var numero1 = Math.ceil(Math.random()*3);
				html +=
					'<img class="img-fluid" src="src/assets/desIMG/1/des' + numero1 + '.png"/>';
				//document.querySelector('#ImgDes').src='desIMG/'+dice+'/des'+numero+'.png';
				total1 += numero1;
			}
			html +='</div>';
		}
        if(diceNum2 > 0)
		{
			html +='<div>';
			for (var i = 0; i < diceNum2; i++) 
			{			
				var numero2 = Math.ceil(Math.random()*3);
				html +=
					'<img class="img-fluid" src="src/assets/desIMG/2/des' + numero2 + '.png"/>';
				//document.querySelector('#ImgDes').src='desIMG/'+dice+'/des'+numero+'.png';
				total2 += numero2;
			}
			html +='</div>';
		}
		if(diceNum3 > 0)
		{
			html +='<div>';
			for (var i = 0; i < diceNum3; i++) 
			{			
				var numero3 = Math.ceil(Math.random()*3);
				html +=
					'<img class="img-fluid" src="src/assets/desIMG/3/des' + numero3 + '.png"/>';
				//document.querySelector('#ImgDes').src='desIMG/'+dice+'/des'+numero+'.png';
				total3 += numero3;
			}
			html +='</div>';
		}
		if(diceNum4 > 0)
		{
			var numero4 = Math.ceil(Math.random()*3);
			html +=
				'<div><img class="img-fluid" src="src/assets/desIMG/4/des' + numero4 + '.png"/></div>';
			//document.querySelector('#ImgDes').src='desIMG/'+dice+'/des'+numero+'.png';
			total4 = numero4;
		}

		total = total1 + total2 + total3;
		html += 
		'<div>Total bleu: ' + total1 + '</div>' +
		'<div>Total gris: ' + total2 + '</div>' +
		'<div>Total jaune: ' + total3 + '</div>' +
		'<div>Résultat total: ' + total + '</div>';
	}
	else
	{
		document.getElementById("btnLancerDes").disabled=true;
	}
	container.innerHTML = html;
    
});

document.querySelector('#btnResetLancer').addEventListener('click', function() {
	compteur = 4;
	document.getElementById("btnLancerDes").disabled=false;
});