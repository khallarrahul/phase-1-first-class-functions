// code here

function receivesAFunction(callBack){
    callBack();
}

function returnsANamedFunction() {
    function namedFunction() {
      // code
    }
    return namedFunction;
  }
  

function returnsAnAnonymousFunction() {
    return function () {
        //code
    }

}

