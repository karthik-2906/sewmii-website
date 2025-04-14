import fs from 'fs';
import path from 'path';

export async function getWomensProducts() {
    const dataDir = path.join(process.cwd(), 'public', 'data', 'products', 'women');

    const readJsonFile = (filename: string) => {
        const filePath = path.join(dataDir, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    };

    const corsets = readJsonFile('women-corsets.json');

    return {
        corsets
    };
}