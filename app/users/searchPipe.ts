/**
 * Created by juannoguera on 23/07/16.
 */
import {Pipe} from "@angular/core";

@Pipe({
    name:"Search"
})
export class SearchPipe{
    transform(value){
        // if(value != null ){
        //     return value.filter((item)=>item.nombre.toLocaleLowerCase().startsWith(term))
        // }
        return value;
    }
}