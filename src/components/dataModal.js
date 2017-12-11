
import axios from 'axios'
// // 获取图书信息
export function getBook() {
    return new Promise((resolve, reject) => {
        axios.get('#').then(res => {
            const param = require('./book.json')
            resolve(param)
        }, response => {
            // reject(res);
        })
    });
}

// 获取单词信息
export function getWord() {
    return new Promise((resolve, reject) => {
        axios.get('#').then(res => {
            const param = require('./word.json')
            resolve(param)
        }, response => {
            // reject(res);
        })
    });
}

// 获取参数信息
export function getParam() {
    return new Promise((resolve, reject) => {
        axios.get('#').then(res => {
            const param = require('./param.json')
            resolve(param)
        }, response => {
            // reject(res);
        })
    });
}

// 保存数据
export function setUpdate(data) {
    return new Promise((resolve, reject) => {
        axios.post('#').then(res => {
            resolve(true)
        }, response => {
            reject(false);
        })
    });
}

//查询
export function searchData(param){
    // 把param 添加到href 后面， param 时一个对象
    let url = deletLastSlash(location.href)
    for(let item in  param){
        url = url + "/" +param[item]
    }
    console.log(url)
    // 会有编码问题
    return new Promise((resolve, reject) => {
        axios.post(url).then(res => {
            resolve(true)
        }, response => {
            reject(false);
        })
    });
}

function deletLastSlash(url){
    let index = url.lastIndexOf("\/")
    if(index+1 === url.length){
        return url.slice(0, -1)
    }
    return url
}