<template>
  <div>

    <div class="alert alert-info mb-5" role="alert">
      <ul class="list-unstyled mb-0">
        <li>Package name: <code>@xkeshi/vue-qrcode</code></li>
        <li>Link: <a class="alert-link" href="https://github.com/xkeshi/vue-qrcode" target="_blank">GitHub</a></li>
      </ul>
    </div>

    <div class="card border-info mb-3">
      <div class="card-header bg-transparent border-info">Settings</div>
      <div class="card-body">
        <div class="form-row">
          <div class="col-sm form-group">
            <label for="size">size(px)</label>
            <input class="form-control" type="number" id="size" v-model="size">
          </div>

          <div class="col-sm form-group">
            <label for="background">background</label>
            <input class="form-control p-0" style="height: 38px;" type="color" id="background" v-model="bgColor">
          </div>

          <div class="col-sm form-group">
            <label for="foreground">foreground</label>
            <input class="form-control p-0" style="height: 38px;" type="color" id="foreground" v-model="fgColor">
          </div>

          <div class="col-12 form-group mb-0">
            <label for="value">value</label>
            <textarea class="form-control" rows="3" cols="80" id="value" v-model="val"></textarea>
          </div>
        </div>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

    <div class="card text-dark bg-light mb-3">
      <div class="card-header">QRcode</div>
      <div class="card-body">
        <qrcode :value="val" :options="{ background: bgColor, foreground: fgColor, size: size, level: 'H' }" tag="img" class="d-block mx-auto"></qrcode>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      val: window.location.href,
      bgColor: "#FFFFFF",
      fgColor: "#000000",
      size: 200
    }
  }
}
</script>
