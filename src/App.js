import Navigation from './components/Nav';
import Routing from './components/Routing';

import './styles/App.scss';

export default function App() {
  return (
    <div className="App w-100 px-3 py-2">
      <Navigation />
      <Routing />
    </div>
  );
}