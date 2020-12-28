import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePhotoPost from './SinglePhotoPost';
import PhotoPostInfo from './PhotoPostInfo';
import './SinglePhotoPost.css';

const SinglePhoto = () => {

    const [photo, setPhoto] = useState([]); //use selector to get info from the redux store
    const [user, setUser] = useState([]);
    const params = useParams();

    useEffect(() => {
        (async () => {
            const photoPost = await fetch(`/api/photos/${params.id}`);
            const { photo } = await photoPost.json();
            setPhoto(photo); //dispatch an action to the redux store
        })()
    }, [params]);

    useEffect(() => {
        (async () => {
            const userInfo = await fetch(`/api/users/${params.id}`);
            const { user } = await userInfo.json();
            setUser(user); //dispatch an action to the redux store
        })()
    }, [params]);

    return (
        <div className="main-container">
            <SinglePhotoPost photo={photo} user={user} />
            <PhotoPostInfo photo={photo} user={user} />
        </div>
    )
}


export default SinglePhoto;
