const { execCommand } = require("../utils");

const echoMessage = "test message";

describe("it executes execCommand", () => {
  it.skip("and returns output", async () => {
    const { stdout } = await execCommand(`echo ${echoMessage}`);

    expect(stdout).toMatch(echoMessage);
  });

  it.skip("callback function is called with stoud", async () => {
    const testCallback = jest.fn();
    const echoCommand = await execCommand(`echo ${echoMessage}`, testCallback);

    expect(testCallback).toHaveBeenCalledWith("xyz");
  });
});
