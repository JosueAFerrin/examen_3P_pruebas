//Función de Fahrenheit a Celsius
function toCelsius(f) {
    if (!Number.isFinite(f)) throw new TypeError('El número ingresado no debe ser infinito');
    return Number(((f - 32) * 5 / 9).toFixed(1));
}

//Función para convertir de Celsius a Fahrenheit
function toFahrenheit(c) {
    if (!Number.isFinite(c)) throw new TypeError('El número ingresado no debe ser infinito');
    return Number(((c * 9 / 5) + 32).toFixed(1));
}


function movingAverage(series, window) {
    if (!Array.isArray(series) || !series.every(Number.isFinite)) {
        throw new TypeError('Series must be an array of finite numbers');
    }
    if (!Number.isInteger(window) || window < 2 || window > series.length) {
        throw new RangeError('Window must be an integer >= 2 and <= series.length');
    }
    const result = [];
    for (let i = 0; i <= series.length - window; i++) {
        const avg = series.slice(i, i + window).reduce((a, b) => a + b, 0) / window;
        result.push(Number(avg.toFixed(2)));
    }
    return result;
}

module.exports = { toCelsius, toFahrenheit, movingAverage };