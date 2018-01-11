<template>
	<div>
    <div class="banner shape shape-bottom">
	    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div class="container">
          <router-link class="navbar-brand text-uppercase" to="/">Tanara</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#non">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#non">Link</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin">Admin page</router-link>
              </li>
            </ul>
            <div class="form-inline ml-auto">
              <router-link class="btn btn-outline-light my-2 my-lg-0" to="/sign-up">Sign up</router-link>
              <router-link class="btn btn-outline-light my-2 my-lg-0 ml-2" to="/sign-in">Sign in</router-link>
            </div>
          </div>
        </div><!-- /.container -->
	    </nav><!-- /.navbar -->

	    <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1 class="banner-title">Tanara</h1>
            <p class="banner-description">Tanara adalah sebuah kecamatan di Kabupaten Serang, Provinsi Banten, Indonesia. Daerah ini sangat terkenal karena ulama besar, <strong>Syaikh Nawawi al-Bantani</strong>, guru bagi para ulama Indonesia dan guru besar di Mekkah, lahir di sini.</p>
            <p class="mb-4 mb-md-0"><a class="btn btn-lg btn-success" href="#non">Selanjutnya</a></p>
          </div><!-- /col -->
          <div class="col-md-4">
            <img class="banner-image" src="/images/banner-img-2.png" alt=""/>
          </div><!-- /col -->
        </div><!-- /.row -->
    </div><!-- /.container -->
	</div><!-- /.banner -->

		<section class="text-center my-5">
	    <div class="container">
        <h2 class="display-3">Wilayah</h2>
        <p class="lead mx-auto" style="max-width: 700px;">Terletak disekitar Sungai Cidurian yang bermuara ke Laut Jawa. Pada tahun 2010 wilayah ini terbagi menjadi beberapa desa.</p>
	    </div>
		</section>

		<section class="shape shape-top shape-bottom text-center text-dark bg-light">
	    <div class="container mt-5">
        <div class="row">
          <div class="col-sm-6 mb-3">
            <img class="img-fluid w-100 rounded" src="/images/lukisan-syekh-nawawi-al-bantani-oleh-kang-alam.jpg" alt="Syekh Nawawi al-Bantani">
          </div><!-- /col -->
          <div class="col-sm-6 mb-3">
            <h2 class="display-3">Ulama</h2>
            <p class="lead">Karena kemasyhurannya, <strong>Syekh Nawawi al-Bantani</strong> kemudian dijuluki Sayyid Ulama al-Hijaz (Pemimpin Ulama Hijaz), al-Imam al-Muhaqqiq wa al-Fahhamah al-Mudaqqiq (Imam yang Mumpuni ilmunya), A'yan Ulama al-Qarn al-Ram Asyar li al-Hijrah (Tokoh Ulama Abad 14 Hijriyah), hingga Imam Ulama al-Haramain, (Imam 'Ulama Dua Kota Suci).</p>
          </div><!-- /col -->
        </div><!-- /.row -->
	    </div>
		</section>

    <section class="my-5">
      <div class="container">
        <div class="row-shape">
          <div class="shape-col">
            <h3>HTML Ipsum</h3>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            <hr>
          </div><!-- /col -->
          <div class="shape-col">
            <h3>HTML Ipsum</h3>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            <hr>
          </div><!-- /col -->
          <div class="shape-col">
            <h3>HTML Ipsum</h3>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            <hr>
          </div><!-- /col -->
        </div><!-- /row -->
      </div>
    </section>

		<section class="my-5">
	    <div class="container">
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
            <div class="card text-white bg-info h-100">
              <div class="card-body">
                <h5 class="card-title">Info card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div><!-- /col -->
        </div><!-- /.row -->
	    </div>
		</section>

		<footer class="footer">
      <div class="container mt-5">
        <div class="row mb-4">
          <div class="col-sm-4">
            <h4 class="footer-title">Title One</h4>
            <nav class="footer-nav">
              <a href="#" class="footer-nav-link">Footer link</a>
              <hr>
              <a href="#" class="footer-nav-link">Footer link</a>
              <hr>
              <a href="#" class="footer-nav-link">Footer link</a>
              <hr>
              <a href="#" class="footer-nav-link">Footer link</a>
              <hr>
              <a href="#" class="footer-nav-link">Footer link</a>
            </nav>
          </div><!-- /col -->
          <div class="col-sm-4">
            <h4 class="footer-title">Title Two</h4>
            <nav class="footer-nav">
              <a href="#" class="footer-nav-link">Footer link</a>
              <hr>
              <a href="#" class="footer-nav-link">Footer link</a>
              <hr>
              <a href="#" class="footer-nav-link">Footer link</a>
              <hr>
              <a href="#" class="footer-nav-link">Footer link</a>
              <hr>
              <a href="#" class="footer-nav-link">Footer link</a>
            </nav>
          </div><!-- /col -->
          <div class="col-sm-4">
            <h4 class="footer-title">Title Three</h4>
            <nav class="footer-nav">
              <a href="#" class="footer-nav-link">Footer link</a>
              <hr>
              <a href="#" class="footer-nav-link">Footer link</a>
              <hr>
              <a href="#" class="footer-nav-link">Footer link</a>
              <hr>
              <a href="#" class="footer-nav-link">Footer link</a>
              <hr>
              <a href="#" class="footer-nav-link">Footer link</a>
            </nav>
          </div><!-- /col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </footer>

    <footer class="footer">
      <div class="container-fluid">
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
