export const MENU_ITEMS = [
  {
    title: 'Members',
    icon: 'mdi-account-group-outline',
    value: 'members',
    route: '/supervisor/dashboard'
  },
  { title: 'Pages', icon: 'mdi-file-document', value: 'pages', route: '/' },
  {
    title: 'Learning session',
    icon: 'mdi-school',
    value: 'learning-session',
    route: '/'
  },
  {
    title: 'Synergy Project',
    icon: 'mdi-lightbulb-group',
    value: 'synergy-project',
    route: '/'
  },
  {
    title: 'Question Bank',
    icon: 'mdi-help-box',
    value: 'question-bank',
    route: '/'
  }
]

export const MEMBERS_MENU_ITEMS = [{ title: 'Add Member' }]

export const TABLE_COLUMNS = [
  { title: 'Name', key: 'name', align: 'start', sortable: false },
  { title: 'Team', key: 'team' },
  { title: 'Status', key: 'status' },
  { title: 'Profile Picture', key: 'profilePicture' },
  { title: 'RIVS', key: 'rivs' },
  { title: 'Profile Updated', key: 'profileUpdated' },
  { title: 'Actions', key: 'actions', sortable: false }
]

export const TABLE_DATA = [
  {
    id: Math.floor(Math.random() * 10000),
    name: 'John Doe',
    team: 'Marketing',
    status: 'Active',
    profilePicture: true,
    rivs: false,
    profileUpdated: true
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Jane Smith',
    team: 'Sales',
    status: 'Inactive',
    profilePicture: false,
    rivs: true,
    profileUpdated: false
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Alice Johnson',
    team: 'Development',
    status: 'Active',
    profilePicture: true,
    rivs: false,
    profileUpdated: true
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Bob Williams',
    team: 'Marketing',
    status: 'Inactive',
    profilePicture: false,
    rivs: true,
    profileUpdated: false
  }
]

export const USER_ROLE = {
  ADMIN: 'admin',
  BENCH_MEMBER: 'benchMember',
  SUPERVISOR: 'supervisor'
}
