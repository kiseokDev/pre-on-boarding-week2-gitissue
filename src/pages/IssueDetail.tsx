// IssueDetail.tsx
import React, { useEffect, useState } from 'react';
import { getIssueDetail } from '../api/api';
import { IssueType } from '../types/issues';
import { useLocation } from 'react-router-dom';

const IssueDetail = () => {
    const location = useLocation();
    const issue = location.state.issue;

    if (!issue) return <div>Loading...</div>;

    return (
        <div>
            helloworld
            <h2>{issue.title}</h2>
            {/* <p>{issue.body}</p> */}
        </div>
    );
}

export default IssueDetail;
