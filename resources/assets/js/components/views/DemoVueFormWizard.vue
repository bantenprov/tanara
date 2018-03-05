<template>
  <div>

    <div class="alert alert-info mb-5" role="alert">
      <ul class="list-unstyled mb-0">
        <li>Package name: <code>vue-form-wizard</code></li>
        <li>Link: <a class="alert-link" href="https://github.com/cristijora/vue-form-wizard" target="_blank">GitHub</a></li>
      </ul>
    </div>

    <form-wizard
      @on-complete="onComplete"
      shape="square"
      color="#3498db">

      <div class="text-center mb-3" slot="title">
        <h2 class="text-dark">Basic example</h2>
        <h5 class="text-muted">Subtitle</h5>
      </div>

      <tab-content title="Personal details" icon="fa fa-user">
        <div class="card mb-3">
          <div class="card-header">My first tab content</div>
          <div class="card-body">
            Content
          </div><!-- /.card-body -->
        </div><!-- /.card -->
      </tab-content>

      <tab-content title="Additional Info" icon="fa fa-gear">
        <div class="card mb-3">
          <div class="card-header">My second tab content</div>
          <div class="card-body">
            Content
          </div><!-- /.card-body -->
        </div><!-- /.card -->
      </tab-content>

      <tab-content title="Last step" icon="fa fa-check">
        <div class="card mb-3">
          <div class="card-header">My third tab content</div>
          <div class="card-body">
            Content
          </div><!-- /.card-body -->
        </div><!-- /.card -->
      </tab-content>
    </form-wizard>

    <!-- ============================================================ --><hr class="my-5">

    <form-wizard
      @on-complete="onComplete2"
      shape="square"
      color="#3097D1"
      error-color="#a94442"
      back-button-text="Kembali"
      next-button-text="Selanjutnya"
      finish-button-text="Simpan">

      <div class="text-center mb-3" slot="title">
        <h2 class="text-dark">Advanced example</h2>
        <h5 class="text-muted">Subtitle</h5>
      </div>

      <tab-content title="Identitas" icon="fa fa-user" :before-change="validateFirstTab">
        <div class="card mb-3">
          <div class="card-header">Identitas Lengkap</div>
          <div class="card-body">
            <vue-form-generator
              :model="model"
              :schema="firstTabSchema"
              :options="formOptions"
              ref="firstTabForm">
            </vue-form-generator>
          </div><!-- /.card-body -->
        </div><!-- /.card -->
      </tab-content>

      <tab-content title="Alamat" icon="fa fa-gear" :before-change="validateSecondTab">
        <div class="card mb-3">
          <div class="card-header">Alamat Tinggal</div>
          <div class="card-body">
            <vue-form-generator
              :model="model"
              :schema="secondTabSchema"
              :options="formOptions"
              ref="secondTabForm">
            </vue-form-generator>
          </div><!-- /.card-body -->
        </div><!-- /.card -->
      </tab-content>

      <tab-content title="Review Data" icon="fa fa-check">
        <div class="card mb-3">
          <div class="card-header">Identitas Anda sebagai berikut:</div>
          <div class="card-body">
            <pre v-if="model" v-html="prettyJSON(model)"></pre>
          </div><!-- /.card-body -->
        </div><!-- /.card -->
      </tab-content>
    </form-wizard>

  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        firstName: '',
        lastName: '',
        email: '',
        alamat: '',
        kelKec: '',
        kota: ''
      },
      formOptions: {
        validationErrorClass: "has-error",
        validationSuccessClass: "has-success",
        validateAfterChanged: true
      },
      firstTabSchema: {
        fields: [{
          type: "input",
          inputType: "text",
          label: "Nama Depan",
          model: "firstName",
          required: true,
          validator: VueFormGenerator.validators.string
        },
        {
          type: "input",
          inputType: "text",
          label: "Nama Belakang",
          model: "lastName",
          required: true,
          validator: VueFormGenerator.validators.string
        },
        {
          type: "input",
          inputType: "text",
          label: "Email",
          model: "email",
          required: true,
          validator: VueFormGenerator.validators.email
        }]
      },
      secondTabSchema: {
        fields: [{
          type: "input",
          inputType: "text",
          label: "Alamat",
          model: "alamat",
          required: true,
          validator: VueFormGenerator.validators.string
        },
        {
          type: "input",
          inputType: "text",
          label: "Kelurahan/Kecamatan",
          model: "kelKec",
          required: true,
          validator: VueFormGenerator.validators.string
        },
        {
          type: "select",
          label: "Kota",
          model: "kota",
          required: true,
          validator: VueFormGenerator.validators.string,
          values: ['Serang','Cilegon','Tangerang']
        }]
      }
    }
  },
  methods: {
    onComplete: function () {
      miniToastr.success('Yay. Done!', 'Success');
    },
    // Advanced example
    onComplete2: function () {
      miniToastr.success('Data Anda sudah Disimpan!', 'Success');
      this.$router.go(this.$router.currentRoute);
    },
    validateFirstTab: function () {
      return this.$refs.firstTabForm.validate();
    },
    validateSecondTab: function () {
      return this.$refs.secondTabForm.validate();
    },
    prettyJSON: function(json) {
      if (json) {
        json = JSON.stringify(json, undefined, 4);
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          var cls = 'number';
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'key';
            } else {
              cls = 'string';
            }
          } else if (/true|false/.test(match)) {
            cls = 'boolean';
          } else if (/null/.test(match)) {
            cls = 'null';
          }
          return '<span class="' + cls + '">' + match + '</span>';
        });
      }
    }
  }
}
</script>
