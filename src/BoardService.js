// axios 사용을 정의
import axios from "axios";

// spring boot api의 URL정의
const BOARD_API_BASE_URL = "http://localhost:8080/api/board";

//글 목록 데이터를 가져오는 함수
class BoardService {
  getBoards() {
    return axios.get(BOARD_API_BASE_URL);
  }
}

export default new BoardService();
