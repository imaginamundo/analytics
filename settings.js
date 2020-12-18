import { parse as parseFlags } from "https://deno.land/std@0.81.0/flags/mod.ts";

const defaultPort = 8000;
const argPort = parseFlags(Deno.args).port;
const port = argPort ? Number(argPort) : defaultPort;

export default {
  port,
  hostname: 'dio.dev'
};