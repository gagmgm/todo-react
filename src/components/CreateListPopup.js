import React from 'react';
    
function CreateListPopup(props) {
    return (
        <div id="edit-area-wrapper" className={props.popupToDo ? 'opened-edit-area-wrapper' : ''}>
            <button id="close-popup" className="btn btn-close" onClick={props.togglePopup}>x</button>
            <div className='edit-area'>
                <div className="form-group">
                    <label htmlFor="title-text">Title</label>
                    <input type="text" id="title-text" />
                </div>
                <div className="form-group">
                    <label htmlFor="textarea">Description</label>
                    <textarea id="textarea"></textarea>
                </div>
                <button className="btn-primary" id="btn-submit">Submit</button>
            </div>
        </div>
    )
}

export default CreateListPopup;
