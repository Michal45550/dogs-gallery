import {useSelector} from "react-redux";

const Summary = () => {

    const breeds = useSelector(({DogGallery}) => DogGallery.breeds);

    return (
        <div>
            <div>Galley summary: {breeds.length}</div>
            {breeds.length && breeds.filter(b => b.count > 0).map((breed, index) =>
                <div key={index}>
                    <div>{breed.breed}</div>
                    <div>count: {breed.count}</div>
                    <div>likes: {breed.likes}</div>
                </div>
            )}
        </div>
    );
};

export default Summary;
