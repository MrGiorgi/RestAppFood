'use client';
import { CartContext } from "@/components/AppContext";
import MenuItemTile from "@/components/menu/MenuItemTile";
import Image from "next/image";
import { useContext, useState } from "react";
import FlyingButton from "react-flying-item";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";  

export default function MenuItem(menuItem) {
  const session = useSession();

  const status = session?.status;

  const { image, name, description, basePrice, sizes, extraIngredientPrices } =
    menuItem;
  const [selectedSize, setSelectedSize] = useState(sizes?.[0] || null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useContext(CartContext);

  async function handleAddToCartButtonClick() {
    console.log("add to cart");
    const hasOptions = sizes.length > 0 || extraIngredientPrices.length > 0;
    if (hasOptions && !showPopup) {
      setShowPopup(true);
      return;
    }
    addToCart(menuItem, selectedSize, selectedExtras);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("hiding popup");
    setShowPopup(false);
  }
  function handleExtraThingClick(ev, extraThing) {
    const checked = ev.target.checked;
    if (checked) {
      setSelectedExtras((prev) => [...prev, extraThing]);
    } else {
      setSelectedExtras((prev) => {
        return prev.filter((e) => e.name !== extraThing.name);
      });
    }
  }

  let selectedPrice = basePrice;
  if (selectedSize) {
    selectedPrice += selectedSize.price;
  }
  if (selectedExtras?.length > 0) {
    for (const extra of selectedExtras) {
      selectedPrice += extra.price;
    }
  }

  function AuthLinks({ status }) {
    if (status === "authenticated") {
      return (
        <>
            <button
              className="button sticky bottom-2"
              onClick={handleAddToCartButtonClick}
            >
              Agregar al carrito ${selectedPrice}
            </button>
          <button
            className="button-delete mt-2"
            onClick={() => setShowPopup(false)}
          >
            Cancelar
          </button>
        </>
      );
    }
    if (status === "unauthenticated") {
      return (
        <>
           <h4 className="bg-gray-200 text-center text-gray-900 text-sm rounded-md">Inicia sesión para tomar tu pedido.</h4>
        </>
      );
    }
  }

  return (

    <>
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-10"
        >
          <div
            onClick={(ev) => ev.stopPropagation()}
            className="my-8 bg-white p-2 rounded-lg max-w-md"
          >
            <div
              className="overflow-y-scroll p-2"
              style={{ maxHeight: "calc(100vh - 100px)" }}
            >
              <Image
                src={image}
                alt={name}
                width={300}
                height={200}
                className="mx-auto bg-gray-200 rounded-md"
              />
              <h2 className="text-lg font-bold text-center mt-4">{name}</h2>
              <p className="text-center text-gray-500 text-sm">{description}</p>
              <h3 className="text-lg font-bold text-center p-4">
                Tamaños disponibles:
              </h3>
              {sizes?.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-gray-200">
                  {sizes.map((size) => (
                    <label
                      key={size._id}
                      className="flex items-center gap-2 p-4 border rounded-md mb-1"
                    >
                      <input
                        class="accent-green-500 focus:accent-green-400"
                        type="radio"
                        onChange={() => setSelectedSize(size)}
                        checked={selectedSize?.name === size.name}
                        name="size"
                        required
                      />
                      {size.name} ${size.price}
                    </label>
                  ))}
                </div>
              )}
              <h3 className="text-lg font-bold text-center p-4">
                Ingredientes disponibles:
              </h3>
              {extraIngredientPrices?.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-gray-200">
                  {extraIngredientPrices.map((extraThing) => (
                    <label
                      key={extraThing._id}
                      className="flex items-center gap-2 p-4 border rounded-md mb-1"
                    >
                      <input
                        class="accent-green-500 focus:accent-green-400"
                        type="checkbox"
                        onChange={(ev) => handleExtraThingClick(ev, extraThing)}
                        checked={selectedExtras
                          .map((e) => e._id)
                          .includes(extraThing._id)}
                        name={extraThing.name}
                        required
                      />
                      {extraThing.name}
                    </label>
                  ))}
                </div>
              )}
              <div className="p-4">
              <AuthLinks status={status} />
              </div>
            </div>
          </div>
        </div>
      )}
      <MenuItemTile onAddToCart={handleAddToCartButtonClick} {...menuItem} />
    </>
  );
}
