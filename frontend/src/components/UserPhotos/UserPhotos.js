import React from 'react';
import { Link } from 'react-router-dom';

const UserPhotos = ({ photos, users }) => {
    return (
        <>
            {photos.map((photo) =>
                <Link to={`/photos/${photo.id}`} key={photo.id}>
                    <img className="photo-stream_img" src={photo.imageLink} alt={photo.title} />
                </Link>
            )}
        </>
    )
}

export default UserPhotos;
