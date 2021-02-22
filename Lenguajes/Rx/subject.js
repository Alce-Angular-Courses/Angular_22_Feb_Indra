import {Subject, BehaviorSubject} from 'rxjs'

const sub$ = new Subject()
sub$.subscribe(
    data => { console.log('Al SB1 ha llegado', data)}
)
sub$.next(1)
sub$.next(2)
sub$.subscribe(
    data => { console.log('Al SB2 ha llegado', data)}
)
sub$.next(3)
sub$.next(4)

const beh$ = new BehaviorSubject(100)

beh$.subscribe(
    data => { console.log('Al Beh1 ha llegado', data)}
)

beh$.next(1)
beh$.next(2)
beh$.subscribe(
    data => { console.log('Al Beh2 ha llegado', data)}
)
beh$.next(3)
beh$.next(4)