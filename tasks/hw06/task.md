0. Create at the hosting tigris/your-name/hw06 dir
   and put there the homework results

0.0 Training JS. Go over the exercises. Do what trains you.
   Which level are you now?

   js-level01.txt - variables, arithmetics
   js-level02.txt - immutability of primitive variables
   js-level03.txt - functions
   js-level04.txt - functions
   level01-o.txt - FOR loop
   level02-o.txt - FOR loop and arrays
   level03-o.txt - ...
   level04-o.txt - ...

1. Copy by HTML and CSS some part(only some part,not the whole) of the table
             of the olympic days from the picture of the table:
             Olympics-2016-tab-practice.jpeg

             For the symbols you may use the pictures from
             ./img/olympic/ directory.

             Pay attention that *.svg files can be used like
             regular images at <img> tag.

             There is no need to copy the whole table, just
             a part - to ensure that you know how to do this.

2. FOR loop.

   a) Make the program to write 15 times
      `Don't touch it`

   b) Start from 3, go until 19.
      Show all the odd numbers,
      including 3 and 19.

   c) Go from 25 until -16.
      Starting with 25 and for each fifth
      number show it's square root
      (use Math.sqrt()) if it is possible,
      and show it's absolute value
      (use Math.abs())

3. Two-Number Calculator.
   Put this program into tigris/your-name/two-num-calc directory.
   The program gets by prompt() two numbers and a sign
   (three prompts in total),
   and shows the result of the appropriate calculation.
   The sign should be one of: +, -, *, /,
   % (should show the whole part and the remainder), ^ (power).
   Create functions add(), subtract(), multiply(), divide(),
   divideIntegers(), power().
   Use switch. In each case call the appropriate function.

4. Write a function that gets a year and a month name,
   use switch(month) to return the number
   of days in the given month of this year.

   Remember that you know how to determine the number
   of days in February.

   Hint is below all the missions.

5. Add to your "like Wiki" page:
   a) Some table that uses colgroup tag and border-spacing property
      (see the example at colgroup-border-spacing.html/css)
   b) Some pictures that use shape-outside and object-fit properties
      (see the example at shape-outside.html/css)

6. FOR loop accumulator
   a) Write a function that gets a number and uses a "for" loop
      to find a sum of all the numbers from 1 till this number (including), for example:

      sumFromOneTillNum(6);
      21

      sumFromOneTillNum(1);
      1

   b) Write a function that gets a number and uses a "for" loop
      to show all the even numbers from 2 till this number (including it, if it is even).
      Show them in one row, for example:

      showEven(9);
      8 6 4 2

   c) Write a function that gets a string and uses a "for" loop
      to show each letter from the end to the beginning.
      If you show them in one row - it means you reverted the word!

      For example:

      revertTheWord('cat');
      t a c

7. Pay attention. New string function: str.repeat(n).
   This function repeats the string n times.
   Write a function that gets a number, uses '*'.repeat()
   and creates right-angled triangle
   of stars with the given number of rows, for example:

   starTriangle(5);

   *
   **
   ***
   ****
   *****

8. Arrays.
   a) var animals = [`cAt`,`DoG`,`giRaFFe`,`LION`,`tiGer`,`monkey`]

      Go over the words in the array - exchange each word
      by the same word, but in the lowercase.

      Show the array after the loop.

      Can you change one word to lowercase and the next to uppercase and so on?

      Example of the output:
      console.log(`after the change "animals":`,animals);
      [`cat`,`DOG`,`giraffe`,`LION`,`tiger`,`MONKEY`]

   b) Go over the previous array. For each word show at the console
      the first and the last letter. Example (not neccessary to change the case):

                ct
                dg
                ge
                ln
                tr
                my

   c) Go over the previous array. Show the animals at the console
      numbered by their order. Example:

               1. cat
               2. dog
               3. giraffe
               4. lion
               5. tiger
               6. monkey

   d) Do the same, but start from the end. Example:

               1. monkey
               2. tiger
               3. lion
               4. giraffe
               5. dog
               6. cat

   e) var adjectives = [`black`,`curious`,`spotted`,`scary`,`striped`,`happy`]

      Go over the animal array and show each animal together with
      an adjective. Example:

             black cat
             curiuos dog
             spotted giraffe
             scary lion
             striped tiger
             happy monkey

   f) Do the same, but combine the words in the reverse order. Example:

              happy cat
              striped dog
              scary giraffe
              spotted lion
              curious tiger
              black monkey

   g) Go over the array of the words and combine them into one string.
      (Hint: declare the string before the loop and make it empty string)

      var words = [`I`,`am`,`never`,`too`,`late`,`,`,`the`,`others`,`are`,`just`,`too`,`early`]

   h) Go over the array and find average of all the numbers:
      (Hint: you should find their sum, and when the loop stops,
             divide the sum by the amount of numbers.
             So declare the variable of the sum before the loop
             and assign it zero)

      var num = [44, 22, 33, 11, -66, -88, 22, 33]

Hint for 4: There are months that have the same number
            of days, like April, June, September, November.

            Stack their cases together without "break".
