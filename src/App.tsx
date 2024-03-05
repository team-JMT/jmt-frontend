import { useEffect } from 'react';

import Router from './route/Router';

function App() {
  useEffect(() => {
    (async () => {
      const res = await fetch(window.origin);
      console.table(res.headers);
    })();
  }, []);

  return <Router />;
}

export default App;
