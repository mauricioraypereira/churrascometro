import { useLocation, useNavigate } from "react-router-dom";
import { Foods, foodsNames, peoplesQuantities } from "../../types";
import styles from "./ResultsBarbacue.module.css";

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
        <div className={styles.container}>
            <h2 className={styles.resultTitle}>Resultado para {state.peoples} pessoa(s):</h2>
            {state.selectedFoods.map((food) => (
               <p key={food} className={styles.resultText}>{foodsNames[food]}: {totalByFood[food]} kg</p>
            ))}
            <button onClick={resetValues} className={styles.resetButton}>Refazer Cálculos</button>
        </div>
    )
};

export default ResultsBarbacue;