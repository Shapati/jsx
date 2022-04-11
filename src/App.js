import logo from './logo.svg';
import './App.css';

import Imagefromsrc from './imageInSrc.jpeg'

function App() {
  return (
    <div className="App">
      <div>

            <h1 class="title red">Your name here</h1>
            
              <img src={process.env.PUBLIC_URL + '/imageInPublic.png'}  alt="" />
              <img src={Imagefromsrc} alt="" />
            </div>

            <video width="320" height="240" controls>

          

            </video>
    </div>
  );
}

export default App;
