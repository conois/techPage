$(document).ready( ()=> {

	$(document).on('click', '.addToMyCart', (e)=> {
		console.log("click")
		let event = $(e.target).parent().parent();
		console.log(event)
		$("#addProduct").append(event)
	})

})

