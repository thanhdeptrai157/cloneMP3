import axios from '../axios'
export const getArtistByName = (aid) => new Promise(async (resolve, reject)=>{
    try {
        const response = await axios({
            url: '/artist',
            method: 'get',
            params: {name: aid},
        });
        resolve(response)
    }
    catch (error){
        reject(error)
    }
})