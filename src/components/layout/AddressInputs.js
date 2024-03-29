export default function AddressInputs({addressProps,setAddressProp,disabled=false}) {
  const {phone, streetAddress, postalCode, city, country} = addressProps;
  return (
    <>
      <label>Teléfono</label>
      <input
        disabled={disabled}
        type="tel" placeholder="Número de TLFNO"
        value={phone || ''} onChange={ev => setAddressProp('phone', ev.target.value)} />
      <label>Dirección</label>
      <input
        disabled={disabled}
        type="text" placeholder="Dirección"
        value={streetAddress || ''} onChange={ev => setAddressProp('streetAddress', ev.target.value)}
      />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label>Código postal</label>
          <input
            disabled={disabled}
            type="text" placeholder="Código postal"
            value={postalCode || ''} onChange={ev => setAddressProp('postalCode', ev.target.value)}
          />
        </div>
        <div>
          <label>Ciudad</label>
          <input
            disabled={disabled}
            type="text" placeholder="Ciudad"
            value={city || ''} onChange={ev => setAddressProp('city', ev.target.value)}
          />
        </div>
      </div>
      <label>País</label>
      <input
        disabled={disabled}
        type="text" placeholder="País"
        value={country || ''} onChange={ev => setAddressProp('country', ev.target.value)}
      />
    </>
  );
}