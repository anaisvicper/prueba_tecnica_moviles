import styled from '@emotion/styled';

const StyledPriceContainer = styled.div(() => ({
  fontWeight: 'bold',
  fontSize: '20px',
}));

const CURRENCY = '€';
const Price = ({ price }) => {
  return (
    <StyledPriceContainer>
      {price} {CURRENCY}
    </StyledPriceContainer>
  );
};
export default Price;
