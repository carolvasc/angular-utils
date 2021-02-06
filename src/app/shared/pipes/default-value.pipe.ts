import { Pipe } from '@angular/core';
/*
 * Retorna um valor default mesmo que a propriedade não seja nula
 * Caso nenhum nome de propriedade seja passado, o name é tomado como padrão.
 * Uso:
 *   <app [name]="folder.icon | default:'Folder'"></app>
 */
@Pipe({ name: 'default', pure: true })
export class DefaultPipe {
  transform(value: any, defaultValue: any): any {
    return value || defaultValue;
  }
}
