export async function getMensProducts() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const [blocksRes, shirtsRes, pantsRes] = await Promise.all([
        fetch(`${baseUrl}/data/men-basic-blocks.json`).then(res => res.json()),
        fetch(`${baseUrl}/data/men-shirts.json`).then(res => res.json()),
        fetch(`${baseUrl}/data/men-pants.json`).then(res => res.json()),
    ]);

    return {
        blocks: blocksRes,
        shirts: shirtsRes,
        pants: pantsRes,
    };
}
