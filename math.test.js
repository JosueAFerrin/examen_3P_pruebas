const { toCelsius, toFahrenheit, movingAverage } = require('./src/utils/math');

// Pruebas para la función toCelsius
describe('toCelsius', () => {
    test('32°F → 0.0°C', () => {
        expect(toCelsius(32)).toBe(0.0);
    });
    test('212°F → 100.0°C', () => {
        expect(toCelsius(212)).toBe(100.0);
    });
    test('-40°F → -40.0°C', () => {
        expect(toCelsius(-40)).toBe(-40.0);
    });
    test('lanza TypeError para valores no numéricos finitos', () => {
        expect(() => toCelsius(Infinity)).toThrow(TypeError);
        expect(() => toCelsius(NaN)).toThrow(TypeError);
    });
});

// Pruebas para la función toFahrenheit
describe('toFahrenheit', () => {
    test('0°C → 32.0°F', () => {
        expect(toFahrenheit(0)).toBe(32.0);
    });
    test('100°C → 212.0°F', () => {
        expect(toFahrenheit(100)).toBe(212.0);
    });
    test('-40°C → -40.0°F', () => {
        expect(toFahrenheit(-40)).toBe(-40.0);
    });
    test('lanza TypeError para valores no numéricos finitos', () => {
        expect(() => toFahrenheit(Infinity)).toThrow(TypeError);
        expect(() => toFahrenheit(NaN)).toThrow(TypeError);
    });
});

// Pruebas para la función movingAverage
describe('movingAverage', () => {
    test('[10,20,30,40], 2 → [15.00, 25.00, 35.00]', () => {
        expect(movingAverage([10,20,30,40], 2)).toEqual([15.00, 25.00, 35.00]);
    });
    test('[1,2,3], 3 → [2.00]', () => {
        expect(movingAverage([1,2,3], 3)).toEqual([2.00]);
    });
    test('lanza TypeError para serie con valores no numéricos', () => {
        expect(() => movingAverage([1, 'a', 3], 2)).toThrow(TypeError);
    });
    test('lanza RangeError si la ventana es menor que 2', () => {
        expect(() => movingAverage([1,2,3], 1)).toThrow(RangeError);
    });
    test('lanza RangeError si la ventana es mayor que la longitud de la serie', () => {
        expect(() => movingAverage([1,2,3], 4)).toThrow(RangeError);
    });
});