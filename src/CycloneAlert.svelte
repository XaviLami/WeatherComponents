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
-->


<script>
import App from "./App.svelte";




    let fichierzip = 'http://vigilance.meteofrance.com/data/vigilance_OM.zip'
    let date = Date();
    let alertTxt= "./WXFP01_LFVP_.txt"
    let alertPdf = "/vigilance_OM/PBVB99_TFFR_.pdf"
    let alertXml = "vigilance_OM/NXFR33_TFFF_.xml"

     //let url_checksum = 'http://vigilance2019.meteofrance.com/data/vigilance_OM_controle.txt'
     
     


</script>
    <h1>Vigilance cyclonique en temps réel</h1>   
    

<div>
    <embed src={alertPdf} width=400 height=400 type='application/pdf'/>
</div>



