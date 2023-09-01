import api from "./instance";
import {IssueType, IssueListType} from "../types/issues"; // 타입 임포트

export const getIssues = async (
  owner: string,
  repo: string,
  page: number
): Promise<IssueListType> => {
  const response = await api.get<IssueListType>(
    `/repos/${owner}/${repo}/issues?page=${page}&per_page=28&sort=comments&state=open`
    );
  return response.data;
};

export const getIssueDetail = async (owner: string, repo: string, issueNumber: number): Promise<IssueType> => {
  const response = await api.get<IssueType>(`/repos/${owner}/${repo}/issues/${issueNumber}`);
  return response.data;
};
