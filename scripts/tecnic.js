/*
* ------------------------------------------------------- LIBRAIRIE technique------------------------------------------
*
*
*/

var tc = {};

/*
*   ----- ajax : Gestion HtttRequest
*
*	@rubrique String uri 	    : url à joindre
*
*	
*/
tc.ajax = {
	
	uri : "",
	
	/* fonction httpRequest
	*
	*	@param String method    : GET ou POST
	*	@param        data   	: données à transmettre en POST ou GET ; sinon null
	*   @param        callback  : fonction à appeler sur retour réponse du serveur
	*                             -- en paramètre les données transmise par le serveur
	*/
	
	httpRequest : function( method, data , fcallback, async){
		var xmlhttp;
		
		if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp = new XMLHttpRequest();
		}
		else{// code for IE6, IE5
		  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		//sur réponse : appel de la fonction fcallback
		xmlhttp.onreadystatechange = function(){
			
			//alert(xmlhttp.readyState + ":" + xmlhttp.status + "\n" + xmlhttp.responseText );
			if ( xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.status == 0) ){
			
				
				fcall = fcallback;
				
				fcall( xmlhttp.responseText );
			}
			else{
				//alert('Erreur !!');
			}
		}
		  
		//send
		xmlhttp.open( method, this.uri, async );
		xmlhttp.send( data );	
	},
	
	end : "end"
		
};