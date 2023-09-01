import { useParams } from 'react-router-dom';

const CommonHeader: React.FC = () => {
    const { owner, repo } = useParams();

    return (
        <header>
            <h1>{owner} / {repo}</h1>
        </header>
    );
};

export default CommonHeader;
