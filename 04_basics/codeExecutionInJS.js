/**  JS execution conntext(EC)
 * {} ->global EC --code allocated in 'this'
 * 1.global EC
 * 2.function EC
 * 3.eval EC  (property of global object) */

/*
[] -> js code execute in 2 phase:
 1.memory creation phase  (only space allocated for variables)
 2.execution phase

*/

// code
let val1=10
let val2=5
function addnum(num1,num2){
    let total = num1+num2
    return total
}
let result1=addnum(val1,val2)
let result2=addnum(10,2)

/*How the code works:-
   [1] 'memory phase':
   val1->undefined
   val2->undefined
   addnum->defination
   result1->undefined
   result2->undefined
   [2] 'execution phase':
   val1->10
   val2->5
   addnum -> this is function so,it creates its own execution context 
   so a 'new variable environment' and 'execution thread' is formed 
   now for this execution context it creates its seperate memory phase and execution phase
   And kaam khatam hone ke baad ye delete bhi ho jata hai.

   this means for every ec=xecution phase a seperate memory phase is creatd
   */
