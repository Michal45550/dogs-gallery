import defaultAxios from 'axios';

export const axiosInstance = defaultAxios.create({
    baseURL: 'https://dog.ceo/api/',
    headers: {'Content-Type': 'application/json'}
});

export const getAllBreeds = async () => {
    try {
        const result = await axiosInstance.get('breeds/list/all');
        return result.data.message;
    } catch (err) {
        return console.error(err);
    }
};

export const getDogImage = async (breed) => {
    try {
        const result = await axiosInstance.get(`breed/${breed}/images/random`);
        return result.data.message;
    } catch (err) {
        return console.error(err);
    }
};
