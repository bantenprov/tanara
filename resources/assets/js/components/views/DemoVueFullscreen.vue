<template>
  <div>

    <div class="alert alert-info mb-5" role="alert">
      <ul class="list-unstyled mb-0">
        <li>Package name: <code>vue-fullscreen</code></li>
        <li>Link: <a class="alert-link" href="https://github.com/mirari/vue-fullscreen" target="_blank">GitHub</a></li>
      </ul>
    </div>

    <div class="fullscreen-example-1 mb-3">
      <div class="card">
        <div class="card-header d-flex flex-row align-items-center justify-content-between">
          <span>Short</span>
          <button class="btn btn-sm btn-secondary ml-1" type="button" @click="fullscreen1">
            <i class="fa fa-arrows-alt" aria-hidden="true"></i> Fullscreen
          </button>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div><!-- /.card-body -->
      </div><!-- /.card -->
    </div><!-- /.fullscreen-example-1 -->

    <div class="fullscreen-example-2 mb-3">
      <div class="card">
        <div class="card-header d-flex flex-row align-items-center justify-content-between">
          <span>Long (<code>wrap: true</code>)</span>
          <button class="btn btn-sm btn-secondary ml-1" type="button" @click="fullscreen2">
            <i class="fa fa-arrows-alt" aria-hidden="true"></i> Fullscreen
          </button>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <h2>HTML Ipsum Presents</h2>
            <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
            <h3>Header Level 3</h3>
            <ol>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>
            <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>
            <h4>Header Level 4</h4>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>

            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <ul>
               <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
               <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
          </blockquote>
        </div><!-- /.card-body -->
      </div><!-- /.card -->
    </div><!-- /.fullscreen-example-2 -->

  </div>
</template>

<script>
export default {
  methods: {
    fullscreen1 () {
      this.$fullscreen.toggle(this.$el.querySelector('.fullscreen-example-1'), {
        wrap: false,
        callback: this.fullscreenChange
      })
    },
    fullscreen1Change (fullscreen) {
      this.fullscreen = fullscreen
    },
    fullscreen2 () {
      this.$fullscreen.toggle(this.$el.querySelector('.fullscreen-example-2'), {
        wrap: true,
        callback: this.fullscreenChange
      })
    },
    fullscreen2Change (fullscreen) {
      this.fullscreen = fullscreen
    }
  },
  data () {
    return {
      fullscreen: false
    }
  }
}
</script>
