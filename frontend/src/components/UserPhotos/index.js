import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserPhotos from './UserPhotos'

const UserPhotoStream = () => {

    const [photos, setPhotos] = useState([]);
    const [users, setUsers] = useState([]);
    const userId = useSelector(state => state.session.user.id);

    useEffect(() => {
        (async () => {
            const photosList = await fetch(`/api/photos/user-photos/${userId}`);
            const photos = await photosList.json();
            setPhotos(photos); //dispatch an action to the redux store
        })()
    }, []);

    useEffect(() => {
        (async () => {
            const usersList = await fetch('/api/users');
            const { users } = await usersList.json();
            setUsers(users);
        })()
    }, []);

    if (!photos.userPhotos) {
        return null;
    }

    return (
        <div className="user-photos_container">
            <UserPhotos photos={photos.userPhotos} users={users} />
        </div>
    );
}

export default UserPhotoStream
