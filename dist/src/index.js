import { Observable } from 'rxjs';
var observable = Observable.create((observer) => {
    observer.next('Hello, World!');
    observer.next('Hello, Universe!');
    observer.complete();
    observer.next('This wont render because the Observable has completed/finalised and no longer emits events');
});
observable.subscribe((x) => logItem(x), (error) => logItem('Error ' + error), () => logItem('Completed!'));
function logItem(val) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("list").appendChild(node);
}
//# sourceMappingURL=index.js.map