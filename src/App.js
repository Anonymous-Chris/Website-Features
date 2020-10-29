import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="background">
<form>
  <label>First name</label><br/>
  <input type="text" name="name" value="name"></input><br/>

  <label>Last name</label><br/>
  <input type="text" name="name" value="name"></input><br/>

  <label for="country">Country</label><br/>
  <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select><br/>

    <input type="submit" value="Submit"/>
</form>
</div>
    </div>
  );
}

export default App;
