const axios = require('axios')

module.exports = async function getAppRoutes() {

    // const instance = axios.create({
    //     baseURL: 'http://saghfosara.ir/api',
    //   });

    let routes = []

    const categories = await axios.get('http://saghfosara.ir/api/categories').then(res => res.data.forEach(c => routes.push('/category/' + c.id)))
    const homes = await axios.get('http://saghfosara.ir/api/properties').then(res => res.data.forEach(c => routes.push('/homes/' + c.id)))
    const posts = await axios.get('http://saghfosara.ir/api/posts').then(res => res.data.forEach(c => routes.push('/posts/' + c.id)))

    return routes
}