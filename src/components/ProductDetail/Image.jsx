import styled from '@emotion/styled';

const StyledImageContainer = styled.div(() => ({
  width: '70%',
  height: '70%',
}));
const StyledImage = styled.img(() => ({
  width: '100%',
}));

const Image = ({ product }) => {
  return (
    <StyledImageContainer>
      <StyledImage
        className="image"
        src={product.imgUrl}
        alt={`${product.brand} phone model ${product.model}`}
      />
    </StyledImageContainer>
  );
};

export default Image;
