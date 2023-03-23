import { generatePath } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.css';
import routes from '../../config/routes';
import Image from '../ProductDetail/Image';
import styled from '@emotion/styled';
import Price from '../Price';

const StyledProductListItemContainer = styled.div(() => ({
  padding: '16px 0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledProductListItem = styled(Link)(() => ({
  height: '300px',
  width: '200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #282c34',
  borderRadius: '10%',
  padding: '16px',
  backgroundColor: 'white',
  fontSize: '16px',
  textDecoration: 'none',
  color: '#282c34',
  '&:hover': {
    boxShadow: '3px 3px 10px 5px #282c34',
  },
}));

// const list: {
//     id: string;
//     brand: string;
//     model: string;
//     price: string;
//     imgUrl: string;
// }[]
const Item = ({ item: { id, brand, model, price, imgUrl } }) => {
  return (
    <StyledProductListItemContainer>
      <StyledProductListItem
        to={generatePath(`/${routes.PRODUCT_DETAIL.path}`, { id })}
      >
        <Image product={{ id, brand, model, imgUrl }} />
        <div>
          <span>{brand}</span>
          <span> · </span>
          <span>{model}</span>
        </div>
        <Price price={price} />
      </StyledProductListItem>
    </StyledProductListItemContainer>
  );
};
export default Item;
