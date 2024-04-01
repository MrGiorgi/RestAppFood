import {cartProductPrice} from "@/components/AppContext";
import Trash from "@/components/icons/Trash";
import Image from "next/image";

export default function CartProducts({product,index,onRemove}) {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      <div className="w-24">
        <Image width={240} height={240} src={product.image} alt={''} />
      </div>
      <div className="grow">
        <h3 className="font-semibold">
          {product.name}
        </h3>
        {product.size && (
          <div className="mt- 2text-sm">
            Size: <span>{product.size.name}</span>
          </div>
        )}
        <div className="text-gray-700">Ingredientes elegidos:</div>
        {product.extras?.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-sm text-gray-90 bg-gray-200 rounded-md	">
            {product.extras.map(extra => (
              <div className="text-gray-900 p-2 m-3 border-b-4 border-green-500" key={extra.name}>{extra.name} ${extra.price}</div>
            ))}
          </div>
        )}
      </div>
      <div className="text-lg text-green-500 font-semibold">
        ${cartProductPrice(product)}
      </div>
      {!!onRemove && (
        <div className="ml-2">
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="button-delete p-2">
            <Trash />
          </button>
        </div>
      )}
    </div>
  );
}