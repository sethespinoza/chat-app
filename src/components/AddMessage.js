import React from "react";
import './AddMessage.css';
function AddMessage() {
    return (
        <div className="new-message">
            <input type="text" className ="message-input" placeholder="" />
        </div>
    );
}
export default AddMessage;