const { execCommand, extractFileNames } = require("./execCommand");

// /vobsub2srt Pinocchio.E01.DC.BluRay\[MkvDrama.com\]

const convertAllToSrt = () =>
  execCommand("ls", (stdout) => {
    const allFiles = extractFileNames(stdout);

    console.log(allFiles.filter((file) => file.match(/.mkv$/)));
  });

// const convertSingleFileFromVobSubToSrt = (file) => {
//   execCommand(`vobsub2srt ${file}`, (stdout) =>
//     console.log(`stdout: ${stdout}`)
//   );
// };

convertAllToSrt();
