import { carros, carModels } from "./data"

function buscarCarrosPorMarca(frota:carModels[], marca?:string): carModels[] {
    if (marca === undefined) {
        return frota
    }
    return frota.filter(
        (carro:carModels) => {
            return carro.marca === marca
        }
    )
 }
 console.table(buscarCarrosPorMarca(carros, "importado"))