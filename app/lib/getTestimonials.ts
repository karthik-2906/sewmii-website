export async function getTestimonials() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const testimonialsRes = await fetch(`${baseUrl}/data/testimonials.json`).then(testimonialsRes => testimonialsRes.json());

    return testimonialsRes;
}
