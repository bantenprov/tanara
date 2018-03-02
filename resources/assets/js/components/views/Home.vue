<template>
	<div>
    <div class="home-header">
      <div class="container">
  	    <nav class="home-header-navbar navbar navbar-expand-lg navbar-dark bg-transparent">
          <router-link class="navbar-brand d-flex flex-row align-items-center text-uppercase" to="/" exact>
            <img class="mr-2" src="/images/logo.png" width="36" height="36">
            <span>Tanara</span>
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'sign-up' }"><i class="fa fa-user-plus" aria-hidden="true"></i> Create account</router-link>
              </li>
            </ul>
          </div>
  	    </nav><!-- /.navbar -->

        <div class="home-header-content">
          <h1 class="home-header-title">Tanara</h1>
          <p class="home-header-description mb-5">Tanara adalah sebuah kecamatan di Kabupaten Serang, Provinsi Banten, Indonesia. Daerah ini sangat terkenal karena ulama besar, <strong>Syaikh Nawawi al-Bantani</strong>, guru bagi para ulama Indonesia dan guru besar di Mekkah, lahir di sini.</p>
          <p class="mb-0">
            <router-link class="btn btn-lg btn-light d-block d-sm-inline-block px-5 mx-2 mb-3 mb-sm-0" :to="{ name: 'dashboard' }"><i class="fa fa-th-large" aria-hidden="true"></i> Dashboard</router-link>
            <router-link class="btn btn-lg btn-outline-light d-block d-sm-inline-block px-5 mx-2 mb-3 mb-sm-0" :to="{ name: 'sign-in' }"><i class="fa fa-sign-in" aria-hidden="true"></i> Sign in</router-link>
          </p>
        </div>
      </div><!-- /.container -->

      <svg viewBox="0 0 1280 70" preserveAspectRatio="none" id="homeHeaderCurve" role="presentation" aria-hidden="true">
        <polygon points="1280 0 1280 70 0 70"></polygon>
      </svg>
	  </div><!-- /.banner -->

		<section class="home-section home-section-1">
	    <div class="container">
        <h2>Wilayah</h2>
        <p class="lead">Terletak disekitar Sungai Cidurian yang bermuara ke Laut Jawa. Pada tahun 2010 wilayah ini terbagi menjadi beberapa desa.</p>
        <img class="home-section-img" src="https://placehold.it/1200x630/777/eee/?text=IMAGE" alt="Image">
	    </div>
      <svg viewBox="0 0 1280 70" preserveAspectRatio="none" id="homeSection1Curve" role="presentation" aria-hidden="true">
        <polygon points="1280 0 1280 70 0 70"></polygon>
      </svg>
		</section>

		<section class="home-section home-section-2">
	    <div class="container">
        <h2>Ulama</h2>
        <p class="lead">Karena kemasyhurannya, <strong>Syekh Nawawi al-Bantani</strong> kemudian dijuluki Sayyid Ulama al-Hijaz (Pemimpin Ulama Hijaz), al-Imam al-Muhaqqiq wa al-Fahhamah al-Mudaqqiq (Imam yang Mumpuni ilmunya), A'yan Ulama al-Qarn al-Ram Asyar li al-Hijrah (Tokoh Ulama Abad 14 Hijriyah), hingga Imam Ulama al-Haramain, (Imam 'Ulama Dua Kota Suci).</p>
	      <img class="home-section-img" src="https://placehold.it/1200x630/eee/777/?text=IMAGE" alt="Image">
      </div>
      <svg viewBox="0 0 1280 70" preserveAspectRatio="none" id="homeSection2Curve" role="presentation" aria-hidden="true">
        <polygon points="1280 0 1280 70 0 70"></polygon>
      </svg>
		</section>

		<section class="home-section home-section-3">
	    <div class="container">
        <h2>Talk Less Do More</h2>
        <div class="row">
          <div class="col-sm-4 mb-3">
            <div class="card text-white bg-primary h-100">
              <div class="card-body">
                <h5 class="card-title">Primary card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div><!-- /col -->
          <div class="col-sm-4 mb-3">
            <div class="card text-white bg-success h-100">
              <div class="card-body">
                <h5 class="card-title">Success card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div><!-- /col -->
          <div class="col-sm-4 mb-3">
            <div class="card text-white bg-warning h-100">
              <div class="card-body">
                <h5 class="card-title">Info card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div><!-- /col -->
        </div><!-- /.row -->
	    </div>
      <svg viewBox="0 0 1280 70" preserveAspectRatio="none" id="homeSection3Curve" role="presentation" aria-hidden="true">
        <polygon points="1280 0 1280 70 0 70"></polygon>
      </svg>
		</section>

		<footer class="footer">
      <div class="container mt-5">
        <div class="row mb-4">
          <div class="col-md-3 mb-3">
            <h4 class="footer-title">Title One</h4>
            <ul class="footer-nav">
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
            </ul>
          </div><!-- /col -->
          <div class="col-md-3 mb-3">
            <h4 class="footer-title">Title Two</h4>
            <ul class="footer-nav">
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
            </ul>
          </div><!-- /col -->
          <div class="col-md-3 mb-3">
            <h4 class="footer-title">Title Three</h4>
            <ul class="footer-nav">
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Footer link</a></li>
            </ul>
          </div><!-- /col -->
          <div class="col-md-3 mb-3">
            <h4 class="footer-title">Title Four</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          </div><!-- /col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </footer>

    <footer class="footer">
      <div class="container">
        <ul class="footer-links text-center">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
        </ul>
        <div class="footer-description text-center">
          <p><i class="fa fa-code" aria-hidden="true"></i> with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://github.com/bantenprov">@bantenprov</a></p>
        </div>
      </div><!-- /.container-fluid -->
    </footer>

	</div>
</template>
