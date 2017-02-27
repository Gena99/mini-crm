function afficherListePersonnes(customers){
	$('.ui.three.column.centered.grid').html('');
	customers.forEach(function(customer){
        	$('.ui.three.column.centered.grid').append(`
        	<div class="card">
			    <div class="content">
			      <div class="header">` + customer.first_name + '' + customer.last_name+ `</div> 
			      <div class="meta">`+ customer.company + `</div>
			      <div class="description">
			        `+ customer.description + `
			      </div>
			    </div>
			  </div>
			  `);
        });
}

$(document).ready(function(){
    
    var serverUrl = 'http://localhost:3010';

    $.get(serverUrl + '/recupererPersonnes', function(data, err){
        console.log(data);
        afficherListePersonnes(data.customers);
        
    });


    $('#enregistrer').click(function(){
    	var nouvellePersonne = {};
    	nouvellePersonne.first_name = $('#prenom').val();
    	nouvellePersonne.last_name = $('#nom').val();
    	nouvellePersonne.company = $('#societe').val();
    	nouvellePersonne.description = $('#description').val();

    	//console.log(nouvellePersonne);
    	$.post(serverUrl + '/enregistrerPersonne', nouvellePersonne, function( data ) {
			console.log(data);
			afficherListePersonnes(data.customers);
		});
    });



});
