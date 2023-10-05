0. Create at the hosting tigris/your-name/hw07 dir
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
   level01-05-o.txt - more basic exercises

1. Star Square.

    a) In HTML create DIV with class="stars1"
    b) In JS create variable stars1Div which will point to the object
       of this DIV

    c) Without using CSS, in JS only - apply all the needed style properties
       to this div: width, background-color, font-size, color, etc.

    d)
    Get input number (small integer) - by prompt(), use FOR loop
      and inside stars1Div draw a square with the side of this number of stars,
      for example (the number is 4):
      ****
      ****
      ****
      ****

      The hint for this exercise is below all the exercises

2. Star Square CHALLENGE

    a) In HTML create another DIV with id="stars2"

    b) In JS create a variable stars2Div that will point to the object
       of this DIV

    c) Partly in CSS partly in JS apply all the needed styling properties
       to this DIV

    d) Get input number (small integer) - by prompt(), without using FOR loop
      draw a square with the side of this number of stars,
      for example (the number is 4):
      ****
      ****
      ****
      ****

3. Omit Vowels
    Write a function that gets a word, goes
      over it's letters and creates new string,
      where vowels are omitted (without a,e,i,o,u).
      For example, it gets "strange" and returns "strng",
      gets "astonishment" and returns "stnshmnt".

      The hint for this exercise is below all the exercises

4. Write a function that prepares the given word for "Hangman" game:
   it gets the word and returns string that consists of the first
   and the last characters
   of the word in upper case and the right number of hyphens between them.
   Put this program into copy-bara/your-name/hangman directory.
   Example outputs:

   console.log(prepareWordForHangman('strawberry'));

   S--------Y

   console.log(prepareWordForHangman('caramel'));

   C-----L

   console.log(prepareWordForHangman('I'));

   ERROR

   console.log(prepareWordForHangman(''));

   ERROR

   console.log(prepareWordForHangman());

   ERROR

   The hint for this exercise is below the next exercise

5. String and array functions - trim(),
                                trimStart(), trimEnd(), pop(),
                                push(), shift(), unshift().

   a) var animals = ['cAt','DoG','giRaFFe','LION','tiGer','monkey']

      Go over the array. For each word show at the console
      first two letters in lower case. Example:

                ca
                do
                gi
                li
                ti
                mo

   (The hint for the exercise is below all the exercises)

   b) const colors = ['blue','yellow','orange','green']
      const drinks = ['tea','coffee','milk','water','juice']

      Use pop(), push(), shift(), unshift() and some variables to exchange
      the first elements of the above arrays between them, and
      to exchange their last elements too.

   c) const colors = ['   red','    white   ','   yellow ','green   ','  lime  ',' purple ','   blue','teal   ',' aquamarine   ','  turquoise ']

      I With FOR loop go over the array and show all it's members without the spaces
      II With FOR loop go over the array and show all the members with even indexes
         without the spaces at the left, and all the members with odd indexes without
         the spaces at the right

Hint 1 for 4: Use str.repeat(n)

              The next hint for this exercise is somewhere below ...

              .....
              .....
              .....
              .....
              .....
              .....
              .....
              .....
              .....
              .....
              .....
              .....
              .....
              .....
              .....
              .....
              .....
              .....
              .....


Hint for 1 d) : use str.repeat()

Hint for 2 b) : in CSS you use '#stars2' selector, so it would do
                in JS for document.querySelector() method

Hint for 2 d) : It is a CHALLENGE!!!

Hint for 3: Create empty output string before the loop.
               Inside the loop body use IF that checks that
               the current letter not equal to `a`, `e`,`i`,`o`
               or `u` - in the case that it is not a vowel,
               concatenate it with the output string.

Hint 2 for 4: Concatenate the first letter with `- ` repeated
               str.length-2 times and with the last letter

Hint for 5 a): animal[0].toLowerCase() + animal[1].toLowerCase()