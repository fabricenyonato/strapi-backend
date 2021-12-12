module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8f71cbaa9b9de09535457c859b04c3b9'),
  },
});
