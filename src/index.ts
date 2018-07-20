import { Observable } from 'rxjs'

var observable = Observable.create((
    observer: any) => {
        observer.next('Hello, World!')   
        observer.next('Hello, Universe!')   
    }
)

observable.subscribe(
    (x:any) => console.log(x)
)

