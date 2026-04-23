1. Returns 3 because since i is a var, it's accessible anywhere in the code, so it's still accessible outside the for-loop, and since the prices array has a length of 3, it outputs 3.
2. Returns 150 because it reinitalizes discountedPrice after each index, and since we're on the last index, we start with 300, multiply it by (1 - 0.5), which outputs to 150, and since it's a var variable, we're able to print it outside of the for-loop.
3. Returns 150 because it's a var variable, so it's accessible outside of the for-loop.
4. It will return an array: [50, 100, 150] because discounted is a var variable, so it's accessible throughout the code.
5. This would output an error because since i is initialized by a let variable, it's not accessible outside the for-loop scope.
6. This would output an error because since discountedPrice is initialized by a let variable, it's not accesible outside the for-loop scope.
7. Returns 150 because finalPrice was initialized outside of the for-loop and inside the same scope as the return statement.
8. Returns an array: [50, 100, 150] because discounted was initialized outside of the for-loop and inside the same scope as the return statement.
9. This would output an error because since i is initialized by a let variable, it's not accessible outside the for-loop scope.
10. Returns 3 because length is initialized outside of the for-loop and inside the same scope as the return statement.
11. Returns an array: [50, 100, 150] because it's not reassigning the variable, but mutating it. If it was discounted = [50, 100, 150], it would've caused an error, but they pushed it, so it's okay.

12. Data Type:
    A. student.name;
    B. student['Grad Year'];
    C. student.greeting();
    D. student['Favorite Teacher'].name;
    E. student.courseload[0];

13. Arithmetic
    A. '3' + 2 = '32'
    B. '3' - 2 = 1
    C. 3 + null = 3
    D. '3' + null = '3null'
    E. true + 3 = 4
    F. false + null = 0
    G. '3' + undefined = '3undefined'
    H. '3' - undefined = NaN

14. Comparison
    A. '2' > 1 = true
    B. '2' < '12' = false <!--goes by character-->
    C. 2 == '2' = true 
    D. 2 === '2' = false
    E. true == 2 = false
    F. true === Boolean(2) = true

15. == is more of a loose equality in which it compares values after applying type coercion, and === is more of a strict equality in which it compares both value and type without any type conversion.

16. part2-question16.js

17. The result would be [2, 4, 6].

    i = 0 -> doSomething(1) = 2
    i = 1 -> doSomething(2) = 4
    i = 2 -> doSomething(3) = 6
    Each result is pushed into newArr, so newArr = [2, 4, 6].

    Even though doSomething is passed without a num argument in the initial function call, it's used as a callback and is called inside of modifyArray with each elem of the array as its argument.

18. part2-question18.js

19. It'll output 1, then 4, then 3, and lastly 2.