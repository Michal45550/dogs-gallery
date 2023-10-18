import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GET_BREEDS_REQUEST} from "./actions";
import Gallery from "./components/gallery/Gallery";
import Summary from "./components/summary/Summary";

const DogGallery = () => {

    const dispatch = useDispatch();

    const breeds = useSelector(({DogGallery}) => DogGallery.breeds);

    useEffect(() => {
        dispatch({type: GET_BREEDS_REQUEST});
    }, [dispatch]);

    return (
        breeds.length > 0 &&
        <div className="dogsGallery">
            <Summary/>
            <Gallery/>
        </div>
    )
};

export default DogGallery;
