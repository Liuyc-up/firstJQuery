window.JQuery = function (nodeOrSelector) {
    let nodes = {}
    if (typeof nodeOrSelector === 'string') {
        let temp = document.querySelectorAll(nodeOrSelector)
        for (let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i]
        }
        nodes.length = temp.length;
    } else if (nodeOrSelector instanceof Node) {
        //保持返回数据一致性
        nodes = { '0': nodeOrSelector, 'length': 1 }
    }

    nodes.getSiblings = function () { }
    nodes.addClasses = function (classes) {
        for (let key in classes) {
            var value = classes[key];
            var methodName = value ? 'add' : 'remove';
            for(let i = 0; i < nodes.length; i++){
                nodes[i].classList[methodName](key);
            }
        }
    }
    nodes.text = function(text){
        if(text === undefined){
            var texts = [];
            for(let i = 0; i < nodes.length; i++){
                texts.push(nodes[i].textContent);
            }
            return texts;
        }else{
            for(let i = 0; i < nodes.length; i++){
                nodes[i].textContent = text;
            }
        }
    }
    return nodes;
}

//var node2 = JQuery(item3);
var node2 = JQuery('ul>li');
node2.addClasses({'a':true,'b':false})
node2.text('hello');
var getText = node2.text();
console.log(getText);
//node2[0]访问的是第一个元素li
console.log(node2);
console.log(node2[0]);
node2[0].classList.add('c');