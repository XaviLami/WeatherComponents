<!--
    Composent affichant les données météo grâce a une api (https://weatherstack.com/documentation#language_parameter)
-->

<script>


import {ville,locations,weathers}from'./store.js'

    //let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${ville}`
    

    function handleSubmit(event){
        
        if($ville.length>3){
           
        fetch('http://api.weatherstack.com/current?access_key=a38ff5fd2a461d51c0f958eec5674643&query='+$ville).then(
        (resp) => {
            //console.log(resp)
          if (!resp.ok) {throw resp}
          return resp.json()}).then(
              (data)=>{
                  $weathers=data.current.weather_descriptions
                  $locations=data.location.name
                  //console.log($locations)
                  //console.log(weathers)
              }).catch(e=>{
                alert('Erreur : Impossible de chercher cette ville');
              })
     }
    }

</script>




<form on:submit|preventDefault={handleSubmit}>
    <div class="form-group flex-grow-1 mb-0 mr-2">
        <label for="ville" class="sr-only">Ville</label>
        <input id="ville" class="form-control form-control-lg w-100" type="search" name="ville" bind:value={$ville} placeholder="Saisissez une ville">
      </div>
      <button type="submit" class="btn btn-primary btn-lg"><span class="fas fa-search-location"></span><span class="sr-only">Chercher</span></button>
</form>
<div class="container">
    
    {#if $weathers.length > 0}
    <p>La météo à <strong>{$locations}</strong></p>
    {#each $weathers as weather}<ul><li>{weather}</li></ul>{/each}
    {/if}
</div>

<style>
    
    p{
        display: inline-block;
        padding-left: 1px;
    }
</style>
 