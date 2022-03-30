1. pop() Removes the last element of an array, and returns that element. This method changes the length of the array
* The pop() method is generic, which means it can be called and applied to any object that resembles an array. This means that you don't have to technically be working with an array. You can use pop() to trick methods when dealing with objects resembling arrays into thinking it's working with an array.
2. push() Adds new elements to the end of an array, and returns the new length
* push() seems to be the counterpart of pop(). Instead of removing the last element like pop(), push() adds one or more elements to the end of the array. This method appends values to an array, relying on a length property to determine where to start inserting the given values.
3. shift() Removes the first element of an array, and returns that element. This method also changes the length of the array.
* shift() behaves similarly to pop(), just removing the first element of an array instead of the last.
4. unshift() Adds new elements to the beginning of an array, and returns the new length
* unshift() behaves similarly to push(), just adding one or more elements to the beginning of an array instead of at the end.
