import FlyingButton from 'react-flying-item'

export default function AddToCartButton({ onClick
}) {

  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 bg-primary text-white rounded-full px-8 py-2"
    >
      <span>Ver producto</span>
    </button>
  );
}