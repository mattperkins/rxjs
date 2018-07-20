import { Observable } from 'rxjs'

var observable = Observable.create((
    observer: any) => {
        observer.next('Hello, World!')   
        observer.next('Hello, Universe!')   
        observer.complete()
        observer.next('This wont render because the Observable has completed/finalised and no longer emits events')
    }
)

observable.subscribe(
    (x:any) => logItem(x),
    (error: any) => logItem('Error ' + error),
    () => logItem('Completed!')
)

function logItem(val:any){
    var node = document.createElement('li')
    var textNode = document.createTextNode(val)
    node.appendChild(textNode)
    document.getElementById("list").appendChild(node)
}


