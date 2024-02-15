import './App.css';
import Navbar from './components/Navbar';
import Table from "./components/Table"

function App() {
  const users = [
    {
      name: "Faizan",
      branch: "CSE",
      domain: "Full stack"
    },
    {
      name: "Yumna",
      branch: "CSE",
      domain: "Frontend"
    },
    {
      name: "Shyam",
      branch: "ME",
      domain: "Data science"
    },
    {
      name: "Lal",
      branch: "EEE",
      domain: "Full stack"
    },
    {
      name: "Jaddu",
      branch: "CSE",
      domain: "ML"
    },
    {
      name: "BK",
      branch: "ECE",
      domain: "AI"
    },
    {
      name: "Zaid",
      branch: "IT",
      domain: "Backend"
    },
    {
      name: "Shruti",
      branch: "CSE",
      domain: "IoT"
    },
    {
      name: "Shreya",
      branch: "ME",
      domain: "Robotics"
    },
    {
      name: "Nalini",
      branch: "CE",
      domain: "Mining"
    }
  ]
  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className='my-3'>User Dashboard</h3>
        <Table users={users} />
      </div>
    </>
  );
}

export default App;