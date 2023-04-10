const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8000",
      changeOrigin: true,
      pathRewrite: {
        "^/api/processar_diagnostico": "/processar_diagnostico",
        "^/api/listar_pacientes": "/listar_pacientes",
        "^/api/remover_paciente": "/remover_paciente",
        "^/api/listar_sintomas": "/listar_sintomas",
      },
    })
  );
};
