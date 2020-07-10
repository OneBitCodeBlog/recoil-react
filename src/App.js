import React from 'react';
import Comments from './components/Comments';

import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Comments />
    </RecoilRoot>
  );
}

export default App;
