import './App.css';
import UploadFile from "./components/uploadForm";
function App() {
  return (
    <div className="App">
      <h2 style={{color:"var(--primary)",marginBottom:"10px"}}>Gallery Demo</h2>
      <h1 style={{color:"#000",marginBottom:"10px"}}>Pick your Images</h1>
      <h3 style={{marginBottom:'0'}}>Click here </h3>
      <i className="fas fa-arrow-down"></i>
      <UploadFile/>
    </div>
  );
}

export default App;
