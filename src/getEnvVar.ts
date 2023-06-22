export default function getEnvVar(varName: string) {
  const envVar = process.env[varName];
  if (!envVar) throw new Error(`${varName} environment variable not found`);
  return envVar;
}
