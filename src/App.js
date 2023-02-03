import './App.css';
import HeaderComponent from './componentes/HeaderComponente';
import IndexRoute from './routers/IndexRoute';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <IndexRoute />
      </Router>
    </div>
  );
}

export default App;
