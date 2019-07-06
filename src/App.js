import React from 'react';
import Navbar from './Navbar';
import MyChart from './MyChart';
import MyInput from './MyInput';
import Frequency from './Frequency';
class App extends React.Component {

  render()
  {
    return (
    <div className="App">
      <Navbar />
      <MyInput />
    </div>);
  }
}

export default App;
