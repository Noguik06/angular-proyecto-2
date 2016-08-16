/**
 * Created by juannoguera on 23/07/16.
 */
import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {User} from '../users/user';

@Pipe({
    name: 'customerEmailFilter'
})
@Injectable()
export class CustomerEmailFilter implements PipeTransform {
    transform(value, teto): any {
        if(value != null ){
            return value.filter((item)=>item.nombre.toLocaleLowerCase().startsWith(teto.toLowerCase())
            || item.email.toLocaleLowerCase().startsWith(teto.toLowerCase())
            || item.cedula.toLocaleLowerCase().startsWith(teto.toLowerCase()))
        }
        return value;
    }
}