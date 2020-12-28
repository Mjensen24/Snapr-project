import { useParams } from 'react-router-dom';
import './SinglePhotoPost.css';

const SinglePhotoPost = ({ photo }) => {
    const params = useParams();
    // console.log(photo);
    return (
        <div className="photo-post_container">
            <div className="post-container">
                <img className="post-image" src={photo.imageLink} alt={photo.title} />
            </div>
        </div>
    )
}

export default SinglePhotoPost;
