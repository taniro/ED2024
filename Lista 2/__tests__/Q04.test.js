
import Fila from "../structures/Fila";
import intercalarFilas from "../src/Q04";

let fila1;
let fila2;
beforeEach(
   () => {
        fila1 = new Fila(5);
        fila2 = new Fila(5)
    }
)
test("Intercalar filas",
    () => {
        fila1.enqueue(1)
        fila1.enqueue(2)
        fila1.enqueue(3)
        fila2.enqueue(4)
        fila2.enqueue(5)
        fila2.enqueue(6)
        expect(intercalarFilas(fila1, fila2)).toBe("[1 4 2 5 3 6]");
    }
);