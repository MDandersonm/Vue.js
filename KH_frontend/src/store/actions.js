import {
    REQUEST_CREATE_BOARD_DATA_TO_SPRING
} from './mutation-types'

import axios from 'axios'
// 포트8080이 화면구성역할, 7777은 데이터처리역할  실제 브라우저에서 7777로접속할 경우는 없을것.
export default {
    requestCreateBoardToSpring ({}, payload) {

        const { title, content, writer } = payload
        return axios.post('http://localhost:7777/board/register',
            { title, content, writer })
            .then(() => {
                alert('게시물 등록 성공!')
            })
            .catch(() => {
                alert('문제 발생!')
            })
    }
}