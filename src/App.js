import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
<div className="responsive"> 
<div className="gallery">
<img src={logo} alt="Cinque Terre" width="600" height="400"/>
</div>

</div>

<div className="responsive"> 
<div className="gallery">
<img src={logo} alt="Cinque Terre" width="600" height="400"/>
</div>

</div>
<div className="responsive"> 
<div className="gallery">
<img src={logo} alt="Cinque Terre" width="600" height="400"/>
</div>

</div>
<div className="responsive"> 
<div className="gallery">
<img src={logo} alt="Cinque Terre" width="600" height="400"/>
</div>
<div>
  <h1>Chris learnt CI/CD today</h1>
</div>

</div>
    </div>
  );
}

export default App;
