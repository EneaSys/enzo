import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'eopooName'})
export class EopooNamePipe implements PipeTransform {

    transform(eopoo: any): string {
        switch (eopoo.eopooType.eopooCategory) {
            case 'GENERIC':
                return eopoo.genericEopoo.name;
            case 'PERSON':
                return eopoo.person.firstname + " " + eopoo.person.lastname;
            default:
                return "INVALID";
        }
    }
    
}