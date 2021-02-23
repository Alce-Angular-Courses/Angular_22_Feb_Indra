import {of, interval, pipe} from 'rxjs'
import { take, map, filter } from 'rxjs/operators/index.js'

// const obs$ = of(1,2,null,3,4,5)

const obs$ = interval(500).pipe(
    take(8)
).pipe(
    map( item => item*item)
).pipe(
    filter( item => (item%2) )
)



const subscriptor = obs$.subscribe(
    data => { console.log('Ha llegado', data)},
    error => { console.error('Error', error)},
    () => {console.log('Fin')}
)

// subscriptor.unsubscribe()

