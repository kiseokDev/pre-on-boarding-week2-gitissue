type IssueType = {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  labels: object;
  state: string;
  locked: boolean;
  assignee: object | null;
  assignees: object;
  milestone: object | null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  active_lock_reason: object | null;
  body: string;
  reactions: object;
  timeline_url: string;
  performed_via_github_app: object | null;
  state_reason: object | null;// 이슈 상태 (예: open, closed)
};

type IssueListType = IssueType[];

export type {IssueType, IssueListType};
