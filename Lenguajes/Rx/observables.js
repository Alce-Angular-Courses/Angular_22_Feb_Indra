import {Observable} from 'rxjs'

const ob$ = new Observable(
    observer => {
        observer.next(1)
        observer.next(2)
        // observer.error('Alerta')
        observer.next(3)
        observer.next(4)
        observer.complete()
    }
)

const subscriptor = ob$.subscribe(
    data => { console.log('Ha llegado', data)},
    error => { console.error('Error', error)},
    () => {console.log('Fin')}
)

subscriptor.unsubscribe()