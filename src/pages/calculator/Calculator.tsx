import CalculatorBarbacue from "../../components/calculator-barbacue/CalculatorBarbacue";
import bgImage from '../../assets/bg-1.jpg';

const Calculator = () => {
    return (
        <div 
            className="page-container"
            style={{ backgroundImage: `url(${bgImage})`}}
        >
            <h1>Calculadora de Churrasco</h1>;
            <CalculatorBarbacue />
        </div>
    )
};

export default Calculator;