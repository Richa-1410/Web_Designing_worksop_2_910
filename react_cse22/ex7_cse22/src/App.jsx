import './App.css'
import StudentCard from './StudentCard';
function App() {
  return (
    <div class="App">
      
    
      <h1> Student Card App</h1>
      <StudentCard Name="Richa Verma" Age="19" Course="B.Tech CSE"/>
      <StudentCard Name="John Doe" Age="22" Course="B.Tech IT"/>
      <StudentCard Name="Jane Smith" Age="21" Course="B.Tech ECE"/>
    </div>
  );
 
}
export default App;
