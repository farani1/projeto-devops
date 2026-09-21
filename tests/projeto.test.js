const test = require('node:test');
const assert = require('node:assert');

const {
    somar,
    subtrair,
    multiplicar,
    dividir,
    ehPar
} = require('../projeto');

test('deve somar dois números corretamente', () => {
    assert.strictEqual(somar(2, 3), 5);
});

test('deve subtrair dois números corretamente', () => {
    assert.strictEqual(subtrair(10, 4), 6);
});

test('deve multiplicar dois números corretamente', () => {
    assert.strictEqual(multiplicar(5, 4), 20);
});

test('deve dividir dois números corretamente', () => {
    assert.strictEqual(dividir(10, 2), 5);
});

test('deve identificar um número par', () => {
    assert.strictEqual(ehPar(8), true);
});

test('deve identificar um número ímpar', () => {
    assert.strictEqual(ehPar(7), false);
});

test('deve gerar erro ao tentar dividir por zero', () => {
    assert.throws(
        () => dividir(10, 0),
        /Divisão por zero não é permitida/
    );
});