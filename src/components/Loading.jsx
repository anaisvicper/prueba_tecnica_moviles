import logoReact from '../images/logo_react.svg';
import './App.css';

const Loading = () => (
  <div className="loading-container">
    <div className="loading">
      <div>
        <img src={logoReact} className="loading-logo" alt="loading" />
      </div>
      <div>Cargando...</div>
    </div>
  </div>
);

export default Loading;
