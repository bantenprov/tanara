const menu_items = [
    {
        name: 'Home',
        link: '/',
        icon: 'fa fa-home'
    },
    {
        name: 'Dashboard',
        icon: 'fa fa-line-chart',
        child: [{
            name: 'Eformas',
            link: '/dashboard/eformas',
            icon: 'fa fa-chevron-right'
        }]
    },
    {
        name: 'Data Eformas',
        icon: 'fa fa-file',
        child: [{
            name: 'List Eformas',
            link: '/eformas',
            icon: 'fa fa-chevron-right'
        }]
    }
];

export default menu_items;
