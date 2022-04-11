const { execCommand } = require("../execCommand");

const echoMessage = "test message";

describe("it executes execCommand", () => {
  it.only("and returns output", async () => {
    const { stdout } = await execCommand(`echo ${echoMessage}`);

    expect(stdout).toMatch(echoMessage);
  });

  it("callback function is called with stoud", async () => {
    const testCallback = jest.fn();
    const echoCommand = await execCommand(`echo ${echoMessage}`, testCallback);

    expect(testCallback).toHaveBeenCalledWith("xyz");
  });
});
