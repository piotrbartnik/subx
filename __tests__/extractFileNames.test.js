const { extractFileNames } = require("../utils");

const files = `"subtitle1.srt"
"subtitle2.srt"
"subtitle3.srt"
"movie1.mkv"
"movie2.mkv"`;

describe("extractFileNames", () => {
  it("and finds mkv on default", async () => {
    const movieFiles = extractFileNames(files);

    expect(movieFiles).toHaveLength(2);
  });
  it("and finds srt when extension provided", async () => {
    const movieFiles = extractFileNames(files, undefined, "srt");

    expect(movieFiles).toHaveLength(3);
  });
  it("calls callback with each file and track of subtitles", async () => {
    const testFn = jest.fn();

    const movieFiles = extractFileNames(files, "2", "mkv", testFn);

    expect(testFn).toHaveBeenCalledTimes(2);
    expect(testFn).toHaveBeenLastCalledWith('"movie2.mkv"', "2");
  });
});
