import * as axios from 'axios'

let options = {
    baseURL: 'http://localhost:3000/api/fjw',
    timeout: 15000,
    headers: {"Content-Type": "application/x-www-form-urlencoded"}
}
let xhr = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.create(options).get(url, {params}).then(res => {
                resolve(res)
            }).catch(err => {
                // console.log(err)
                reject(err)
            })
        })
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            axios.create(options).post(url, params).then(res => {
                resolve(res)
            }).catch(err => {
                // console.log(err)
            })
        })
    }
}



// The server-side needs a full url to works
// if (process.server) {
//   options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8080}`
// }

export default xhr;
