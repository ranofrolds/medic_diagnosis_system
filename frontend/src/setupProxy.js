const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/processar_diagnostico',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true
    })
  );
  app.use(
    '/remover_paciente',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true
    })
  );
  app.use(
    '/listar_pacientes',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true
    })
  );
};