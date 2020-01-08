import axios from 'axios'
let baseUrl = '/api'
export function getExample(){
    return axios({
        methods: 'get',
        url: baseUrl + '/index'
    })
}