export default function(resolve) {
    return [
        {
            path: '/',
            component: resolve(__dirname, '../pages/layout'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: resolve(__dirname, '../pages/home')
                },
                {
                    path: 'login',
                    name: 'login',
                    component: resolve(__dirname, '../pages/auth')
                },
                {
                    path: 'register',
                    name: 'register',
                    component: resolve(__dirname, '../pages/auth')
                },
                {
                    path: 'settings',
                    name: 'settings',
                    component: resolve(__dirname, '../pages/settings')
                },
                {
                    path: 'articles/:id',
                    name: 'articles',
                    component: resolve(__dirname, '../pages/articles')
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: resolve(__dirname, '../pages/profile')
                },
                {
                    path: 'editor',
                    name: 'editor',
                    component: resolve(__dirname, '../pages/editor')
                },
            ]
        }
    ]
}