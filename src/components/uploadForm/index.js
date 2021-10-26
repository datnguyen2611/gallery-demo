import React,{useState} from "react";
import "./style.css";
const UploadFrom = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
    const changedHandeler =(e) =>{
        let selected = e.target.files[0]
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
           
        }else{
            setFile(null);
            setError('select images file png or jpeg pls')
        }
    }

  return (
    <div>
      <form>
        <label>
          <input type="file"  onChange={changedHandeler}/>
          <span>+</span>
        </label>
      </form>
    </div>
  );
};

export default UploadFrom;
