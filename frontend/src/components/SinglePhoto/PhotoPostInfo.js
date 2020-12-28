import { useParams } from 'react-router-dom';

const PhotoPostInfo = ({ photo, user }) => {
    const params = useParams();
    console.log('test', user);
    return (
        <div className='user-info_container'>
            <div className='user-info'>
                <img className="post-image" src={photo.imageLink} alt={photo.title} />
                <div className="user-info_headers">
                    <h3>{photo.title}</h3>
                    <h4>{user.username}</h4>
                </div>
            </div>
        </div>
    )
};

export default PhotoPostInfo;
