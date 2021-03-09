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
  <h2>More needed to learn now</h2>
  <h3>Only worked for this branch</h3>
</div>

</div>
    </div>
  );
}

export default App;
