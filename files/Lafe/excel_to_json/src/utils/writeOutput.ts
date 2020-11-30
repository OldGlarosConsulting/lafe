import path from 'path';
import fs from 'fs';

export default function writeOutput(data: any): void {
  const outputPath = path.resolve(__dirname, '..', 'data', 'output.json');

  fs.writeFile(outputPath, JSON.stringify(data, null, 2), (err): void => {
    if (err) return console.log(err);

    return console.log('Output have been written to:', outputPath);
  });
}
