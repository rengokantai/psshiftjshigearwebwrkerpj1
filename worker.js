this.addEventListener('message',(e)=>{
	console.log(e.data);
})

let i=0;

setInterval(function(){
	this.postMessage('count '+ i++);
}.bind(this), 100);