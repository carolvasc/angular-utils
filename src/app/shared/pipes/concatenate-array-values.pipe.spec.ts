import { ConcatenateArrayValuesPipe } from './concatenate-array-values.pipe';

describe('ConcatenateArrayValues', () => {
  [
    [[{ id: '123', position: 'Position 1' }], 'Position 1'],
    [[{ id: '456', position: 'Position 2' }], 'Position 2'],
  ].forEach(([value, expected]) => {
    it(`O pipe deve concatenar determinado atributo de um array de objetos: ${expected}`, () => {
      const pipe = new ConcatenateArrayValuesPipe();
      const result = pipe.transform(value as any, 'position');
      void expect(result).toBe(expected as string);
    });
  });

  it(`O pipe deve retornar string vazia caso não haja uma array para concatenar`, () => {
    const pipe = new ConcatenateArrayValuesPipe();
    const result = pipe.transform([], 'position');
    void expect(result).toBe('');
  });
});
