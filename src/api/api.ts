import http from "./instance";
import {IssueType, IssueListType} from "../types/issues"; // 타입 임포트

export const getIssues = async (
  owner: string,
  repo: string,
  page: number
): Promise<IssueListType> => {
  const issueList = await http.get<IssueListType>(
    `/repos/${owner}/${repo}/issues?page=${page}&per_page=28&sort=comments&state=open`
    );
  return issueList;
};

export const getIssueDetail = async (owner: string, repo: string, issueNumber: number): Promise<IssueType> => {
  const issueDetail = await http.get<IssueType>(`/repos/${owner}/${repo}/issues/${issueNumber}`);
  return issueDetail;
};
