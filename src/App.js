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
      <Routing />
      <RemoteRepoFunction />
    </div>
  );
}

function RemoteRepoFunction() {
  console.log('that function was sent to remote by another writer')

  return (
    <div>
      Hello my lonely friend.
    </div>
  )
}