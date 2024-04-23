import ResultsBarbacue from '../../components/results-barbacue/ResultsBarbacue';
import bgImage from '../../assets/bg-2.jpg';

const Results = () => {
	return (
		<div className="page-container" style={{backgroundImage: `url(${bgImage})`}}>
			<h1>Resultado do Churrasco</h1>
			<ResultsBarbacue />
		</div>
	)
};

export default Results;