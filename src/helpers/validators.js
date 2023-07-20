/**
 * @file Домашка по FP ч. 1
 *
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если какие либо функции написаны руками (без использования библиотек) это не является ошибкой
 */

import { allPass, anyPass, compose, equals, not } from 'ramda';

// const isWhite = (figure) => figure === 'white';
// const isRed = (figure) => figure === 'red';
// const isGreen = (figure) => figure === 'green';
// const isColor = 

const isWhite = equals('white');
const isNotWhite = compose(not, equals('white'));

const isRed = equals('red');
const isNotRed = compose(not, equals('red'));

const isGreen = equals('green');
const isOrange = equals('orange');
const isBlue = equals('blue');

const getStar = ({ star }) => star;
const getSquare = ({ square }) => square;
const getTriangle = ({ triangle }) => triangle;
const getCircle = ({ circle }) => circle;

const isNotStarRed = compose(isNotRed, getStar);
const isNotStarWhite = compose(isNotWhite, getStar);
const isStarRed = compose(isRed, getStar);
const isStarGreen = compose(isGreen, getStar);

const isSquareGreen = compose(isGreen, getSquare);
const isSquareOrange = compose(isOrange, getSquare);

const isTriangleWhite = compose(isWhite, getTriangle);
const isTriangleGreen = compose(isGreen, getTriangle);

const isCircleWhite = compose(isWhite, getCircle);
const isCircleBlue = compose(isBlue, getCircle);
const isCircleGreen = compose(isGreen, getCircle);

const isAllColor = (color) => {
    allPass([

    ])
}



// const countGreen =

// 1. Красная звезда, зеленый квадрат, все остальные белые.
export const validateFieldN1 = (
    allPass([
        isStarRed,
        isSquareGreen,
        isTriangleWhite,
        isCircleWhite
    ])
);


// 2. Как минимум две фигуры зеленые.
export const validateFieldN2 = () => false;

// 3. Количество красных фигур равно кол-ву синих.
export const validateFieldN3 = () => false;

// 4. Синий круг, красная звезда, оранжевый квадрат треугольник любого цвета
export const validateFieldN4 = (
    allPass([
        isStarRed,
        isSquareOrange,
        isCircleBlue
    ])
);

// 5. Три фигуры одного любого цвета кроме белого (четыре фигуры одного цвета – это тоже true).
export const validateFieldN5 = () => false;

// 6. Ровно две зеленые фигуры (одна из зелёных – это треугольник), плюс одна красная. Четвёртая оставшаяся любого доступного цвета, но не нарушающая первые два условия
export const validateFieldN6 = () => false;

// 7. Все фигуры оранжевые.
export const validateFieldN7 = () => false;

// 8. Не красная и не белая звезда, остальные – любого цвета.
export const validateFieldN8 = (
    allPass([
        isNotStarRed,
        isNotStarWhite
    ])
);

// 9. Все фигуры зеленые.
export const validateFieldN9 = (
    allPass([
        isStarGreen,
        isSquareGreen,
        isTriangleGreen,
        isCircleGreen
    ])
);

// 10. Треугольник и квадрат одного цвета (не белого), остальные – любого цвета
export const validateFieldN10 = () => false;
