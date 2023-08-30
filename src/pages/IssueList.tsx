import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { getIssues } from "../api/api";
import { IssueList } from "../types/issues";


const AD_IMAGE = "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100";

const IssuesWrapper = styled.div`
  padding: 20px;
  background-color: #f6f8fa;
  font-family: Arial, sans-serif;
`;

const IssueRow = styled.div`
  padding: 10px 15px;
  background-color: #ffffff;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }

  & > span {
    margin-right: 10px;
  }
`;

const AdImage = styled.img`
  width: 110px;
  display: block;
  margin: 10px 0;
`;

const IssueListComponent: React.FC = () => {
    const [issues, setIssues] = useState<IssueList>([]);
    const [page, setPage] = useState(1);

    const owner = "angular";
    const repo = "angular-cli";

    const fetchIssues = useCallback(async () => {
        const data = await getIssues(owner, repo);
        setIssues((prev) => [...prev, ...data]);
        setPage((prev) => prev + 1);
    }, [page]);

    useEffect(() => {
        fetchIssues();
    }, [fetchIssues]);

    // Infinite scroll
    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            fetchIssues();
        }
    };

    return (
        <IssuesWrapper>
            {issues.sort((a, b) => b.comments - a.comments).map((issue, index) => (
                <React.Fragment key={issue.number}>
                    {(index + 1) % 5 === 0 && (
                        <a href="https://www.wanted.co.kr/">
                            <AdImage src={AD_IMAGE} alt="Ad" />
                        </a>
                    )}
                    <IssueRow>
                        #{issue.number} - {issue.title} by {issue.user.login} on {new Date(issue.created_at).toLocaleDateString()} with {issue.comments} comments
                    </IssueRow>
                </React.Fragment>
            ))}
        </IssuesWrapper>
    );
};

export default IssueListComponent;