import { useLocation, useNavigate } from "react-router-dom";
import { Foods, foodsNames, peoplesQuantities } from "../../types";

type ResultsBarbacue = {
    peoples: number,
    selectedFoods: Foods[];
};

const ResultsBarbacue = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state as ResultsBarbacue;

    const totalByFood = state.selectedFoods.reduce(
        (acc, food) => {
            acc[food] = (peoplesQuantities[food] * state.peoples)  / 1000;
            return acc;
        }, 
        {} as Record<Foods, number>
    );

    const resetValues = () => {
        navigate("/");
    };

    return (
        <div>
            <h2>Resultado para {state.peoples} pessoa(s):</h2>
            {state.selectedFoods.map((food) => (
               <p key={food}>{foodsNames[food]}: {totalByFood[food]} kg</p>
            ))}
            <button onClick={resetValues}>Refazer Cálculos</button>
        </div>
    )
};

export default ResultsBarbacue;