<!--
    Compossant qui affiche en temps réel les alerts météorologique

    Voir sur Données publiques Vigilance Cyclone Temps Réel 
    -Fichier mis à jour chaque minute (créer une condition qui permet de recuperer les fichiers que quand ils ont changé) : 
     http://vigilance.meteofrance.com/data/vigilance_OM.zip.
 
     Notes: 
      Faire un script qui vérifie les changements de checksum, si le checksum est différent de l'ancien télécharger le nouveau fichier zip.
        Dans le fichier zip, récuperer le fichier de vigilance de la Guadeloupe et l'afficher.

        Faire un script qui récupere le fichier XML ("NXFR33_TFFF_.xml"), et le transforme en JSON.
            Parcourir le JSON pour récuperer l'état de vigilance et l'afficher.

    Regarder si ce n'est pas possible de passer par le store.js
-->


<script>


import App from "./App.svelte";




    let fichierzip = 'http://vigilance.meteofrance.com/data/vigilance_OM.zip';
    let alertTxt= "./WXFP01_LFVP_.txt";
    let alertPdf = "/vigilance_OM/PBVB99_TFFR_.pdf";
    //let alertXml = "vigilance_OM/NXFR33_TFFF_.xml"

     //let url_checksum = 'http://vigilance2019.meteofrance.com/data/vigilance_OM_controle.txt'


     var request = new XMLHttpRequest();
    request.open("GET", "vigilance_OM/NXFR33_TFFF_.xml",false);
	
    request.send();
	console.log(request.responseXML.activeElement)
        var xml = request.responseXML;
       
     
     function xmlToJson(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};
var XmlNode = new DOMParser().parseFromString({xml}
  , 'text/xml');
  console.log(xmlToJson(XmlNode));


</script>
    <h1>Vigilance cyclonique en temps réel</h1>   
    

<div>
    <embed src={alertPdf} width=400 height=400 type='application/pdf'/>
</div>



