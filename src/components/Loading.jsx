import logoReact from '../images/logo_react.svg';
import './App.css';
import './Loading.css';
import styled from '@emotion/styled';

const StyledLoadingContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  alignItems: 'center',
}));
const StyledLoading = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1',
  alignItems: 'center',
}));

const Loading = () => (
  <StyledLoadingContainer>
    <StyledLoading>
      <div>
        <img src={logoReact} className="loading-logo" alt="loading" />
      </div>
      <div>Cargando...</div>
    </StyledLoading>
  </StyledLoadingContainer>
);

export default Loading;
