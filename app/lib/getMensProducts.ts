import fs from 'fs';
import path from 'path';

export async function getMensProducts() {
    const dataDir = path.join(process.cwd(), 'public', 'data');

    const readJsonFile = (filename: string) => {
        const filePath = path.join(dataDir, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    };

    const blocks = readJsonFile('men-basic-blocks.json');
    const shirts = readJsonFile('men-shirts.json');
    const pants = readJsonFile('men-pants.json');

    return {
        blocks,
        shirts,
        pants,
    };
}