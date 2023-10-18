import {useDispatch} from "react-redux";
import {INCREMENT_IMAGE_LIKE} from "../../actions";

const DogImage = ({dogImg}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({type: INCREMENT_IMAGE_LIKE, payload: dogImg})
    }

    return (
        <div className="card" onClick={handleClick}>
            <div>{dogImg.breed}</div>
            <img src={dogImg.image} alt="img" width="50px" height="50px"/>
            <div>likes: {dogImg.likes ? dogImg.likes : 0}</div>
        </div>
    );
};

export default DogImage;
