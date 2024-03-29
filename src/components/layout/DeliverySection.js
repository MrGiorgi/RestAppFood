import Right from "@/components/icons/Right";
import Image from "next/image";
import Link from "next/link";

export default function DeliverySection() {
  return (
    <section className="delivery md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Llevamos tu pedido a la puerta de tu&nbsp;
          <span className="text-primary">
            casa
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Contamos con delivery por toda la zona!
        </p>
        <div className="flex gap-4 text-sm">
        <Link href={'/menu'}>
          <button href={'/menu'} className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Ordenar ahora
            <Right />
          </button>
          </Link>  
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/delivery.png'} layout={'fill'} objectFit={'contain'} alt={'Delivery'} />
      </div>
    </section>
  );
}