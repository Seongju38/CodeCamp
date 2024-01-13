import { ChangeEvent, MouseEvent } from "react";
import { RedInput, BlueButton } from "./BoardWrite.styles";

interface IBoardWriteUIProps {
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
  isEdit: boolean
  data?: any
}
export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <div>
      <div>@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@</div>
      <div>
        작성자:
        <RedInput
          type="text"
          onChange={props.onChangeWriter}
          defaultValue={props.data?.fetchBoard.writer}
        />
        제목:
        <input
          type="text"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
        내용:
        <input
          type="text"
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <BlueButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </BlueButton>
      </div>
      <div>@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@</div>
    </div>
  );
}

export const apple = 3;
