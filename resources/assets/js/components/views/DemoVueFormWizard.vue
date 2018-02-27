<template>
  <div>

    <div class="alert alert-info mb-5" role="alert">
      <ul class="list-unstyled mb-0">
        <li>Package name: <code>vue-form-wizard</code></li>
        <li>Link: <a class="alert-link" href="https://github.com/cristijora/vue-form-wizard" target="_blank">GitHub</a></li>
      </ul>
    </div>

    <vue-form :state="formstate" @submit.prevent="onSubmit" class="mb-3">
      <form-wizard @on-complete="onComplete">
            <tab-content title="Personal details"
                         icon="fa fa-user">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info"
                         icon="fa fa-gear">
              My second tab content
            </tab-content>
            <tab-content title="Last step"
                         icon="fa fa-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
      </form-wizard>

      <form-wizard @on-complete="onComplete"
                      shape="square"
                      color="#3498db">
            <tab-content title="Personal details"
                         icon="fa fa-user">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info"
                         icon="fa fa-gear">
              My second tab content
            </tab-content>
            <tab-content title="Last step"
                         icon="fa fa-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
      </form-wizard>

      <form-wizard @on-complete="onComplete"
                      shape="tab"
                      color="#9b59b6">
            <tab-content title="Personal details"
                         icon="fa fa-user">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info"
                         icon="fa fa-gear">
              My second tab content
            </tab-content>
            <tab-content title="Last step"
                         icon="fa fa-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
      </form-wizard>

      <form-wizard @on-complete="onComplete"
                     :start-index="1"
                      color="#e67e22">
            <tab-content title="Personal details"
                         icon="fa fa-user">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info"
                         icon="fa fa-gear">
              My second tab content
            </tab-content>
            <tab-content title="Last step"
                         icon="fa fa-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
      </form-wizard>

      <form-wizard @on-complete="onComplete"
                      title="This is a new title"
                      subtitle="And a new subtitle"
                      shape="tab"
                      back-button-text="Go back!"
                      next-button-text="Go next!"
                      finish-button-text="We're there"
                      color="#9b59b6">
            <tab-content title="Personal details"
                         icon="fa fa-user">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info"
                         icon="fa fa-settings">
              My second tab content
            </tab-content>
            <tab-content title="Last step"
                         icon="fa fa-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
        </form-wizard>

      <form-wizard @on-complete="onComplete"
                      shape="tab"
                      color="#e67e22">
            <h2 slot="title">This will replace my whole title</h2>   
            
            <tab-content title="Personal details"
                         icon="fa fa-user">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info"
                         icon="fa fa-settings">
              My second tab content
            </tab-content>
            <tab-content title="Last step"
                         icon="fa fa-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
        </form-wizard>

        <form-wizard @on-complete="onComplete"
                shape="circle"
                color="#e74c3c">
            <tab-content title="Personal details"
                        route="/first"
                        icon="ti-user">
            </tab-content>
            <tab-content title="Additional Info"
                        route="/second"
                        icon="ti-settings">
            </tab-content>
            <tab-content title="Last step"
                        route="/third"
                        icon="ti-check">
            </tab-content>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          
        </form-wizard>
        
    </vue-form>

     
  </div>
</template>

<script>
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)  

const First = { template: '<div>First page</div>' }
const Second = { template: '<div>Second page</div>' }
const Third = { template: '<div>Third page</div>' }

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/first', component: First },
    { path: '/second', component: Second },
    { path: '/third', component: Third }
  ]
});
Vue.use(VueRouter)

export default {
  data () {
    return {
      formstate: {},
      model: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    onSubmit: function () {
      if(this.formstate.$invalid) {
        // alert user and exit early
        return;
      }
      // otherwise submit form
    }
  }
}
</script> 