import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@exapmle.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'William Schrauwen',
    email: 'williamschrauwen@exapmle.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mirella van Nes',
    email: 'mirellanes@exapmle.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
