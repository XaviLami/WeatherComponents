<!--
    Composent permettant de lister les abris-sur

    Récuper l'url provenant du site de la pref 
    Convertir avec un ocr pdf l'url (ceci permet de faire des recherches directement sur le document)

-->

<script >
    
   let url = 'https://www.guadeloupe.gouv.fr/content/download/17100/110156/file/Tableau%20%20actualis%C3%A9%20des%20abris%20s%C3%BBrs%202019.pdf'

   function handleGet(){
       window.open(url,"_blank",null);
    }
    
</script>


<div>
    <h1> Document répertoriant les abris-sûrs en Guadeloupe</h1>
    
    <embed src={url} width=800 height=900 type='application/pdf'/>
</div>
<div>
    <button on:click={handleGet}>Télécharger le document</button>
</div>

<style>
  
</style>
