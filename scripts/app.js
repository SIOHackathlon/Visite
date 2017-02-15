/**
* Application stage : préfixe st
*
*/

StageModel = function (){
	
	var self = this;
	
	self.stages = ko.observableArray(null);
	
	self.refresh = function(stages){
	
		if ( stages == null ){
			st.chargeur.stages(self.refresh);
			return;
		}
		
		s = JSON.parse(stages);
		
		self.stages(s); // pour mettre à jour les données stages
	};
	
	self.refresh(null);
	
};

var st= {};
st.chargeur = {
	uri : "http://127.0.0.1/Hackathon/Thierry",
	
	stages : function (callback){
		fcallback = callback;
		
		tc.ajax.uri = this.uri + "/stage/stage.json";
		
		tc.ajax.httpRequest("GET", null, fcallback,true);
	},

	end : "end"
};


/**
* Démarrage des services
*
*/
var sm = new StageModel();

ko.applyBindings(sm);


//--------------------------------------------------- NO MANS LAND --------------------------------

/*
var ViewModel = function AppViewModel() {
	var self = this;
    self.nom = ko.observable("Charles techer");
    self.entreprise = ko.observable("Legrand");
	self.libelle = ko.computed(function() {        
        return self.nom();
    }, self);
};
ko.applyBindings(new ViewModel());
*/

/*var Stage = function(nom, entreprise) {
	var self = this;
    self.nom = nom;
    self.entreprise = entreprise;
};*/

//return "[{\"nom\":\"Annabelle\",\"entreprise\":\"Legrand\"},{\"nom\":\"Charles\",\"entreprise\":  \"Legrand\"},{\"nom\":\"Agnes\",\"entreprise\":  \"Ordipointcom\"}]";
