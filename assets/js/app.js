
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
		<div class="container">
			<div class="row">
				<div class="col-sm-2 col-md-2 col-lg-2 col-xl-2" id="footer1">
					<h6>Compras</h6>
					<ul>
						<li>Tarjetas de regalo</li>
						<li>Blog de MarkeTech</li>
						<li>Wholesale</li>
					</ul>
				</div>

				<div class="col-sm-2 col-md-2 col-lg-2 col-xl-2" id="footer1">
					<h6>Presentación</h6>
					<ul>
						<li>MarkeTech, Inc</li>
						<li>Políticas</li>
						<li>Inversores</li>
						<li>Empleo</li>
						<li>Prensa</li>
						<li>Información Legal</li>
					</ul>
				</div>

				<div class="col-sm-2 col-md-2 col-lg-2 col-xl-2" id="footer1">
					<h6>Sigue a MarkeTech</h6>
					<ul>
						<li><i class="fab fa-facebook-square"></i> Facebook</li>
						<li><i class="fab fa-instagram"></i> Instagram</li>
						<li><i class="fab fa-pinterest"></i> Pinterest</li>
						<li><i class="fab fa-twitter"></i> Twitter</li>
					</ul>
				</div>
			</div>
		</div>
		<p id="markeInc">&#169; 2018 MarkeTech, Inc.</p>
		<hr id="line1">
	</section>
<!--FIN DE SEPTIMA SECCION INICIO (FOOTER)-->

<!--OCTAVA SECCION INICIO (FOOTER)-->
	<section id="section8">
		<div class="container" id="container8">
			<div class="row">
				<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6" id="footer2">
					<h6><img src="assets/img/market1.png" alt="" id="logo2"> Encuentra lo que buscas en un click!</h6>
				</div>

				<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6" id="footer3">
					<ul>
						<li>Condiciones de Uso</li>
						<li>Privacidad</li>
						<li>Cookies</li>
						<li>Anuncios basados en intereses</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
<!--FIN DE OCTAVA SECCION INICIO (FOOTER)-->
`)
}


function phones() {
	$("#fromPage").empty(); 
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
	$("#fromPage").empty(); 
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
	$("#fromPage").empty(); 
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
	$("#fromPage").empty(); 
		//Here go content for phones pages 
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