module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1401),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '78c9c6e50104630cd77591c0b3d16363'),
    },
  },
});
