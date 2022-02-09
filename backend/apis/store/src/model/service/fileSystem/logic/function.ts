import fs from 'fs';
function getExtensionOfFile(rootDir: any, entry: any) {
  const files = fs.readdirSync(rootDir);
  // (4) [ 'a.js', 'b.ts', 'index.js', 'README.md', 'package.json' ]

  const filename = files.find((file: string | any[]) => {
    // return the first files that include given entry
    return file.includes(entry);
  });

  const extension = filename ? filename.split('.').pop() : null;

  return extension;
}

export { getExtensionOfFile };
