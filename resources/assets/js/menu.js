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
    name: 'Charts demo',
    icon: 'fa fa-bar-chart',
    childType: 'collapse',
    childItem: [
      {
        name: 'Chart.js',
        link: '/demo/chartjs',
        icon: 'fa fa-angle-double-right'
      },
      {
        name: 'ECharts',
        link: '/demo/echarts',
        icon: 'fa fa-angle-double-right'
      }
    ]
  },
  {
    name: 'Admin',
    icon: 'fa fa-user',
    childType: 'dropdown',
    childItem: [
      {
        name: 'Dashboard',
        link: '/admin',
        icon: 'fa fa-angle-double-right'
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
      }
    ]
  },
  {
    name: 'Reports',
    icon: 'fa fa-user',
    childType: 'dropup',
    childItem: [
      {
        name: 'Reports',
        link: '/admin/reports',
        icon: 'fa fa-angle-double-right'
      },
      {
        name: 'System reports',
        link: '/admin/reports/system-reports',
        icon: 'fa fa-angle-double-right'
      },
      {
        name: 'System logs',
        link: '/admin/reports/system-logs',
        icon: 'fa fa-angle-double-right'
      }
    ]
  }
];

export default MenuItems;
