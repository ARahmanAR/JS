// ====================================
// Project: Simple Calculator
// ====================================

class Calculator {
    constructor() {
        this.result = 0;
        this.history = [];
    }

    // Basic operations
    add(a, b = null) {
        if (b === null) {
            this.result += a;
        } else {
            this.result = a + b;
        }
        this.addToHistory('add', a, b);
        return this.result;
    }

    subtract(a, b = null) {
        if (b === null) {
            this.result -= a;
        } else {
            this.result = a - b;
        }
        this.addToHistory('subtract', a, b);
        return this.result;
    }

    multiply(a, b = null) {
        if (b === null) {
            this.result *= a;
        } else {
            this.result = a * b;
        }
        this.addToHistory('multiply', a, b);
        return this.result;
    }

    divide(a, b = null) {
        const divisor = b === null ? a : b;
        if (divisor === 0) {
            throw new Error("Division by zero is not allowed");
        }
        if (b === null) {
            this.result /= a;
        } else {
            this.result = a / b;
        }
        this.addToHistory('divide', a, b);
        return this.result;
    }

    // Advanced operations
    power(base, exponent) {
        this.result = Math.pow(base, exponent);
        this.addToHistory('power', base, exponent);
        return this.result;
    }

    sqrt(num) {
        if (num < 0) {
            throw new Error("Cannot calculate square root of negative number");
        }
        this.result = Math.sqrt(num);
        this.addToHistory('sqrt', num);
        return this.result;
    }

    percentage(num, percent) {
        this.result = (num * percent) / 100;
        this.addToHistory('percentage', num, percent);
        return this.result;
    }

    // Utility methods
    clear() {
        this.result = 0;
        return this.result;
    }

    getResult() {
        return this.result;
    }

    addToHistory(operation, a, b = null) {
        this.history.push({
            operation,
            operands: b === null ? [a] : [a, b],
            result: this.result,
            timestamp: new Date()
        });
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        this.history = [];
    }

    // Chain operations
    reset(value = 0) {
        this.result = value;
        return this;
    }
}

// Demo usage
console.log("=== Calculator Demo ===\n");

const calc = new Calculator();

// Basic operations
console.log("10 + 5 =", calc.add(10, 5));
console.log("20 - 8 =", calc.subtract(20, 8));
console.log("6 * 7 =", calc.multiply(6, 7));
console.log("100 / 4 =", calc.divide(100, 4));

// Advanced operations
console.log("\n2^8 =", calc.power(2, 8));
console.log("√144 =", calc.sqrt(144));
console.log("20% of 150 =", calc.percentage(150, 20));

// Chain operations
console.log("\nChained operations:");
const result = calc.reset(10)
    .add(5)
    .multiply(2)
    .subtract(5)
    .divide(5)
    .getResult();
console.log("Result:", result);

// History
console.log("\nCalculation history:");
calc.getHistory().slice(-3).forEach(entry => {
    console.log(`${entry.operation}(${entry.operands.join(', ')}) = ${entry.result}`);
});

// Error handling
console.log("\nError handling:");
try {
    calc.divide(10, 0);
} catch (error) {
    console.log("Error caught:", error.message);
}

try {
    calc.sqrt(-4);
} catch (error) {
    console.log("Error caught:", error.message);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator;
}
