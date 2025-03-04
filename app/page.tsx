import { getTestimonials } from "./lib/getTestimonials";
import HomeClient from "./HomeClient";

export default async function Home() {
    const testimonials = await getTestimonials();

    return <HomeClient initialTestimonials={testimonials} />;
}
