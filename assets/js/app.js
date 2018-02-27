/* page('ruta', callback) */
page.start()
page('/home', home); 
page('/phones', phones);
page('/camera', camera); 
page('/headphones', headphones); 
page('/computers', computers);
page({ dispatch: false })



function home(){
	$("#fromPage").empty(); 
	$("#fromPage").append (`<!--PRIMERA SECCION INICIO-->
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="assets/img/carousel1.PNG" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="assets/img/carousel2.PNG" alt="Second slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2" id="img2">
          <img src="assets/img/inicio1.PNG" alt="">
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3" id="text">
          <h2>Compra tus artículos favoritos></h2>
        </div>
      </div>
    </div>
  </section>
<!--FIN DE PRIMERA SECCION INICIO-->
<!--SEGUNDA SECCION INICIO-->
  <section>
    <div class="container">
      <div class="row">
      	<div class="col-sm-6 col-md-6 col-xl-6 col-lg-6" id="paragraph">
      		<h2><i class="fas fa-check" id="check"></i>Artículos únicos</h2>
      		<p>Tenemos millones de artículos totalmente únicos. Solo tienes que encontrar lo que sea que busques (o ese producto que tanto te ha enamorado).</p>
      	</div>
      	<div class="col-sm-6 col-md-6 col-xl-6 col-lg-6" id="paragraph">
      		<h2><i class="fas fa-check" id="check"></i>Compras seguras</h2>
      		<p>Usamos la mejor tecnología de su clase para proteger tus transacciones.</p>
      	</div>
      </div>
    </div>
  </section>
<!--FIN DE SEGUNDA SECCION INICIO-->
<!--TERCERA SECCION INICIO-->
	<section>
		<div class="container">
			<div class="row">
				<div class="col-sm-3 col-md-12 col-lg-12 col-xl-12" id="title">
					<h1>Lo más popular</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12" id="images">
					<img src="assets/img/notebook.png" alt="">
					<img src="assets/img/camara.png" alt="">
					<img src="assets/img/celular.png" alt="">
					<img src="assets/img/headphones.png" alt="">
					<img src="assets/img/camara1.png" alt="">
					<img src="assets/img/celular1.png" alt="">
				</div>
			</div>
		</div>
		
	</section>
<!--FIN DE TERCERA SECCION INICIO-->
<!--CUARTA SECCION INICIO-->
	<section>
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12" id="title">
					<h1>Búsqueda por categoría</h1>
				</div>
			</div>
			<div class="row" id="cards">
				<div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
					<div class="card" id="cards1" style="width: 10rem;">
	  				<img class="card-img-top" src="assets/img/celular1.png" alt="Card image cap">
	  			<div class="card-body">
	    			<p class="card-text"><a href="/phones">Phones</a></p>
	  			</div>
					</div>
				</div>
				<div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
					<div class="card" id="cards1" style="width: 10rem;">
	  				<img class="card-img-top" src="assets/img/camara.png" alt="Card image cap">
	  			<div class="card-body">
	    			<p class="card-text"><a href="camera">Cameras</a></p>
	  			</div>
					</div>
				</div>
				<div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
					<div class="card" id="cards1" style="width: 10rem;">
	  				<img class="card-img-top" src="assets/img/headphones.png" alt="Card image cap">
	  			<div class="card-body">
	    			<p class="card-text"><a href="/headphones">Headphones</a></p>
	  			</div>
					</div>
				</div>
				<div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
					<div class="card" id="cards1" style="width: 10rem;">
	  				<img class="card-img-top" src="assets/img/notebook.png" alt="Card image cap">
	  			<div class="card-body">
	    			<p class="card-text"><a href="/computers">Computers</a></p>
	  			</div>
					</div>
				</div>
			</div>
		</div>
	</section>
<!--FIN DE CUARTA SECCION INICIO-->
<!--QUINTA SECCION INICIO-->
	<section id="fiveSection">
		<div class="container">
			<div class="row">
				<div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
					<img src="assets/img/caja-fuerte.png" alt="" id="box">
				</div>
				<div class="col-sm-8 col-md-8 col-lg-8 col-xl-8" id="title2">
					<h1>MarkeTech te mantiene seguro</h1>
				</div>
			</div>
				<div class="row">
					<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4" id="title3">
						<h3>Confianza</h3>
						<p>Puedes leer sus reseñas y políticas, y ponerte en contacto con nosotros si tienes alguna pregunta</p>
					</div>
					<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4" id="title3">
						<h3>Seguridad a nivel mundial</h3>
						<p>La protección de tu información es la principal prioridad de nuestros expertos en seguridad</p>
					</div>
					<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4" id="title3">
						<h3>Compra de protección</h3>
						<p>Si surge algún problema, nuestro equipo de asistencia global estará a tu servicio</p>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-2">
						<img src="assets/img/llave.png" alt="" id="key">
					</div>
				</div>
		</div>
	</section>
<!--FIN DE QUINTA SECCION INICIO-->
<!--SEXTA SECCION INICIO-->
	<section id="sixSection">
		<div class="container">
			<div class="row">
				<div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
					<img src="assets/img/local.png" alt="" id="local">
				</div>
				<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6" id="text3">
					<h1>¿Qué es MarkeTech?</h1>
					<p>Somos más que un mercado</p>
					<p>Lee todo sobre nosotros    ></p>
					</div>
				<div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
					<img src="assets/img/local.png" alt="" id="local">
				</div>
			</div>
		</div>
	</section>
<!--FIN DE SEXTA SECCION INICIO-->
<!--SEPTIMA SECCION INICIO (FOOTER)-->
	<section>
		
	</section>
<!--FIN DE SEPTIMA SECCION INICIO (FOOTER)-->
`)
}


function phones() {
	$("#fromPage").empty();
	$('#principalContainer').hide();
	let dataPhone = data.phone;
	console.log(dataPhone);
	for (let i in dataPhone) {
		$("#fromPage").append(`<div class="card" style="width: 18rem; border: 1.5px solid #2ECC71;">
													  <img class="card-img-top" src="${dataPhone[i].img}" alt="${dataPhone[i].name}">
													  <div class="card-body">
													    <h5 class="card-title">${dataPhone[i].name}</h5> 
													    <p class="card-text">
													    Dimensiones: 
													    Alto: ${dataPhone[i].description.Alto}
													    <br>
													    Ancho: ${dataPhone[i].description.Ancho}
													    <br> 
													    Profundidad: ${dataPhone[i].description.Profundidad}
													    <br> </p>
													    <a href="/phone/${dataPhone[i].model}" class="btn btn-primary" id="btnView">View more</a>
													    <div>
													    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
																<input type="hidden" name="cmd" value="_s-xclick">
																<input type="hidden" name="hosted_button_id" value="">
																<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
																<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
																</form></div>
															</div>
													  </div>
													</div>`)
	}
}

function camera(){
	$("#fromPage").empty();
	$('#principalContainer').hide();
	let dataCamera = data.camera;
	console.log(dataCamera);
	for (let i in dataCamera) {
	$("#fromPage").append(`<div class="card" style="width: 18rem; border: 1.5px solid #2ECC71;">
													  <img class="card-img-top" src="${dataCamera[i].img}" alt="${dataCamera[i].name}">
													  <div class="card-body">
													    <h5 class="card-title">${dataCamera[i].name}</h5> 
													    <p class="card-text">
													     ${dataCamera[i].description}</p> 
													    <a href="/phone/${dataCamera[i].model}" class="btn btn-primary" id="btnView">View more</a>
													  </div>`)
	}
}

function headphones(){
	//Here go content for phones pages
	$("#fromPage").empty();
	$('#principalContainer').hide();
	let dataHeadphone = data.headphone;
	console.log(dataHeadphone);
	for (let i in dataHeadphone) {
	$("#fromPage").append(`<div class="card" style="width: 18rem; border: 1.5px solid #2ECC71;">
													  <img class="card-img-top" src="${dataHeadphone[i].img}" alt="${dataHeadphone[i].name}">
													  <div class="card-body">
													    <h5 class="card-title">${dataHeadphone[i].name}</h5> 
													    <p class="card-text">${dataHeadphone[i].description}</p>
													    <a href="/phone/${dataHeadphone[i].model}" class="btn btn-primary" id="btnView">View more</a>
													  </div>`)
	}
	
}

function computers(){
	$("#fromPage").empty();
	$('#principalContainer').hide();
		//Here go content for phones pages
	let dataNotebook = data.notebook;
	console.log(dataNotebook);
	for (let i in dataNotebook) {
	$("#fromPage").append(`<div class="card" style="width: 18rem; border: 1.5px solid #2ECC71;">
													  <img class="card-img-top" src="${dataNotebook[i].img}" alt="${dataNotebook[i].name}">
													  <div class="card-body">
													    <h5 class="card-title">${dataNotebook[i].name}</h5> 
													    <p class="card-text">
													    Dimensiones: 
													    Alto: ${dataNotebook[i].description.Alto}
													    <br>
													    Ancho: ${dataNotebook[i].description.Ancho}
													    <br> 
													    Profundidad: ${dataNotebook[i].description.Profundidad}
													    <br></p>
													    <a href="/phone/${dataNotebook[i].model}" class="btn btn-primary" id="btnView">View more</a>
													    <div>
															   <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
																	<input type="hidden" name="cmd" value="_s-xclick">
																	<input type="hidden" name="hosted_button_id" value=${dataNotebook[i].value}>
																	<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
																	<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
																	</form>
															</div>
													  </div>`)
	}
}

