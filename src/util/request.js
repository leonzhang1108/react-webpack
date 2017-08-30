import axios from 'axios'
export default {
  get: (config) => {
    return new Promise((resolve, reject) => {
      axios.get(config.url).then(
        resp => {
          resolve(resp)
        },
        error => {
          reject(error)
        }
      )
    })
  }
}