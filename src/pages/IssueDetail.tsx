// IssueDetail.tsx
import React, { useEffect, useState } from 'react';
import { getIssueDetail } from '../api/api';
import { IssueType } from '../types/issues';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import CommonHeader from '../component/common/Commonheader';
import Markdown from '../component/common/Markdown';

const IssueDetail = () => {
    const location = useLocation();
    const issue = location.state.issue;

    if (!issue) return (<div>@@페이지오류</div>);

    return (
        <DetailContent>
          <CommonHeader />
  
          <TopContent>
            <UserImage src={issue?.user?.avatar_url} />
  
            <RightContent>
              <RightTop>
                <Number>#{issue.number}</Number>
                <Conmment>코멘트: {issue.comments}</Conmment>
                <Title>{issue.title}</Title>
              </RightTop>
  
              <RightBottom>
                <span>작성자: {issue.user?.login}</span>
                <span>작성일: {issue.created_at?.split('T')[0]}</span>
              </RightBottom>
            </RightContent>
          </TopContent>
  
          <Markdown body={issue.body} />
        </DetailContent>
      );
}

export default IssueDetail;


const DetailContent = styled.div``;

const TopContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
  border-bottom: 1px solid #6e6e6e;
`;

const UserImage = styled.img`
  width: 15%;
  margin: auto;
`;

const RightContent = styled.div`
  width: 75%;
  margin: auto 0;
`;

const RightTop = styled.div`
  margin-bottom: 5px;
`;

const RightBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Number = styled.span`
  font-weight: 500;
`;

const Title = styled.p`
  width: 100%;
  margin: 5px 0;
`;

const Conmment = styled.span`
  display: inline-block;
  text-align: right;
  width: 30%;
`;

const Loading = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  margin-top: -32px;
  margin-left: -32px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: #2e2e2e;
  border-bottom-color: #585858;
  animation: spinner 0.8s ease infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

