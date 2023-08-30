import axios from "axios";

const BASE_URL = "https://api.github.com";
const TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

axios.defaults.headers.common["Authorization"] = `${TOKEN}`;
axios.defaults.headers.common["Content-Type"] = "application/json";

export const getIssues = async (owner: string, repo: string) => {
  const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}/issues`);
  return response.data;
};

export const getIssueDetail = async (owner: string, repo: string, issueNumber: number) => {
  const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}/issues/${issueNumber}`);
  return response.data;
};
