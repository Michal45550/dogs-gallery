import './App.css';
import DogGallery from "./features/dogGallery";
import {Provider} from 'react-redux'
import store from './store'

const App = () => {
    return (
        <Provider store={store}>
            <DogGallery/>
        </Provider>
    );
}

export default App;
