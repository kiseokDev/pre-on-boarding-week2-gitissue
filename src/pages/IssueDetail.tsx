// IssueDetail.tsx
import React, { useEffect, useState } from 'react';
import { getIssueDetail } from '../api/api';

const IssueDetail = ({ match }: any) => {
    const { owner, repo, issueNumber } = match.params;
    const [issue, setIssue] = useState(null);

    useEffect(() => {
        const fetchIssueDetail = async () => {
            const data = await getIssueDetail(owner, repo, parseInt(issueNumber));
            setIssue(data);
        }

        fetchIssueDetail();
    }, [owner, repo, issueNumber]);

    if (!issue) return <div>Loading...</div>;

    return (
        <div>
            helloworld
            {/* <h2>{issue.title}</h2> */}
            {/* <p>{issue.body}</p> */}
        </div>
    );
}

export default IssueDetail;
