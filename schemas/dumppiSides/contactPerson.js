export default {
  name: 'contactPerson',
  title: 'Contact Persons',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full name',
      description: 'Full name of the contact person.',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      description: 'Email address of the contact person.',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      description: 'Role of the contact person.',
      type: 'localeString'
    }
  ]
}
