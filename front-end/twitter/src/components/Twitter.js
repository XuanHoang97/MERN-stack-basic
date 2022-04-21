import React from 'react';
import UpdateTwitter from './UpdateTwitter';

function Twitter(props) {
    return (
        <div className='list-twitter'>
            <div className='content-twitter'>noi dung twitter</div>
            <div className='action-twitter'>
                <div className='info-twitter'>
                    <span>hoang97</span>
                    <span>21/04/2022</span>
                </div>
                <div className='action-twitter'>
                    <span>Edit</span>
                    <span>Delete</span>
                </div>
            </div>
            <UpdateTwitter />
        </div>
    );
}

export default Twitter;