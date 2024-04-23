import { useNavigate } from "react-router-dom";
import { foodsNames } from "../../types";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import styles from './CalculatorBarbacue.module.css';

const validationScheme = Yup.object().shape({
    peoples: Yup.number().min(1, "Número de pessoas é obrigatório!"),
    selectedFoods: Yup.array()
        .of(Yup.string())
        .test(
            "check-selectedFoods",
            "Selecione pelo menos um alimento!",
            (array) => array !== null && array!.length > 0
        ),
})  

const CalculatorBarbacue = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <Formik 
                initialValues={{ peoples: 0, selectedFoods: [] }}
                validationSchema={validationScheme}
                onSubmit={(values) => {
                    navigate("/results", {
                        state: {
                            peoples: values.peoples,
                            selectedFoods: values.selectedFoods
                        }
                    })
                }}>
                {({ errors, touched }) => (
                    <Form>
                        <div className={styles.inputGroup}>
                            <label htmlFor="peoples" className={styles.inputLabel}>Número de Pessoas:</label>
                            <Field 
                                name="peoples" 
                                type="number" 
                                className={styles.inputField}
                            />
                            {errors.peoples && touched.peoples ? (
                                <p className={styles.error}>{errors.peoples}</p>
                            ) : null}
                        </div>
                        <h2>Selecione os alimentos para o churrasco</h2>
                        {Object.keys(foodsNames).map((food, index) => (
                            <div key={index}>
                                <Field 
                                    type="checkbox" 
                                    name="selectedFoods" 
                                    value={food}
                                    className={styles.checkboxInput}
                                />
                                <label htmlFor="selectedFoods">
                                    {foodsNames[food]}
                                </label>
                            </div>
                        ))}
                        {errors.selectedFoods ? (
                            <p className={styles.error}>{errors.selectedFoods}</p>
                        ) : null}
                        <button type="submit" className={styles.calculateButton}>Calcular</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CalculatorBarbacue;