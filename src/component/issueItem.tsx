import { useNavigate } from 'react-router-dom';
import { IssueType } from '../types/issues';
import { styled } from 'styled-components';


interface ListType {
    issue: IssueType;
  }

const IssueItem =  ({ issue }: ListType) => {
    const navigate = useNavigate();
    const createDate = issue.created_at?.split('T')[0];

    return (
      <ListContent
        onClick={() => navigate(`/issues/${issue.number}`, { state: { issue } })}
      >
        <TopContent>
          <Number>#{issue.number}</Number>
          <Title>{issue.title}</Title>
          <Conmment>코멘트: {issue.comments}</Conmment>
        </TopContent>
  
        <BottomContent>
          <span>작성자: {issue.user.login}</span>
          <span>작성일: {createDate}</span>
        </BottomContent>
      </ListContent>
    );
  };
  
  export default IssueItem;
  
  const ListContent = styled.div`
    padding: 10px 0;
    margin: 10px 0;
    width: 100%;
    border-bottom: 1px solid #6e6e6e;
    cursor: pointer;
  
    &:hover {
      transform: scale(103%);
      transition: all 0.7s;
    }
  `;
  
  const TopContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  `;
  
  const BottomContent = styled.div`
    display: flex;
    gap: 10px;
    color: var(--gray-800);
  `;
  
  const Number = styled.span`
    font-weight: 700;
    color: var(--light);
  `;
  
  const Title = styled.span`
    display: inline-block;
    width: 75%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--white);
  `;
  
  const Conmment = styled.span`
    display: inline-block;
    text-align: right;
    width: 15%;
    color: var(--gray-800);
  `;
  