
        uni._rawComponents = {"info-component":"<template>\r\n  <div class=\"info-section info-component jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">Components</h1>\r\n      <p class=\"lead\">Uni allows for splitting your views into components</p>\r\n      <p>Component files are automatically registered in the directory <b>src/components</b>.<br/>The file name must be the desired component name. (In this case it's navbar.uni)</p>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;template&gt;\r\n  &lt;div class=&quot;navbar&quot;&gt;\r\n    {\r\n      // blah\r\n    }\r\n    ...\r\n  &lt;/div&gt;\r\n&lt;/template&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n      <p>To use a component <b>this.imports must be declared with its name inside the parent element.</b></p>\r\n      <p>You can then declare a regular HTML element with its tagname:</p>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;body&gt;\r\n  {\r\n    this.imports = [&quot;navbar&quot;];\r\n  }\r\n  &lt;navbar&gt;&lt;/navbar&gt;\r\n&lt;/body&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n      <p>Components can be added dynamically with <b>this.addComponent(name)</b>:</p>\r\n      <h2>addComponent(name, Optional[props])</h2>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;body&gt;\r\n  {\r\n    this.imports = [&quot;navbar&quot;];\r\n    this.addComponent(\"navbar\");\r\n  }\r\n&lt;/body&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n      <p><b>addComponent</b> appends a new component as a child into the script context.</p>\r\n    </div>\r\n  </div>\r\n</template>","info-container":"<template>\r\n  <div class=\"info-container\">\r\n    {\r\n      this.imports = [\"info-setup\", \r\n                      \"info-scripting\", \r\n                      \"info-init\", \r\n                      \"info-component\",\r\n                      \"info-props\",\r\n                      \"info-state\"]\r\n    }\r\n    <info-setup></info-setup>\r\n    <info-scripting></info-scripting>\r\n    <info-init></info-init>\r\n    <info-component></info-component>\r\n    <info-props></info-props>\r\n    <info-state></info-state>\r\n  </div>\r\n</template>","info-init":"<template>\r\n  <div class=\"info-section info-init jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">Initialization Events</h1>\r\n      <p class=\"lead\">Uni runs scripts in the order of an execution tree</p>\r\n      <p>Every DOM element runs itself first then recurses on its children.</p>\r\n      <p>The following are events that can be assigned upon initialization:</p>\r\n      <h2>onFullLoad</h2>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;div&gt;\r\n  {\r\n    this.onFullLoad = () => {\r\n      // called after every descendant has loaded\r\n    }\r\n  }\r\n  ...\r\n&lt;/div&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n      <p>Assigning a callback to onFullLoad will call it once every descendent's script is ran.</p>\r\n      <h2>onChildLoad</h2>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;div&gt;\r\n  {\r\n    this.onChildLoad = (child) => {\r\n      console.log(child + \" has loaded\");\r\n      // called when a descendant loads\r\n    }\r\n  }\r\n  ...\r\n&lt;/div&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n      <p>Assigning a callback to onChildLoad will call it everytime a child's script is ran passing the child itself.</p>\r\n    </div>\r\n</template>","info-props":"<template>\r\n  <div class=\"info-section info-props jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">Props</h1>\r\n      <p class=\"lead\">Data known as <b>props</b> can be passed to reusable components upon initialization.</p>\r\n      <p>For components initialized statically, props can be given through regular html attribute:</p>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;body&gt;\r\n  {\r\n    this.imports = [&quot;navbar&quot;];\r\n  }\r\n  &lt;navbar title=\"foo\"&gt;&lt;/navbar&gt;\r\n&lt;/body&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n      <p>For components initialized dynamically, props can be given as an object through <b>addComponent</b>'s second optional parameter.</p>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;body&gt;\r\n  {\r\n    this.imports = [&quot;navbar&quot;];\r\n    this.addComponent(\"navbar\", {title: \"foo\"});\r\n  }\r\n&lt;/body&gt;`);\r\n}\r\n        </code>\r\n      </pre>    \r\n      <p>And finally, accessing props from the component end is done with <b>this.props</b>:</p>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;template&gt;\r\n  &lt;div class=&quot;navbar&quot;&gt;\r\n    {\r\n      console.log(&quot;My title:&quot;, this.props.title);\r\n    }\r\n  &lt;/div&gt;\r\n&lt;/template&gt;`);\r\n}\r\n        </code>\r\n      </pre> \r\n    </div>\r\n  </div>\r\n</template>","info-scripting":"<template>\r\n  <div class=\"info-section info-scripting jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">In-line Scripting</h1>\r\n      <p class=\"lead\">Inline-scripts run under its DOM element as context:</p>\r\n      <p>Note: Uni assigns the method <b>find</b> as an alias for <b>querySelector</b></p>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;div&gt;\r\n  {\r\n    this.find(&quot;#foo&quot;).innerText += &quot;Polo!&quot;;\r\n  }\r\n  &lt;span id=&quot;foo&quot;&gt;Marco&lt;/span&gt;\r\n&lt;/div&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n      <p>You also can traverse the DOM to read / modify other elements:</p>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;div id=&quot;parent&quot;&gt;\r\n  {\r\n    console.log(this.children[0].innerText);\r\n    // prints 'Foo'\r\n  }\r\n  &lt;div id=&quot;child&quot;&gt;\r\n    Foo\r\n  &lt;/div&gt;\r\n&lt;/div&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n    </div>\r\n  </div>\r\n</template>","info-setup":"<template>\r\n    <div class=\"info-section info-setup jumbotron jumbotron-fluid\">\r\n        <div class=\"container\">\r\n            <h1 class=\"display-4\">Setup</h1>\r\n            <p class=\"lead\">Uni is available to install as an npm package:</p>\r\n            <pre>\r\n          <code class=\"language-bash\">npm install -g uni-cmd</code>\r\n        </pre>\r\n            <p>A new project can then be created with the <b>init</b> command:</p>\r\n            <pre>\r\n          <code class=\"language-bash\">uni init Project_Name</code>\r\n        </pre>\r\n            <p>Inside a project directory, a dev environment with hot reload can be started:</p>\r\n            <pre>\r\n          <code class=\"language-bash\">npm run dev</code>\r\n        </pre>\r\n        </div>\r\n    </div>\r\n</template>","info-state":"<template>\r\n  <div class=\"info-section info-state jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">State Management</h1>\r\n      <p class=\"lead\">Uni respects the DOM tree's hierarchy when processing state management</p>\r\n      <p>Declaring an initial state must be done on <b>this.state:</b></p>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;div&gt;\r\n  {\r\n    this.state = {foo: 2}\r\n  }\r\n&lt;/div&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n      <h2>bindState(callback)</h2>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;div&gt;\r\n  {\r\n    this.state = {foo: 2}\r\n    this.bindState(newState => {\r\n      console.log(\"foo is \" + newState.foo);\r\n    });\r\n  }\r\n  ...\r\n&lt;/div&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n      <p>The callback passed to bindState will be called once initially then upon any state changes from setState thereafter.</p>\r\n      <h2>setState(object)</h2>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;div&gt;\r\n  {\r\n    this.state = {foo: 2}\r\n    this.bindState(newState => {\r\n      console.log(\"foo is \" + newState.foo);\r\n    });\r\n    this.setState({foo: 3});\r\n  }\r\n  ...\r\n&lt;/div&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n      <p>The callback passed to bindState will be called once initially then upon any state changes from setState.</p>\r\n      <h3>State methods within descendants</h3>\r\n      <p>Descendants that have ancestor(s) with a defined initial state(s) can use these methods:</p>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;div&gt;\r\n  {\r\n    this.state = {foo: 2}\r\n    this.bindState(newState => {\r\n      console.log(\"foo is \" + newState.foo);\r\n    });\r\n  }\r\n  &lt;div id=\"child\"&gt;\r\n    {\r\n      this.setState({foo: 3})\r\n    }\r\n  &lt;/div&gt;\r\n&lt;/div&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n      <p>Descendants can setState to multiple ancestors with differing state attributes:</p>\r\n      <pre>\r\n        <code class=\"javascript html\">\r\n{\r\n$(this).text(`&lt;div id=\"ancestor\"&gt;\r\n  {\r\n    this.state = {foo: 2}\r\n    this.bindState(newState => {\r\n      console.log(\"foo is \" + newState.foo);\r\n    });\r\n  }\r\n  &lt;div id=\"child\"&gt;\r\n    {\r\n      this.state = {bar: 3}\r\n      this.bindState(newState => {\r\n        console.log(\"bar is \" + newState.bar);\r\n      }); \r\n    }\r\n    &lt;div id=\"descendant\"&gt;\r\n      {\r\n        this.setState({foo: 3, bar: 4});\r\n      }\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n&lt;/div&gt;`);\r\n}\r\n        </code>\r\n      </pre>\r\n    </div>\r\n</template>","navbar":"<template>\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    {\r\n      console.log(this.className + \" has loaded.\")\r\n    }\r\n    <a class=\"navbar-brand\" href=\"#\">Uni</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n      <div class=\"navbar-nav\">\r\n        <a class=\"nav-item nav-link active\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</template>","sidebar":"<template>\r\n  <div>\r\n    <ul class=\"list-group sidebar\">\r\n      {\r\n        this.state = {\r\n          select: 0\r\n        };\r\n\r\n        function onChildClick(event){\r\n          var child = event.srcElement;\r\n          this.setState({\r\n            select: child.getAttribute(\"select\")\r\n          });\r\n          $(\".\"+child.getAttribute(\"info\"))[0].scrollIntoView({\r\n            behavior: \"smooth\"\r\n          });\r\n        }\r\n\r\n        this.onFullLoad = () => {\r\n          for (var i = 0; i < this.children.length; i++){\r\n            var child = this.children[i];\r\n            child.setAttribute(\"select\", i);\r\n            child.onclick = onChildClick.bind(this)\r\n          };\r\n        };\r\n\r\n        this.bindState(newState => {\r\n          var old = this.state.select;\r\n          this.children[old].classList.remove(\"active\");\r\n          this.children[newState.select].classList.add(\"active\");\r\n        });\r\n      }\r\n      <li class=\"list-group-item active\" info=\"info-setup\">Setup</li>\r\n      <li class=\"list-group-item\" info=\"info-scripting\">In-line Scripting</li>\r\n      <li class=\"list-group-item\" info=\"info-init\">Initializaiton Events</li>\r\n      <li class=\"list-group-item\" info=\"info-component\">Components</li>\r\n      <li class=\"list-group-item\" info=\"info-props\">Props</li>\r\n      <li class=\"list-group-item\" info=\"info-state\">State Management</li>\r\n    </ul>\r\n  </div>\r\n</template>"};

        function runClosure(closure, context){
            var raw = `
            (function preClosure() {
    this.addComponent = (name, props = {}) => uni.addComponent(name, this, props);
    this._stateChangeListens = [];
    this.find = this.querySelector;

    this.bindState = function (cb) {
        // attach this callback to the nearest ancestor with a declared state
        if (this.state) {
            this._stateChangeListens.push(cb);
            cb(this.state);
        } else if (this != document.body) {
            this.parentElement.bindState(cb);
        }
    };

    this.setState = function (newState) {
        var updated = false;
        // call on the nearest ancestor with a declared state
        if (!this.state) {
            if (this != document.body && this.parentElement) {
                this.parentElement.setState(newState);
            }
            return;
        }

        for (let key in newState) {
            if (!newState.hasOwnProperty(key)) {
                return;
            }
            let val = newState[key];
            if (this.state[key] !== undefined) { // state has a matching attribute with newState

                if (!updated) {
                    this._stateChangeListens.forEach(f => {
                        f(newState);
                    });
                    updated = true;
                }
                this.state[key] = val;

                delete newState[key]; // delete the matching attribute from newState
            }
        }

        //if newState still has attributes then it could mean that they are meant for higher ancestors as well
        //we make sure by recursing on the ancestors until we used up all attributes or reached the root
        if (Object.keys(newState).length && this != document.body) {
            this.parentElement.setState(newState);
        }
    };

}).call(this);
            `
            +closure+` 
            return {
                onFullLoad: typeof this.onFullLoad === 'function' ? this.onFullLoad : null,
                onChildLoad: typeof this.onChildLoad === 'function' ? this.onChildLoad : null,
                imports: typeof this.imports === 'object' ? this.imports : null
            }`
            var _cl = Function(raw);
            _cl.call(context);
            return _cl
        }
    const execTree = {"context":"document.body","closure":" this.imports = [\"navbar\", \"sidebar\", \"info-container\"]; ","children":[{"context":"document.body.childNodes[1]","closure":"","children":[]},{"context":"document.body.childNodes[3]","closure":"","children":[]},{"context":"document.body.childNodes[5]","closure":"","children":[]}]};
    function evalExecTree(tree){
        var children = tree.children;
        var context = Function('return '+tree.context)();
        runClosure(tree.closure, context);
        for (var i = 0; i < children.length; i++){
            var child = evalExecTree(children[i]);
            if (context.onChildload){
                context.onChildLoad(child);
            }
        }
        if (context.onFullLoad){
            context.onFullLoad();
        }
        return context
    }
    evalExecTree(execTree);
    (async function initStaticComponents(target = null) {
    
    // gets the props of a static component via html attributes
    function getProps(target) {
        var props = {};
        var nameList = target.getAttributeNames();
        for (let i = 0; i < nameList.length; i++) {
            let name = nameList[i];
            props[name] = target.getAttribute(name);
        }
        return props;
    }

    // find the index of a given child
    function childIndex(parent, child) {
        for (var i = 0; i < parent.children.length; i++) {
            if (parent.children[i] == child) {
                return i;
            }
        }
        return -1;
    };

    if (!target)
        target = document.body
    var tag = target.tagName;

    if (uni._ignore_interpret.indexOf(tag.toUpperCase()) != -1) {
        return;
    }

    var parent = target.parentElement;
    var componentHTML = uni._rawComponents[tag.toLowerCase()];
    if (parent.imports &&
        componentHTML &&
        parent.imports.map(c => c.toUpperCase()).indexOf(tag) != -1) {

        let props = getProps(target);
        var lenOld = childIndex(parent, target);
        target.outerHTML = componentHTML;
        parent.children[lenOld].outerHTML = parent.children[lenOld].innerHTML;
        for (var i = lenOld; i < parent.children.length; i++) {
            var child = parent.children[i];
            if (!child._didInit) {
                await uni._evalElement(parent.children[i], props);
            }
            else {
                break;
            }
        }

    }

    for (var j = 0; j < target.children.length; j++) {
        await initStaticComponents(target.children[j]);
    }

})();
    