// Simple starter application.

const DEFAULT_PORT = 8080;

function getApplicationPort(environment = process.env) {
  const configuredPort = Number.parseInt(environment.APP_PORT, 10);
  return Number.isInteger(configuredPort) && configuredPort > 0
    ? configuredPort
    : DEFAULT_PORT;
}

function main() {
  const applicationPort = getApplicationPort();
  console.log("Application is running.");
  console.log(`Listening on port ${applicationPort}.`);
}

if (require.main === module) {
  main();
}

module.exports = { getApplicationPort, main };
