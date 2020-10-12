
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      { path: '/home', component: () => import('pages/home.vue') },
      { path: '/about', component: () => import('pages/about.vue') },
      { path: '/categories', component: () => import('pages/categories.vue') },
      { path: '/contact', component: () => import('pages/contact.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
