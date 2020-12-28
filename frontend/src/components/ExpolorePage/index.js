import React, { useEffect, useState } from 'react';
import PhotoStream from './PhotoStream';
import './ExplorePage.css';


const ExplorePage = () => {

    const [photos, setPhotos] = useState([]); //use selector to get info from the redux store
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const photosList = await fetch('/api/photos');
            const { photos } = await photosList.json();
            setPhotos(photos); //dispatch an action to the redux store
        })()
    }, []);

    useEffect(() => {
        (async () => {
            const usersList = await fetch('/api/users');
            const { users } = await usersList.json();
            setUsers(users); //dispatch an action to the redux store
        })()
    }, []);

    return (
        <div className="photo-stream_container">
            <PhotoStream photos={photos} users={users} />
        </div>
    );
}

export default ExplorePage;
