import Mock from 'mockjs'
import { bookEntityTemp } from '../../database/book/book'
export default Mock.mock('/bookList/', 'get', {
    code: 20000,
    message: '@cparagraph',
    'list|1-5': [
        { ...bookEntityTemp }
    ]
})
