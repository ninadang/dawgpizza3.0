//File merges information from menu.js and menu.html. to
//create a dynamic menu.

$(function(){
	//console.log("ready!");
	pizzaRender(com.dawgpizza.menu.pizzas);
	drRender(com.dawgpizza.menu.drinks);
	deRender(com.dawgpizza.menu.desserts);
}); //on ready function



function pizzaRender(entries){
	var instance;
	var template = $('.pizza');
	var food = $('.food');
	$.each(entries, function(){
	    instance = template.clone();
	   	instance.find('.name').html(this.name);
	    instance.find('.desc').html(this.description);

	    var idx;
	    for(idx = 0; idx < this.prices.length; ++idx){
	    	var price = this.prices[idx]; //0, 1, 2
	    	if(idx == 0){
	    		instance.find('.pizza-s').html(price);
	    	}else if(idx == 1){
	    		instance.find('.pizza-m').html(price);
	    	}else{
	    		instance.find('.pizza-l').html(price);
	    	}
	    }
	    
	    instance.removeClass('template');
        food.append(instance);

	}); //for each pizza, input name, description, and price
}


function drRender(entries){
	var instance;
	var template = $('.drinks');
	var food = $('.food-dr');
	$.each(entries, function(){
	    instance = template.clone();
	   	instance.find('.name-dr').html(this.name);
	    instance.find('.price-dr').html(this.price);
	    
	    instance.removeClass('template');
        food.append(instance);

	}); //for each drink, input name and price
	
}

function deRender(entries){
	var instance;
	var template = $('.desserts');
	var food = $('.food-de');
	$.each(entries, function(){
	    instance = template.clone();
	   	instance.find('.name-de').html(this.name);
	    instance.find('.price-de').html(this.price);
	    
	    instance.removeClass('template');
        food.append(instance);

	}); //for each dessert, input name and price
	
}


