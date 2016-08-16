/**
 * Created by juannoguera on 23/07/16.
 */
import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector:'search-box',
    template: `<div>
                <input #input type="text" (input)="update.emit(input.value)">
               </div>`
         })

export class SearchBox{

}