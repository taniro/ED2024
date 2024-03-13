import Pilha from "../src/Pilha";
import decParaBin from "../src/Q04-DecParaBin";

let p;
beforeEach(
    () => {
    p = new Pilha();
});

test("Conversão decimal para binário",
    () => {
    expect(decParaBin(10, p)).toBe("1010")
});