import Profile from './Profile/Profile.js';
import pImg from './ProfilePic.png';
import "./App.css";
function App () {
  const handleName = () =>{alert(`Welcome ${fullName}`)}
  const fullName="Seif" 

  return (
    <div className="App">
      <Profile fullName={fullName} bio="Student At Gomycode" profession="web developement" handleName={handleName}>
      <img src={pImg} width="1000"  />
        </Profile>
    </div>
    );
}

export default App;
