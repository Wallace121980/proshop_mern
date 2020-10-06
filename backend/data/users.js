import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'William Schrauwen',
    email: 'williamschrauwen@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mirella van Nes',
    email: 'mirellanes@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
