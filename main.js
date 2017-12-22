function ToDoList () {
  var storage = {};
  var index = -1;
  var offset = 0;

  this.rememberTo = function(task) {
    storage[++index] = task;
    console.log(storage);
  }

  this.whatIsNext = function() {
    if (offset > index) return;
    var el = storage[offset];
    delete storage[offset++];
    console.log(el);
    console.log(storage);
  }

  this.urgentlyRememberTo = function(task) {
    // console.log(storage);
    // console.log(index);
    // console.log(offset);
    storage[--offset] = task;
    console.log(storage);
  }

  this.length = function() {
    var counter = 0;
    for (var key in storage) {
      counter++;
    }
    console.log("В списке " + counter + " задач(и).");
  }

  this.toString = function () {
    var s='';
    for(var i in storage) {
      s+=storage[i]+',';
      console.log(s.substring(0, s.length-1))
    }
  }

  this.isEmpty = function() {
    var counter = 0;
    for (var key in storage) {
      counter++;
    }
    if (counter == 0) {
      console.log("empty")
    } else {
      console.log("full");
    }
  }
}

var a = new ToDoList();
a.rememberTo("A");
a.rememberTo("B");
a.rememberTo("C");
a.whatIsNext();
a.urgentlyRememberTo("A");
a.length();
a.toString();
a.isEmpty();
a.whatIsNext();
a.whatIsNext();
a.whatIsNext();
a.isEmpty();