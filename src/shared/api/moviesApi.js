import axios from 'axios';

// Екземпляр класу
const instance  = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key: "833791a5e754a1f0443be5fc62646bdb",
    }
});

// Популярні за 1 день
export const getPopular = async () => await instance.get('trending/movie/day');

// Пошук фільму ключовим словом &language=en-US&page=1&include_adult=false
export const getQuery = async query => await instance.get('search/movie',{
        params:{
            include_adult: false,
            query,
        }
    });

// Запит повної інформації про фільм &language=en-US
export const getDetals = async movieId => await instance.get(`movie/${movieId}`);

// запит інформації про акторський склад &language=en-US
export const getCast = async movieId => await instance.get(`movie/${movieId}/credits`);

// запит оглядів для сторінки кінофільму &language=en-US&page=1
export const getReviews = async movieId => await instance.get(`movie/${movieId}/reviews`);