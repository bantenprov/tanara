<template>
    <div>
      <section class="text-center">
          <div class="container">
              <h1 class="display-3">About</h1>
              <p class="lead">Contoh template untuk vuejs. template ini masih dalam tahap pengembangan. silahkan untuk merubah atau memperbaiki template yang telah dibuat ini. saya mengharapkan bantuannya karena masih dalam tahap percobaan dan belajar. terimakasih</p>
          </div>
      </section>
      <section class="shape shape-top shape-bottom text-center text-white bg-success">
          <div class="container mt-5">
              <div class="row">
                  <div class="col-sm-6 mb-3">
                      <img class="img-fluid w-100" src="http://drpattydental.com/wp-content/uploads/2017/05/placeholder.png" alt="">
                  </div><!-- /col -->
                  <div class="col-sm-6 mb-3">
                      <h1 class="display-3">Image</h1>
                      <p class="lead">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                  </div><!-- /col -->
              </div><!-- /.row -->
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
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },

        methods: {
            redirect() {
                this.$router.push({
                    name: 'homepage'
                })
            }
        }
    }
</script>
