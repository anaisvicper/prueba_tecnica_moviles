import { Fragment } from 'react';
import '../App.css';
import styled from '@emotion/styled';

const StyleDetailDescriptionTable = styled.table(() => ({
  alignSelf: 'center',
}));

const StyleLabelTd = styled.td(() => ({
  fontWeight: 'bold',
}));

/**
 * Helps to ensure the same base styles are applying for each item.
 * As well, allows to see each item in a unique line while coding.
 * @param {{label: Node, value: Node}} param0
 */
const DescriptionItem = ({ label, value }) => (
  <tr>
    <StyleLabelTd>{label}</StyleLabelTd>
    <td>{value ? value : ' - '}</td>
  </tr>
);

/**
 * Prevent errors by checking the type of the value
 * @param {{wrapper: Node, value: Value | Value[] | undefined, ValueView: ((value: Value) => Node) }} param0
 */
const DescriptionArrayItem = ({ Wrapper, value, ValueView }) =>
  !!value && (
    <Wrapper>
      {Array.isArray(value)
        ? value.map((valueItem) => (
            <Fragment key={valueItem}>{ValueView(valueItem)}</Fragment>
          ))
        : value}
    </Wrapper>
  );

const Description = ({ product }) => {
  return (
    <StyleDetailDescriptionTable>
      <tbody>
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
        <DescriptionItem label="Dimensiones" value={product.dimentions} />
        <DescriptionItem label="Peso" value={product.weight} />
        <DescriptionItem
          label="Cámaras"
          value={
            <ul>
              <DescriptionArrayItem
                Wrapper={'li'}
                value={product.primaryCamera}
                ValueView={(value) => ` ${value} `}
              />
              <DescriptionArrayItem
                Wrapper={'li'}
                value={product.secondaryCmera}
                ValueView={(value) => ` ${value} `}
              />
            </ul>
          }
        />
        <DescriptionItem
          label="Memoria interna"
          value={
            <DescriptionArrayItem
              Wrapper={'ul'}
              value={product.internalMemory}
              ValueView={(storage) => <li>{storage}</li>}
            />
          }
        />
        <DescriptionItem
          label="Colores"
          value={
            <DescriptionArrayItem
              Wrapper={'ul'}
              value={product.colors}
              ValueView={(color) => <li>{color}</li>}
            />
          }
        />
      </tbody>
    </StyleDetailDescriptionTable>
  );
};

export default Description;
