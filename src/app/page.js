import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import DeliverySection from "@/components/layout/DeliverySection";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'no lo dudes, contamos con'}
          mainHeader={'Delivery'}
        />
        <DeliverySection />
      </section>
    </>
  )
}
