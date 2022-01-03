import Navigation from './components/Nav';
import Routing from './components/Routing';

import './styles/App.scss';

// Just added comment for merging
// New comment to merge
export default function App() {
  return (
    <div className="App w-100 px-3 py-2">
      <Navigation />
      <Routing />
    </div>
  );
}