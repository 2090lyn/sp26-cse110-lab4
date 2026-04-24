1. The numbers are being concatenated, not added as num1 and num2's data types are strings, so the result isn't the correct sum of the two numbers.

2. I would fix it by converting the parameters num1 and num2 from strings to numbers using the built in Number() function in Javascript.