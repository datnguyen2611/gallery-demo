import React from "react";

const UploadFrom = () =>{
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    
    return(
        <div>
            <form>
            <label>
                <input type="file"/>
                <span>+</span>
            </label>
            </form>
        </div>
    );
}

export default UploadFrom;