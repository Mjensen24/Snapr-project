import React, { useState, useSelector, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const PostButton = () => {
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState("");
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [album, setAlbum] = useState("");

    // const [photos, setPhotos] = useState([]);
    // const [users, setUsers] = useState([]);
    // const userId = useSelector(state => state.session.user.id);

    // useEffect(() => {
    //     (async () => {
    //         const photosList = await fetch(`/api/photos/post/${userId}`);
    //         const photos = await photosList.json();
    //         setPhotos(photos); //dispatch an action to the redux store
    //     })()
    // }, []);

    return (
        <div className="post-form_container">
            <form>
                <label>
                    Photo
                    <input
                        type="text"
                        name="imageLink"
                        placeholder="Desired Photo"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Title
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Subtitle
                    <input
                        type="text"
                        name="subtitle"
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                    />
                </label>
                <label>
                    Album
                    <input
                        type="text"
                        name="album"
                        value={album}
                        onChange={(e) => setAlbum(e.target.value)}
                    />
                </label>
                <label>
                    <button type='submit'>
                        Post
                    </button>
                </label>
            </form>
        </div>
    )
}

export default PostButton
