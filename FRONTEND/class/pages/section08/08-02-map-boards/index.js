import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const myStyles = {
    margin: "10px",
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div>
          <span>
            <input type="checkbox" />
          </span>
          <span style={myStyles}>{el.number}</span>
          {/* 원래는 style에 myStyles가 들어가는데, 굳이 변수를 만들지 않아도 그 내용 자체만 넣을 수 있음. 그래서 중괄호가 2개가 되는 것임. */}
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
