const urlApi = process.env.NEXT_PUBLIC_URLAPI

const userMenu = [
  {
    title: 'Edit Profile', 
    href: '/dashboard/user/edit'
  },
  {
    title: 'View Profile', 
    href: '/dashboard/user/:id'
  },
  {
    title: 'Logout', 
    href: '/dashboard/logout'
  },
]

const languageMenu = [
  {
    title: 'Español', 
    country: 'España'
  },
  {
    title: 'English', 
    country: 'UK'
  },
  {
    title: 'Deutsche', 
    country: 'Deutschland'
  },
]

const sidebarMenu = [
  {
    title: 'Dashboard',
    items: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: 'pi pi-bolt'
      },
    ]
  },
  {
    title: 'Salud',
    items: [
      {
        title: 'Resumen',
        href: '/dashboard/health',
        icon: 'pi pi-chart-bar',
      },
      {
        title: 'Control de peso',
        href: '/dashboard/health/weight',
        icon: 'pi pi-chart-line',
        items: [
          {
            title: 'Resumen',
            href: '/dashboard/health/weight'
          },
          {
            title: 'Agregar entrada',
            href: '/dashboard/health/weight/add'
          },
        ]
      },
      {
        title: 'Dieta',
        href: '/dashboard/health/diet',
        icon: 'pi pi-chart-pie',
        items: [
          {
            title: 'Carta',
            href: '/dashboard/health/diet'
          },
          {
            title: 'Agregar entrada',
            href: '/dashboard/health/diet/add'
          },
        ]
      },
      {
        title: 'Ejercicios',
        href: '/dashboard/health/fitness',
        icon: 'pi pi-chart-scatter',
        items: [
          {
            title: 'Resumen',
            href: '/dashboard/fitness'
          },
          {
            title: 'Brazos',
            href: '/dashboard/fitness/arms',
          },
          {
            title: 'Pecho',
            href: '/dashboard/fitness/chest',
          },
          {
            title: 'Respiración',
            href: '/dashboard/fitness/breathing',
          },
          {
            title: 'Agregar entrada',
            href: '/dashboard/fitness/arms/add'
          },
        ]
      },
    ]
  },
  {
    title: 'Finanzas',
    items: [
      {
        title: 'Ahorros',
        href: '/dashboard/savings',
        icon: 'pi pi-wallet',
        items: [
          {
            title: 'Resumen',
            href: '/dashboard/savings'
          },
          {
            title: 'Agregar entrada',
            href: '/dashboard/savings/add',
          },
          {
            title: 'Planeamiento',
            href: '/dashboard/savings/plans',
          },
        ]
      },
    ]
  },
  {
    title: 'Trabajo',
    items: [
      {
        title: 'Proyectos',
        icon: 'pi pi-qrcode',
        items: [
          {
            title: 'Resumen',
            href: '/dashboard/projects',
          },
          {
            title: 'Agregar proyecto',
            href: '/dashboard/projects/add',
          },
        ]
      },
    ]
  }
]

export const constants = {
  userMenu,
  languageMenu,
  sidebarMenu
}