import { Pipe, PipeTransform } from '@angular/core';
/*
 * Concatena propriedades de um array de objetos em uma string
 * Caso nenhum nome de propriedade seja passado, o name é tomado como padrão.
 * Uso:
 *   value | concatenate
 * Ou:
 *   value | concatenate: 'position'
 * Exemplo:
 *   {{ [{id: '123', position: 'Position 1'}, {id: '456', position: 'Position 2'}] | concatenate: 'position' }}
 *   Será formatado para: 'Position 1, Position 2'
 */
@Pipe({ name: 'concatenate' })
export class ConcatenateArrayValuesPipe implements PipeTransform {
  transform(array: Array<any>, property: string = 'name'): string {
    if (array.length === 0) return '';
    const values = array.map(item => {
      return item[property];
    });
    return values.join(', ');
  }
}