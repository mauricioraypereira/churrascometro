import { useNavigate } from "react-router-dom";
import { foodsNames } from "../../types";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const CalculatorBarbacue = () => {
    return (
        <div>
            <Formik 
                initialValues={{ peoples: 0, selectedFoods: [] }}
                onSubmit={() => {}}>
                <Form>
                    <div>
                        <label htmlFor="peoples">Número de Pessoas:</label>
                        <Field name="peoples" type="number" />
                    </div>
                    <h2>Selecione os alimentos para o churrasco</h2>
                    {Object.keys(foodsNames).map((food, index) => (
                        <div key={index}>
                            <Field type="checkbox" name="selectedFoods" value={food} />
                            <label htmlFor="selectedFoods">
                                {foodsNames[food]}
                            </label>
                        </div>
                    ))}
                    <button type="submit">Calcular</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CalculatorBarbacue;