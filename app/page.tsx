import HomeClient from "./HomeClient";
import { getTestimonials } from "@/app/utils/getTestimonials";
import { getFeaturedProducts } from "@/app/utils/getFeaturedProducts";

export default async function Home() {
    const testimonials = await getTestimonials();
    const { featuredProducts } = await getFeaturedProducts();

    return <HomeClient initialTestimonials={testimonials} featuredProducts={featuredProducts} />;
}