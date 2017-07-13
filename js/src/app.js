// Polyfill for matches() from https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
// For browsers that do not support Element.matches() or Element.matchesSelector(), 
// but carry support for document.querySelectorAll(), a polyfill exists:

if (!Element.prototype.matches) {
    Element.prototype.matches = 
        Element.prototype.matchesSelector || 
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector || 
        Element.prototype.oMatchesSelector || 
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;            
        };
}

// ------ END POLYFILL ------


function isVisible(el){
	if (el.style.display = "block") return true
	return false
}


const filterButtons = document.querySelectorAll('.filter-button');
for (let i=0; i < filterButtons.length; i++){
	const button = filterButtons[i];

	button.addEventListener('click', function(e){
		button.classList.toggle('filter-button--checked');
		filterFoodItems();
	})
}


function filterFoodItems(){
	// Found the nodelist>array trick here --> https://davidwalsh.name/nodelist-array
	const 	checkedFilters = document.querySelectorAll('.filter-button--checked'),
			foodItems = [].slice.call(document.querySelectorAll('.food-item'));
	
	// let queryString = "";
	// for (let i=0; i < checkedFilters.length; i++){
	// 	const cat = checkedFilters[i].dataset.category;
	// 	queryString += `.food-item[data-${cat}]`;
	// 	if (i != checkedFilters.length - 1) queryString += ","
	// }

	foodItems.forEach(foodItem => {
		foodItem.style.display = "none";
	})

	// // First, filter to the stadium
	const 	selectedStadiums = document.querySelectorAll('.filters__buttons--stadium .filter-button--checked'),
			selectedFood = document.querySelectorAll('.filters__buttons--food .filter-button--checked'),
			selectedRatings = document.querySelectorAll('.filters__buttons--rating .filter-button--checked');
	
	// These arrays will hold the selected categories in the form of css selector strings.
	// BUT, if there are no selections from the category, we want to show ALL, not show NONE.
	let 	stadiumCategories = selectedStadiums.length > 0 ? [] : ["*"],
			foodCategories = selectedFood.length > 0 ? [] : ["*"],
			ratingCategories = selectedRatings.length > 0 ? [] : ["*"];

	// Populate the category arrays with strings representing css selectors that would
	// select that category. FOr instance, pizza would be "[data-pizza]"
	for (let i=0; i < selectedStadiums.length; i++){
		console.log('adding stadium');
		stadiumCategories.push(`[data-${selectedStadiums[i].dataset.category}]`);
	}
	
	for (let i=0; i < selectedFood.length; i++){
		console.log('adding food')
		foodCategories.push(`[data-${selectedFood[i].dataset.category}]`);
	}

	for (let i=0; i < selectedRatings.length; i++){
		console.log('adding rating');
		ratingCategories.push(`[data-${selectedRatings[i].dataset.category}]`);
	}

	// For each food item, if it matches something from each of the categories, then display it. Else, hide it.
	foodItems.forEach(foodItem => {
		if (foodItem.matches(stadiumCategories) && foodItem.matches(foodCategories) && foodItem.matches(ratingCategories)){
			// The item matches the desired stadium(s), categories and ratings. Turn it on. 
			foodItem.style.display = "block";
		} else {
			// The item does not meet one of the criteria above. Hide it.
			foodItem.style.display = "none";
		}
	})

}