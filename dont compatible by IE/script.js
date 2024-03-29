
var result;
function validate(input,type,msg,minLen,maxLen,idConfirm){
	try{
		var classInput=input.className;
		var str=input.value ;
				
		var validation=new Array();
		validation['text']=new RegExp('^[a-zا-ی]{0,}$','im');

		validation['eng']=new RegExp('^[0-9a-z_.-]{0,}$','im');
		
		validation['onlyNumber']=new RegExp('^[0-9]{0,}$','im');

		validation['melliCod']=new RegExp('^[0-9-]{8,}$','im');
		
		validation['notEmpty']=new RegExp('[0-9a-z_.-]{1,}','im');
		
		validation['website']=/^www.[a-z0-9]+\.[a-z]{2,5}$/gi;
				
		validation['select']=new RegExp('[^select]','im');
		
		validation['email']=/^(?:[a-z0-9%+_-]+[a-z0-9%.+_-]*[a-z0-9%+_-]+|[a-z0-9])+@[a-z0-9%.+_-]+\.[a-z]{2,6}$/i ;
		validation['date']=/^[1-2]{1}[0-9]{3}\/(?:[0]{1}[1-9]{1}|[1]{1}[0-2]{1})\/(?:[0]{1}[1-9]{1}|[1]{1}[0-9]{1}|[2]{1}[0-9]{1}|[3]{1}[0-1]{1})$/i ;
		
		if(type=='radio'){
				var nameBtn=input.name;
				var btn=document.getElementsByName(nameBtn);
				var numBtn=btn.length;
				validation['radio']=new RegExp(false,'im');			
				for(i=0;i<numBtn;i++){
					if(btn.item(i).checked){
						validation['radio']=new RegExp('','im');
						break;
					}
				}
		}
				
		var strConfirm=document.getElementById(idConfirm).value;
		validation['confirm']=(strConfirm==str) ? new RegExp('','im') : new RegExp(false,'im');

	}catch(err){}
	
	if( !validation[type].test(str)  || str.length>maxLen || str.length<minLen )
	{
		showError(classInput,msg);
		result=false;
		//return false;
	}else{
		showValid(classInput);
		//return true;
	}
	
}
function showError(classInput,msg){
	// when user enter uncorrect input, this function happen.you can change it, as u want
	var cls=document.getElementsByClassName(classInput).item(1);
	$(cls).hide();
	$(cls).addClass('err');
	$(cls).html(msg);
	$(cls).show(2000);

}
function showValid(classInput){
	// when user enter valid(corrrect) input, this function happen.you can change it, as u want
	cls=document.getElementsByClassName(classInput).item(1);
	$(cls).hide();
	$(cls).addClass('correct');
	$(cls).html('correct'); 
	$(cls).show(2000);

}
function chkValidate(form){
	result=true;
	for(key in form.elements){
		if(form.elements[key].onblur) form.elements[key].onblur();
	}

	return result ;
	
}