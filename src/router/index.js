import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ListUser from '../components/Ex9/ListUser.vue'
import UserDetail from '../components/Ex9/UserDetail.vue'
import ListEmployees from '../components/Ex10/ListEmployees.vue'
import EmployeesDetail from '../components/Ex10/EmployeesDetail.vue'
import EmployeeProfile from '../components/Ex10/EmployeesProfile.vue'
import EmployeeProjects from '../components/Ex10/EmployeesProject.vue'
import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFoundView
    },
    {
      path: '/detail',
      name: 'Detail',
      component: DetailView
    },
    {
      path: '/user',
      name: 'ListUser',
      component: ListUser
    },
    {
      path: '/user/:id',
      name: 'UserDetail',
      component: UserDetail,
    },{
      path: '/employees',
      name: 'ListEmployee',
      component: ListEmployees
    },
    {
      path: '/employees/:id',
      name: 'EmployeeDetail',
      component: EmployeesDetail,
      children: [
        {
          path: 'profile',
          component: EmployeeProfile
        },
        {
          path: 'projects',
          component: EmployeeProjects
        }
  
      ]
    }
  ]
})

export default router
