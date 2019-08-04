/*封装获取当前节点的兄弟节点API----start*/
function getSiblings(node) {
    var allChildren = node.parentNode.children;
    var array = { length: 0 };
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== node) {
            array[array.length] = allChildren[i];
            array.length += 1;
        }
    }
    return array;
}
/*封装获取当前节点的兄弟节点API----end*/
//调用getSiblings
//console.log(getSiblings(item3));

/*封装添加classList的API----start*/
function addClasses(node, classes) {
    for (let key in classes) {
        var value = classes[key];
        var methodName = value ? 'add' : 'remove';
        node.classList[methodName](key);
        //优化下面的代码
        /*if (value) {
            node.classList.add(key);
        } else {
            node.classList.remove(key);
        }*/
    }
}
/*封装添加classList的API----end*/
var classes = { 'a': true, 'b': false, 'c': false }
//调用addClasses
//addClasses(item2,classes);

//命名空间
window.ycdom = {}/*yui就是这样写一个命名空间，然后命名空间调*/
ycdom.getSiblings = getSiblings
ycdom.addClasses = addClasses
//命名空间调用
//console.log(ycdom.getSiblings(item3));
ycdom.addClasses(item3, classes);

//给原型链prototype添加属性,改原型有风险
Node.prototype.getSiblings = function () {
    //this，谁调用它就是谁
    var allChildren = this.parentNode.children;
    var array = { length: 0 };
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== this) {
            array[array.length] = allChildren[i];
            array.length += 1;
        }
    }
    return array;
}
//调用API
//console.log(item3.getSiblings.call(item3));call的第一个参数就是this
//console.log(item3.getSiblings());

//自定义node
window.Node2 = function (nodeOrSelect) {
    //先做一个类型判断
    let node;
    if(typeof nodeOrSelect === 'string'){
        node = document.querySelector(nodeOrSelect);
    }else{
        node = nodeOrSelect;
    }
    return {
        getSiblings: function () {
            var allChildren = node.parentNode.children;
            var array = { length: 0 };
            for (let i = 0; i < allChildren.length; i++) {
                if (allChildren[i] !== node) {
                    array[array.length] = allChildren[i];
                    array.length += 1;
                }
            }
            return array;
        },
        addClasses: function () { }
    }
}
//var node2 = Node2(item3)传节点
//传选择器
var node2 = Node2('#item3');
console.log(node2.getSiblings());
