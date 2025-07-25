export default {
   dialect: 'postgres',
   host: 'localhost',
   username: 'postgres',
   password: 'admin',
   database: 'usersdb',
   define: {
      timestemp: true,
      underscored: true,
      underscoredAll: true
   },
}