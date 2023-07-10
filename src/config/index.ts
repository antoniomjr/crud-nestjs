import { join } from 'path';

export default () => ({
  postgresqlOptions: {
    type: 'postgres',
    host: process.env.DB_SERVER_HOST,
    port: Number(process.env.DB_SERVER_PORT) || 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [join(__dirname + '/../**/*.entity{.ts,.js}')],

    // entities:[UserSchema],
    // ! ALWAYS SET TO FALSE IN PRODUCTION
    autoLoadEntities: !(
      process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production'
    ),
    synchronize: true,
    // synchorize: !(
    //   process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production'
    // ),
  },
});
