type Issue = {
  number: number; // 이슈번호
  title: string; // 이슈제목
  user: {
    login: string; // 작성자
    avatar_url: string; // 작성자 프로필 이미지
  };
  created_at: string; // 작성일
  comments: number; // 코멘트 수
  body: string; // 본문
  state: "open" | "closed"; // 이슈 상태 (예: open, closed)
};

type IssueList = Issue[];

export type {Issue, IssueList};
