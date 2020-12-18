const defaultPort = 8000;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : defaultPort;

export default {
  port,
  hostname: 'dio.dev'
};