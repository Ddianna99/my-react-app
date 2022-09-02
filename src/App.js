import './App.css';
import Message from './componets/Message';
import Profile from './componets/Profile';

function App() {
  return (
    <div className="App">
    <Profile name="Diana"></Profile>
    <Message message = "Hello!"/>
    </div>
  );
}

export default App;
