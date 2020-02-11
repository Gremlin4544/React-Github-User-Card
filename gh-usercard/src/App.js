import React from 'react';
import Profile from './components/Profile';
import Followers from './components/Followers';
import "./App.css";



function App() {
  return(
    <div className="App">
      {/* <h1>Github UserCards</h1> */}
      <Profile />
      <Followers />
    </div>
  );
}

export default App;
