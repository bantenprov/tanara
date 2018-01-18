const AdminMenuItems = [
  {
    name: 'Default',
    link: '/example',
    icon: 'fa fa-folder'
  },
  {
    name: 'Collapse',
    icon: 'fa fa-folder',
    childType: 'collapse',
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

export default AdminMenuItems;
