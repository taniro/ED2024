import Fila from "../structures/Fila";
import filaInvertida from "../src/Q06";

let f;
beforeEach(
   () => {
        f = new Fila(5);
       }
)

test("Teste de FIFO",
    () => {
        f.enqueue('A')
        f.enqueue('B')
        f.enqueue('C')
        expect(f.front()).toBe('A');
        f.dequeue()
        expect(f.front()).toBe('B');
    }
);

test('Reverter a fila',
    () => {
        f.enqueue('1')
        f.enqueue('2')
        f.enqueue('3')
        f.enqueue('4')
        filaInvertida(f);
        expect(f.toString()).toBe('[4 3 2 1]');

    }
);