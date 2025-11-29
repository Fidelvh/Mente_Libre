// backend/src/logger.js
import pino from "pino";
import pinoHttp from "pino-http";

console.log("Cargando logger.js");

export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "yyyy-mm-dd HH:MM:ss.l",
      ignore: "pid,hostname",
    },
  },
});

export const httpLogger = pinoHttp({
  logger,
  customSuccessMessage: function (res) {
    return `HTTP ${res.statusCode} ${res.req.method} ${res.req.url}`;
  },
  customErrorMessage: function (error, res) {
    return `ERROR ${res.req.method} ${res.req.url} ${error.message}`;
  },
  redact: { 
    paths: ["req.headers.authorization", "res.headers['set-cookie']"],
    censor: "***",
  },
});
