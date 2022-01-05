import Navigation from './components/Nav';
import Routing from './components/Routing';

import './styles/App.scss';
// Hello Git this is test merge for empty line (check for conflicts)
// Just added comment for merging
// New comment to merge
export default function App() {
  return (
    <div className="App w-100 px-3 py-2">
      <Navigation />
      <LocalRepoFunction />
      <Routing />
    </div>
  );
}

function LocalRepoFunction() {
  console.log('this is my local function')

  return (
    <div>
      That is a talking with my self.
    </div>
  )
}