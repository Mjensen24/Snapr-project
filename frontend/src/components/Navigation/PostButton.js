import React from 'react';
import { NavLink } from 'react-router-dom';

const PostButton = () => {
    return (
        <div className="post-form_container">
            <form>
                <label>
                    Photo
                    <input
                        type="text"
                        name="imageLink"
                        placeholder="Desired Photo"
                    />
                </label>
                <label>
                    Title
                    <input
                        type="text"
                        name="title"
                    />
                </label>
                <label>
                    Subtitle
                    <input
                        type="text"
                        name="subtitle"
                    />
                </label>
                <lable>
                    Album
                    <input
                        type="text"
                        name="album"
                    />
                </lable>
                <lable>
                    <button>
                        Post
                    </button>
                </lable>
            </form>
        </div>
    )
}

export default PostButton
