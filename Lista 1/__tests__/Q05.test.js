import Pilha from "../src/Pilha";
import analisaSequencia from "../src/Q05-AnalisaSequencia"

let p;
beforeEach (
    () => {
    p = new Pilha();
});

test("Verificação da sequência",
    () => {
        const texto1 = "[ ( ) [ ( ) ] ]( )";
        expect(analisaSequencia(p, texto1)).toBe(true);
       const texto2 = "( ( ) ]";
        expect(analisaSequencia(p, texto2)).toBe(false);
});

