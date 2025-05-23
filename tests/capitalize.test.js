import {strict as assert} from 'node:assert';
import capitalize from '../src/capitalize.js';

assert(capitalize('hello') === 'Hello');

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!')
}

assert(capitalize('') === '');

if (capitalize('') !== '') {
  throw new Error('Задана пустая строка')
}

assert(capitalize('Wello') === 'Wello');


if ((capitalize('Wello') !== 'Wello')) {
  throw new Error('Слово уже с заглавной буквы')
}

if (capitalize('!test') !== '!test') {
  throw new Error('Первый символ не является буквой');
}

if (capitalize('1test') !== '1test') {
  throw new Error('Первый символ является цифрой');
}


assert.strictEqual(capitalize('hallo'), 'Hallo')

console.log('Все тесты пройдены!');