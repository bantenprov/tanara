// childType: 'collapse|dropdown|dropup'

const MenuItems = [
  {
    name: 'Home',
    link: '/',
    icon: 'fa fa-home'
  },
  {
    name: 'Dashboard',
    icon: 'fa fa-dashboard',
    childType: 'collapse',
    childItem: [
      {
        name: 'Dashboard',
        link: '/dashboard',
        icon: 'fa fa-angle-double-right'
      },
      {
        name: 'Entity',
        link: '/dashboard/entity',
        icon: 'fa fa-angle-double-right'
      }
    ]
  },
  {
    name: 'Admin',
    icon: 'fa fa-lock',
    childType: 'collapse',
    childItem: [
      {
        name: 'Dashboard',
        icon: 'fa fa-angle-double-right',
        child: [
          {
            name: 'Dashboard',
            link: '/admin/dashboard',
            icon: 'fa fa-angle-right'
          }
        ]
      },
      {
        name: 'Contents',
        link: '/admin/contents',
        icon: 'fa fa-angle-double-right'
      },
      {
        name: 'Configurations',
        link: '/admin/configurations',
        icon: 'fa fa-angle-double-right'
      },
      {
        name: 'Reports',
        icon: 'fa fa-angle-double-right',
        child: [
          {
            name: 'Reports',
            link: '/admin/reports',
            icon: 'fa fa-angle-right'
          },
          {
            name: 'System reports',
            link: '/admin/reports/system-reports',
            icon: 'fa fa-angle-right'
          },
          {
            name: 'System logs',
            link: '/admin/reports/system-logs',
            icon: 'fa fa-angle-right'
          }
        ]
      }
    ]
  },
  {
    name: 'Demos',
    icon: 'fa fa-play-circle',
    childType: 'collapse',
    childItem: [
      {
        name: 'Forms',
        icon: 'fa fa-angle-double-right',
        child: [
          {
            name: 'Vue form',
            link: '/demo/vue-form',
            icon: 'fa fa-angle-right'
          },
          {
            name: 'Vue select',
            link: '/demo/vue-select',
            icon: 'fa fa-angle-right'
          },
          {
            name: 'Vue date picker',
            link: '/demo/vue-datepicker',
            icon: 'fa fa-angle-right'
          },
        ]
      },
      {
        name: 'Charts',
        icon: 'fa fa-angle-double-right',
        child: [
          {
            name: 'Vue Chart.js',
            link: '/demo/vue-chartjs',
            icon: 'fa fa-angle-right'
          },
          {
            name: 'Vue ECharts',
            link: '/demo/vue-echarts',
            icon: 'fa fa-angle-right'
          }
        ]
      },
      {
        name: 'Tables',
        icon: 'fa fa-angle-double-right',
        child: [
          {
            name: 'Vue tables',
            link: '/demo/vue-tables',
            icon: 'fa fa-angle-right'
          },
          {
            name: 'Vue table',
            link: '/demo/vue-table',
            icon: 'fa fa-angle-right'
          }
        ]
      },
      {
        name: 'Mini toastr',
        link: '/demo/mini-toastr',
        icon: 'fa fa-angle-double-right'
      },
      {
        name: 'Vue Sweetalert',
        link: '/demo/vue-sweetalert',
        icon: 'fa fa-angle-double-right'
      },
      {
        name: 'Vue Fullscreen',
        link: '/demo/vue-fullscreen',
        icon: 'fa fa-angle-double-right'
      }
    ]
  }
];

export default MenuItems;
