const PI = Math.PI;
const E = Math.E;

Array.prototype.contains = function(obj) {
    for(var i = 0; i < this.lenth; ++i){
    	if(this[i] === obj){
    		return true;
    	}
    }
    return false;
}

function onBtnEqualsClicked(){
	try{
		document.getElementById("display").value = eval(document.getElementById("display").value);
	} catch(ex){
		alert("Invalid input: " + ex.message);
	}
}

function onBtnPlusMinusClicked(){
	try{
		document.getElementById("display").value = -eval(document.getElementById("display").value);
	} catch(ex){
		alert("Invalid input: " + ex.message);
	}
}

function onBtnDotClicked(){
	if(!document.getElementById("display").value.includes('.')){
		document.getElementById("display").value += '.';
	}	
}

function onBtnClearClicked(){
	document.getElementById("display").value = "";
}

function onKeyReleased(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode === 13){
    	onBtnEqualsClicked();
    } else if( keyCode === 27){
    	onBtnClearClicked();
    }
}

function sin(x){
	return Math.sin(x);
}

function cos(x){
	return Math.cos(x);
}

function tan(x){
	return Math.tan(x);
}

function exp(x){
	return Math.exp(x);
}

function log(x){
	return Math.log(x);
}

function log10(x){
	return Math.log10(x);
}

function sqrt(x){
	return Math.sqrt(x);
}

function cbrt(x){
	return Math.cbrt(x);
}