import React, { useEffect } from "react";
import styled from "styled-components";
import CommonHeader from "../component/common/Commonheader";
import { useIssues } from "../hooks/useIssue";
import infinityScroll from '../feature/infinityscroll';
import Loading from '../component/common/Loading';
import IssueItem from '../component/issueItem';
import Ad from '../component/common/Ad';


const IssueListComponent: React.FC = () => {
    const { issues, isLoading, isError, fetchIssues } = useIssues();
    
  const getIssuesCallback = () => {
    if (!isLoading) {
      return fetchIssues().catch(error => {
        console.error('Error fetching issues:', error);
      });
    }
    return Promise.resolve(); 
  }
    const observer = infinityScroll({callback:getIssuesCallback})

    return (
        <>
            <CommonHeader />
            <ul>
                {issues.sort((a, b) => b.comments - a.comments).map((issue, index) => (
                    <li key={issue.id}>
                        <IssueItem issue={issue}  />
                        {(index + 1) % 4 === 0 && <Ad/>}
                    </li>
                ))}
                {isLoading && <Loading/>}
                {isError ? <div>에러났어요@@</div>:<ObserveRef ref={observer}/>}
            </ul>
        </>
    );
};

export default IssueListComponent;



const ObserveRef = styled.li`
  height: 20px;
`;
