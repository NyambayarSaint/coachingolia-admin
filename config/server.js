module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1401),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '78c9c6e50104630cd77591c0b3d16363'),
    },
  },
  CLOUDINARY_NAME: 'yondosoft',
  CLOUDINARY_KEY: '538488111317522',
  CLOUDINARY_SECRET: 'L7pOvemB1Rtzjxd3Lc3gRjhEjWs'
});
