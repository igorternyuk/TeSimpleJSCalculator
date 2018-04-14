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
	document.getElementById("display").value = "0";
}
