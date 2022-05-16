const core = require("@actions/core");
const github = require("@actions/github");

try {
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);

  setTimeout(() => console.log("Hello from setTimeout"), 5000);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);

  const time = new Date().toTimeString();
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}

try {
  const workflowName = core.getInput("workflow-name");
  console.log(`Workflow name: ${workflowName}`);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);

  const time = new Date().toTimeString();
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
