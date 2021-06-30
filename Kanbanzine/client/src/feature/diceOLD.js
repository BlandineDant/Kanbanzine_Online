var form = document.getElementById("DiceChoiceForm");
var compteur = 4;


function DiceChoiceSubmit(){
	var diceChoice1 = document.querySelector('#diceColor1').value;
    var diceChoice2 = document.querySelector('#diceColor2').value;
    var diceChoice3 = document.querySelector('#diceColor3').value;
	return [diceChoice1, diceChoice2, diceChoice3];
}

function DiceNumberSubmit(){
	/*
	var diceTest = document.createElement('img');
	diceTest.src = 'desIMG/'+dice+'/des'+numero+'.png';
	document.main.appendChild(diceTest);
	*/
	var diceNum1 = document.querySelector('#diceNumber1').value;
    var diceNum2 = document.querySelector('#diceNumber2').value;
    var diceNum3 = document.querySelector('#diceNumber3').value;
	var diceNum3 = document.querySelector('#diceNumber3').value;
	return [diceNum1, diceNum2, diceNum3];
}

document.querySelector('#btnLancerDes').addEventListener('click', function() {
	if(compteur > 0)
	{
		compteur--;
		var container = document.getElementById("dieContainer");
		var html = "";
        var diceColor = DiceChoiceSubmit();
		var diceColor1= diceColor[0];
        var diceColor2= diceColor[1];
        var diceColor3= diceColor[2];
        var diceNum = DiceNumberSubmit();
		var diceNum1 = diceNum[0];
        var diceNum2 = diceNum[1];
        var diceNum3 = diceNum[2];
		for (var i = 0; i < diceNum1; i++) 
		{			
			var numero1 = Math.ceil(Math.random()*3);
			html +=
				'<div><img src="src/assets/desIMG/' + diceColor1 + '/des' + numero1 + '.png"/></div>';
			//document.querySelector('#ImgDes').src='desIMG/'+dice+'/des'+numero+'.png';
		}
        for (var i = 0; i < diceNum2; i++) 
		{			
			var numero2 = Math.ceil(Math.random()*3);
			html +=
				'<div><img src="src/assets/desIMG/' + diceColor2 + '/des' + numero2 + '.png"/></div>';
		}
        for (var i = 0; i < diceNum3; i++) 
		{			
			var numero3 = Math.ceil(Math.random()*3);
			html +=
				'<div><img src="src/assets/desIMG/' + diceColor3 + '/des' + numero3 + '.png"/></div>';
		}
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