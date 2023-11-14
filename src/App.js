import Attendance from "./Components/Attendance/attendance.jsx";
import Behaviour from "./Components/Behaviour/behaviour.jsx";
import Homework from "./Components/Homework/homework.jsx";
import Navbar from './Components/Navbar/Navbar.jsx';
import './CSS/App.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h2 style={{marginLeft:"2em"}}>HELLO! PISENCE</h2>
      <Attendance />
      <div className="student_data">
        <Homework />
        <Behaviour />
      </div>
    </div>
  );
}

export default App;
