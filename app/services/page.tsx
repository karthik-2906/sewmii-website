import { Metadata } from "next";
import ServicesPage from "./ServicesClient";

export const metadata: Metadata = {
    title: "Custom Sewing Patterns & Digital Downloads | sewmii",
    description: "Professional sewing patterns for designers, hobbyists, and businesses. Shop printed/digital patterns or commission custom designs. Perfect for bespoke fashion, cosplay, and small-batch production.",
    keywords: "custom sewing pattern service Philippines, digital pattern maker contact, buy sewing patterns Etsy Shopee Instagram, Filipino fashion pattern designer, custom PDF clothing patterns, sewing pattern commission Philippines, contact sewing pattern seller online"
  };

export default function Page() {
    return <ServicesPage />;
}