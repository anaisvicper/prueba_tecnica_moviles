import logoReact from '../images/logo_react.svg';
import '../App.css';

const Loading = () => (
  <div className="full-space">
    <img src={logoReact} className="loading" alt="loading" />
    <div>Cargando...</div>
  </div>
);

export default Loading;
