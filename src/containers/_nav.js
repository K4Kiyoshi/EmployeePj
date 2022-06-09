export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu',
    route: '/menus',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Sub Menu',
        to: '/menus/sub-menu',
      }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Login',
    to: '/login',
  }
]

