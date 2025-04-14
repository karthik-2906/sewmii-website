import { getTestimonials } from "./utils/getTestimonials";
import HomeClient from "./HomeClient";

export default async function Home() {
    const testimonials = await getTestimonials();

    return <HomeClient initialTestimonials={testimonials} />;
}