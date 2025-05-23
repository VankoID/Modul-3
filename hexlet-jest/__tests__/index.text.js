import tutu from '../src/index.js'

test('test1', () => {
  expect(tutu('hello')).toEqual('olleh')
  expect(tutu('')).toEqual('')
})

