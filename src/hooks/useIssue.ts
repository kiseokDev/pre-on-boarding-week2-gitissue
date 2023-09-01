import { useRef, useState} from 'react';
import {IssueListType} from '../types/issues';
import {useParams} from 'react-router-dom';
import {getIssues} from '../api/api';
import infinityScroll from '../feature/infinityscroll';


export const useIssues = () => {
  const [issues, setIssues] = useState<IssueListType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const {owner = '', repo = ''} = useParams<{owner?: string; repo?: string}>();
  const [isError, setIsError] = useState(false);

  const pageRef = useRef(1);
  const isEndRef = useRef(false);

  const fetchIssues = async () => {
    if (isEndRef.current) return;
    setIsLoading(true);
    try {
      const newIssues = await getIssues(owner, repo, pageRef.current);
      if (newIssues.length === 0) {
        isEndRef.current = true;
        return;
      }
      pageRef.current = pageRef.current + 1;
      setIssues(prevIssues => [...prevIssues, ...newIssues]);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };


  return {issues, isLoading, isError, fetchIssues};
};
