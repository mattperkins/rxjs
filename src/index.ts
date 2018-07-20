import { Observable } from 'rxjs'

var observable = Observable.create((
    observer: any) => {
        observer.next('Hello, World!')   
        observer.next('Hello, Universe!')   
    }
)

observable.subscribe(
    (x:any) => logItem(x)
)

function logItem(val:any){
    var node = document.createElement('li')
    var textNode = document.createTextNode(val)
    node.appendChild(textNode)
    document.getElementById("list").appendChild(node)
}


