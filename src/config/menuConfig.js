const menuList = [
    {
        title: 'Home',
        key: '/home',
        icon: 'pie-chart'
    },
    {
        title: 'Ui',
        icon: 'desktop',
        key: '/ui',
        children:[
            {
                title: 'Button',
                key: '/ui/button'
            },
            {
                title: 'Model',
                key: '/ui/model'
            },
            {
                title: 'Loading',
                key: '/ui/loading'
            }
        ]
    },
    {
        title: 'User',
        key: '/user',
        icon: 'user'
    },
    {
        title: 'File',
        key: '/file',
        icon: 'file'
    },
    {
        title: 'Dashbored',
        key: '/dashbored',
        icon: 'dashbord'
    }
]
export default menuList;