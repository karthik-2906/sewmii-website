import fs from 'fs/promises';
import path from 'path';

export async function getTestimonials() {
    const dataDir = path.join(process.cwd(), 'public', 'data');
    const filePath = path.join(dataDir, 'testimonials.json');

    try {
        const fileContents = await fs.readFile(filePath, 'utf8');
        const testimonials = JSON.parse(fileContents);
        return testimonials;
    } catch (error) {
        console.error('Error reading testimonials file:', error);
        return [];
    }
}