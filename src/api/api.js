import axios from 'axios'
let baseUrl =  'https://www.easy-mock.com/mock/5ce4f29205cfa02d07e9b57c/example'
export function getExample(){
    return axios({
        methods: 'get',
        url: baseUrl + '/userInfo'
    })
}