import InfixToRPN from '../../../src/exercicios/Lista_1/Questao_6';

describe('InfixToRPN', () => {
    test('Converte expressão infix para RPN corretamente', () => {
        const infixConverter = new InfixToRPN();
        expect(infixConverter.infixToRPN("(a+(b*c))")).toBe("a b c * +");
        expect(infixConverter.infixToRPN("((a+b)*(z+x))")).toBe("a b + z x + *");
        expect(infixConverter.infixToRPN("((a+t)*((b+(a+c))^(c+d)))")).toBe("a t + b a c + + ^ c d + *");
        expect(infixConverter.infixToRPN("(a+b)+c/d")).toBe("a b + c d / +");
        expect(infixConverter.infixToRPN("a*b-(c-d)+e")).toBe("a b * c d - - e +");
    });
});