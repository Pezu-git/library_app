import axios from 'axios';
import config from '../config';
import { IBook } from './../interfaces/IBook';
const getCounter = async (books: IBook[]): Promise<any> => {
    let resArr: any[] = [];
    for (const item of books) {
        await axios
            .get(config.COUNTER_URL + `${item.title}`)
            .then(function (response) {
                resArr.push(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return resArr;
};
export default getCounter