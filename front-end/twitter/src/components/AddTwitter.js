import React from 'react';

function AddTwitter(props) {
    return (
        <div class="form-twitter">
            <textarea classNam="form-control" rows="3" placeholder='twitter something...'></textarea>
            <div className='addTwitter'>
                <button type="button" className="btn btn-primary">Twitter</button> 
            </div>
        </div>
    );
}

export default AddTwitter;