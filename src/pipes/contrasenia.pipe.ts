import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {    
    transform(value: string, activar:boolean = false): string {
        if( activar ){
            let asteriscos = "";
            for(let i=0; i<value.length; i++){
                asteriscos += "*";
            }
            return asteriscos;
        }else{
            return value;
        }
    }
}