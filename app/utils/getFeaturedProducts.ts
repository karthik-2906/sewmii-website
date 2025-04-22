import fs from 'fs';
import path from 'path';

export async function getFeaturedProducts() {
    const dataDir = path.join(process.cwd(), 'public', 'data', 'products');

    const readJsonFile = (filename: string) => {
        const filePath = path.join(dataDir, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    };

    const featuredProducts = readJsonFile('featured-products.json');

    return {
        featuredProducts
    };
}