import '../../App.css';

const Description = ({ product }) => {
  return (
    <div className="product-detail-description">
      <table>
        <tr>
          <td>Marca</td>
          <td>{product.brand}</td>
        </tr>
        <tr>
          <td>Modelo</td>
          <td>{product.model}</td>
        </tr>
        <tr>
          <td>Precio</td>
          <td>{product.price}</td>
        </tr>
        <tr>
          <td>CPU</td>
          <td>{product.cpu}</td>
        </tr>
        <tr>
          <td>RAM</td>
          <td>{product.ram}</td>
        </tr>
        <tr>
          <td>Sistema operativo</td>
          <td>{product.os}</td>
        </tr>
        <tr>
          <td>Resolución de pantalla</td>
          <td>{product.displayResolution}</td>
        </tr>
        <tr>
          <td>Batería</td>
          <td>{product.battery}</td>
        </tr>
        <tr>
          <td>Cámaras</td>
          <td>
            <ul>
              <li>{product.primaryCamera.map((feature) => ` ${feature} `)}</li>
              <li>{product.secondaryCmera.map((feature) => ` ${feature} `)}</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Dimensiones</td>
          <td>{product.dimentions}</td>
        </tr>
        <tr>
          <td>Peso</td>
          <td>{product.weight}</td>
        </tr>
      </table>
    </div>
  );
};

export default Description;
