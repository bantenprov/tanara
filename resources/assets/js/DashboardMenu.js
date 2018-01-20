const DashboardMenuItems = [
  {
    name: 'Default',
    link: '/home',
    icon: 'fa fa-folder'
  },
  {
    name: 'Charts',
    icon: 'fa fa-bar-chart',
    childType: 'collapse',
    childItem: [
      {
        name: 'Chart.js',
        link: '/dashboard/demo-chartjs',
        icon: 'fa fa-angle-double-right'
      },
      {
        name: 'ECharts',
        link: '/dashboard/demo-echarts',
        icon: 'fa fa-angle-double-right'
      }
    ]
  },
  {
    name: 'Dropdown',
    icon: 'fa fa-folder',
    childType: 'dropdown',
    childItem: [
      {
        name: 'Item One',
        link: '/example/one',
        icon: 'fa fa-angle-double-right'
      },
      {
        name: 'Item Two',
        link: '/example/two',
        icon: 'fa fa-angle-double-right'
      }
    ]
  },
  {
    name: 'Dropup',
    icon: 'fa fa-folder',
    childType: 'dropup',
    childItem: [
      {
        name: 'Item One',
        link: '/example/one',
        icon: 'fa fa-angle-double-right'
      },
      {
        name: 'Item Two',
        link: '/example/two',
        icon: 'fa fa-angle-double-right'
      }
    ]
  }
];

export default DashboardMenuItems;
