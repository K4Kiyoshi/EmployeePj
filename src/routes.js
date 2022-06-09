import React from 'react';

const SubMenu = React.lazy(() => import('./views/menus/sub-menu/SubMenu'));
const EmpReg = React.lazy(() => import('./views/employee/empreg'));
const EmpListIndex = React.lazy(() => import('./views/emplist/emplistIndex'));
const DepartmentIndex = React.lazy(() => import('./views/department/departmentindex'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/menus/sub-menu', name: 'Sub Menu', component: SubMenu },
  { path: '/employee/empreg', name: 'EmployeeReg', component: EmpReg },
  { path: '/emplist/emplistIndex', name: 'EmployeeIndex', component: EmpListIndex },
  { path: '/department/departmentindex', name: 'DepartmentIndex', component: DepartmentIndex },

];

export default routes;
