import React, { Component } from "react";
import BoardService from "../BoardService";

class ListBoard extends Component {
  constructor(props) {
    super(props);
    // # 1.
    this.state = {
      boards: [],
    };
  }
  // # 2.
  componentDidMount() {
    BoardService.getBoards().then((res) => {
      this.setState({ boards: res.data });
    });
  }

  // # 3.
  render() {
    return (
      <div>
        <h2 className="text-center">Boards List</h2>
        {/* <hr /> */}
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>글 번호</th>
                <th>제목 </th>
                <th>작성자 </th>
                <th>작성일 </th>
                <th>모집기간 </th>
                {/* <th>좋아요수 </th> */}
                {/* <th>조회수 </th> */}
              </tr>
            </thead>
            <tbody>
              {this.state.boards.map((board) => (
                <tr key={board.no}>
                  <td> {board.no} </td>
                  <td> {board.title} </td>
                  <td> {board.memberNo} </td>
                  <td> {board.createdTime} </td>
                  <td> {board.updatedTime} </td>
                  {/* <td> {board.likes} </td> */}
                  {/* <td> {board.counts} </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListBoard;
