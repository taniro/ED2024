import verificacao from "../../../src/exercicios/Lista_1/Questao_6";
let texto;
beforeEach(()=> {
    texto = "[()[)";
});
test ("verificacao", ()=>{
    expect(verificacao(texto)).toBe(false);
});