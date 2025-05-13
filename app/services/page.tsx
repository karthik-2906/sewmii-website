import { Metadata } from "next";
import ServicesPage from "./ServicesClient";

export const metadata: Metadata = {
    title: "Custom Sewing Patterns & Digital Downloads | sewmii",
    description: "Professional sewing patterns for designers, hobbyists, and businesses. Shop printed/digital patterns or commission custom designs. Perfect for bespoke fashion, cosplay, and small-batch production.",
  };

export default function Page() {
    return <ServicesPage />;
}