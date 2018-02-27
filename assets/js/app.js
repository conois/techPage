
/* page('ruta', callback) */
page('/#', home); 
page('/phones', phones); 
page('/camera', camera); 
page('/headphones', headphones); 
page('/computers', computers);
page({ dispatch: false })



function home(){
	$("#fromPage").
	$("#fromPage").append
}


function phones() {
	//Here go content for phones pages 
	document.querySelector("p").textContent = 'viewing phones' 
	let i = 0;
	let phoneOne = `
		<div class="row">
			<div class="col-sm-4">
				<img src="${data.phone[0].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.phone[1].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.phone[2].img}" alt="" />
			</div>
		</div>
	`;
	let phoneTwo = `
		<div class="row">
			<div class="col-sm-4">
				<img src="${data.phone[3].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.phone[4].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.phone[5].img}" alt="" />
			</div>
		</div>
	`;
	console.log(phoneOne);
	$('#fromPage').append(phoneOne);
	$('#fromPage').append(phoneTwo);
}


function camera(){
	//Here go content for phones pages 
	document.querySelector("p").textContent = 'viewing camera' 
	let i = 0;
	let cameraOne = `
		<div class="row">
			<div class="col-sm-4">
				<img src="${data.camera[0].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.camera[1].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.camera[2].img}" alt="" />
			</div>
		</div>
	`;
	let cameraTwo = `
		<div class="row">
			<div class="col-sm-4">
				<img src="${data.camera[3].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.camera[4].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.camera[5].img}" alt="" />
			</div>
		</div>
	`;
	console.log(cameraOne);
	$('#fromPage').append(cameraOne);
	$('#fromPage').append(cameraTwo);
}

function headphones(){
	//Here go content for phones pages 
	document.querySelector("p").textContent = 'viewing headphones' 
		let i = 0;
	let headphoneOne = `
		<div class="row">
			<div class="col-sm-4">
				<img src="${data.headphone[0].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.headphone[1].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.headphone[2].img}" alt="" />
			</div>
		</div>
	`;
	let headphoneTwo = `
		<div class="row">
			<div class="col-sm-4">
				<img src="${data.headphone[3].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.headphone[4].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.headphone[5].img}" alt="" />
			</div>
		</div>
	`;
	console.log(headphoneOne);
	$('#fromPage').append(headphoneOne);
	$('#fromPage').append(headphoneTwo);
}

function computers(){
	//Here go content for phones pages 
	document.querySelector("p").textContent = 'viewing computers' 
	let i = 0;
	let computerOne = `
		<div class="row">
			<div class="col-sm-4">
				<img src="${data.notebook[0].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.notebook[1].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.notebook[2].img}" alt="" />
			</div>
		</div>
	`;
	let computerTwo = `
		<div class="row">
			<div class="col-sm-4">
				<img src="${data.notebook[3].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.notebook[4].img}" alt="" />
			</div>
			<div class="col-sm-4">
				<img src="${data.notebook[5].img}" alt="" />
			</div>
		</div>
	`;
	console.log(computerOne);
	$('#fromPage').append(computerOne);
	$('#fromPage').append(computerTwo);
}