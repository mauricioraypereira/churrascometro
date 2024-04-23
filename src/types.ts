export type Foods = "meat" | "sausage" | "chicken" | "garlicBread";

export const peoplesQuantities: Record<Foods, number> = {
    meat: 400,
    sausage: 200,
    chicken: 200,
    garlicBread: 100,
};

export const foodsNames: Record<string, string> = {
    meat: "Carne",
    sausage: "Linguiça",
    chicken: "Frango",
    garlicBread: "Pão de Alho",
};