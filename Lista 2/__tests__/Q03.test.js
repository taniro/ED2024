import FilaCaminhoes from "../src/Q03";

let c;

beforeEach(
    () => {
        c = new FilaCaminhoes();
    }
);

test("Verificar fila recém criada",
    () => {
    expect(c.emAguardo()).toBe(true); //isEmpty
    expect(c.carregamentoAtingido()).toBe(false); //isFull
});

test("Chegada de um caminhão",
    () => {
    c.chegada("A");
    expect(c.emAguardo()).toBe(false);
});

test("Saída de um caminhão",
    () => {
    c.chegada("A");
    c.chegada("B");
    expect(c.emAguardo()).toBe(false);
    c.saida();
    expect(c.emAguardo()).toBe(false);
    c.saida();
    expect(c.emAguardo()).toBe(true);

});

test("Verificar caminhões aguardando",
    () => {
    c.chegada("A")
    c.chegada("B")
    expect(c.emAguardo()).toBe(false);
})

test("Verificar se carregamentos do dia foi atingido",
    () => {
    c.chegada("A")
    c.chegada("B")
    c.chegada("C")
    c.chegada("D")
    c.chegada("E")
    c.chegada("F")
    c.chegada("G")
    c.chegada("H")
    c.chegada("I")
    expect(c.carregamentoAtingido()).toBe(false);
    c.chegada("J")
    expect(c.carregamentoAtingido()).toBe(true);

    c.saida();
    c.saida();
    c.saida();
    c.saida();
    c.saida();
    c.saida();
    c.saida();
    c.saida();
    c.saida();
    c.saida();
    expect(c.carregamentoAtingido()).toBe(false);
})

test("Listar carregamentos",
    ( ) => {
        c.chegada("A")
        c.chegada("B")
        expect(c.toString()).toBe("[A B]")
} )