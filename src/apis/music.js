import axios from '../axios'

export const getMusic = (sid) => new Promise(async (resolve, reject)=>{
    try {
        const response = await axios({
            url: '/song',
            method: 'get',
            params: {id: sid},
        });
        resolve(response);
    } catch (error) {
        reject(error)
    }
})
export const getInforMusic = (sid) => new Promise(async (resolve, reject)=>{
    try {
        const response = await axios({
            url: '/infosong',
            method: 'get',
            params: {id: sid},
        });
        resolve(response);
    } catch (error) {
        reject(error)
    }
})

export const getPlaylistMusic = (pid) => new Promise(async (resolve, reject)=>{
    try {
        const response = await axios({
            url: '/detailplaylist',
            method: 'get',
            params: {id: pid},
        });
        resolve(response)
    }
    catch (error){
        reject(error)
    }
})