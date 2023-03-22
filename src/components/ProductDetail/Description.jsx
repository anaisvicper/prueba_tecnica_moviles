import '../../App.css';

/**
 * Helps to ensure the same base styles are applying for each item.
 * As well, allows to see each item in a unique line while coding.
 * @param {{label: Node, value: Node}} param0
 */
const DescriptionItem = ({ label, value }) => (
  <tr>
    <td>{label}</td>
    <td>{value}</td>
  </tr>
);

const Description = ({ product }) => {
  return (
    <div className="product-detail-description">
      <table>
        <DescriptionItem label="Marca" value={product.brand} />
        <DescriptionItem label="Modelo" value={product.model} />
        <DescriptionItem label="Precio" value={product.price} />
        <DescriptionItem label="CPU" value={product.cpu} />
        <DescriptionItem label="RAM" value={product.ram} />
        <DescriptionItem label="Sistema operativo" value={product.os} />
        <DescriptionItem
          label="Resolución de pantalla"
          value={product.displayResolution}
        />
        <DescriptionItem label="Batería" value={product.battery} />
        <DescriptionItem
          label="Cámaras"
          value={
            <ul>
              <li>{product.primaryCamera.map((feature) => ` ${feature} `)}</li>
              <li>{product.secondaryCmera.map((feature) => ` ${feature} `)}</li>
            </ul>
          }
        />
        <DescriptionItem label="Dimensiones" value={product.dimentions} />
        <DescriptionItem label="Peso" value={product.weight} />
        <DescriptionItem
          label="Memoria interna"
          value={
            <ul>
              {product.internalMemory.map((storage) => (
                <li>{storage}</li>
              ))}
            </ul>
          }
        />
        <DescriptionItem
          label="Colores"
          value={
            <ul>
              {product.colors.map((color) => (
                <li>{color}</li>
              ))}
            </ul>
          }
        />
      </table>
    </div>
  );
};

export default Description;
