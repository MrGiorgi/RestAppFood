import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Todo es mejor con una&nbsp;
          <span className="text-primary">
            Hamburguesa
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          La Hamburguesa es la pieza que falta para completar cada día, una alegría de vida sencilla pero deliciosa.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Ordenar ahora
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/hamburger.png'} layout={'fill'} objectFit={'contain'} alt={'Hamburguesa'} />
      </div>
    </section>
  );
}