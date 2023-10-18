import './Gallery.css'
import {useDispatch, useSelector} from "react-redux";

import DogImage from "../dogImage/DogImage";
import {useEffect} from "react";
import {ADD_DOG_IMG_REQUEST} from "../../actions";

const Gallery = () => {

    const dispatch = useDispatch();

    const breeds = useSelector(({DogGallery}) => DogGallery.breeds);
    const dogsImages = useSelector(({DogGallery}) => DogGallery.dogsImages);

    useEffect(() => {
        if (dogsImages.length < 100) {
            const num = Math.floor(Math.random() * breeds.length);
            const b = breeds[num];
            if (b === undefined) {
                debugger;
            }
            const randomBreed = b.breed;
            dispatch({type: ADD_DOG_IMG_REQUEST, payload: randomBreed});
        }
    }, [dogsImages, breeds, dispatch]);

    return (
        <div className="gallery">
            {dogsImages.map((dogImg, index) =>
                <DogImage dogImg={dogImg} key={index}/>
            )
            }
        </div>
    )
}

export default Gallery;
