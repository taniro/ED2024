//resolver aqui

class InfixToRPN {
    /**
     * Cria um objeto para converter expressões infixas para RPN.
     * @constructor
     */
    constructor() {
        this.operators = ['+', '-', '*', '/'];
    }

    /**
     * Método para obter a precedência de um operador.
     * @param {string} operator - O operador a ser verificado.
     * @return {number} - A precedência do operador.
     */
    precedence(operator) {
        if (operator === '+' || operator === '-') {
            return 1;
        } else if (operator === '*' || operator === '/') {
            return 2;
        } else {
            return 0;
        }
    }

    /**
     * Método para converter uma expressão infix para RPN.
     * @param {string} expression - A expressão infix a ser convertida.
     * @return {string} - A expressão na forma RPN.
     */
    infixToRPN(expression) {
        let output = '';
        let operatorStack = [];

        for (let i = 0; i < expression.length; i++) {
            let token = expression[i];
            if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
                    output += operatorStack.pop() + ' ';
                }
                operatorStack.pop(); // Remove '('
            } else if (this.operators.includes(token)) {
                while (operatorStack.length > 0 && this.precedence(operatorStack[operatorStack.length - 1]) >= this.precedence(token)) {
                    output += operatorStack.pop() + ' ';
                }
                operatorStack.push(token);
            } else {
                output += token + ' ';
            }
        }

        while (operatorStack.length > 0) {
            output += operatorStack.pop() + ' ';
        }

        return output.trim();
    }
}

export default InfixToRPN;