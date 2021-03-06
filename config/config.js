export default {
    singular:true,
    plugins: [
        ['umi-plugin-react', {
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
            antd:true,
            dva:true,
        }],
    ],
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: 'Helloworld',
            },
            {
                path: '/helloworld',
                component: 'Helloworld'
            },
            {
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            },{
                path: 'puzzlecards',
                component: './puzzlecards'
            },{
                path:'list',
                component:'../page/list',
            }
        ]
    }],
    proxy:{
        '/dev':{
            target: 'http://114.116.89.193:8999',
            changeOrigin: true,
        },
    },
};