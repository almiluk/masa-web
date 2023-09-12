0. Create at the hosting tigris/your-name/hw03 dir
   and put there the homework results

1. Create html page.
    a) Create at least 3 paragraphs.
    b) Change background and font color of some
       paragraphs or their parts -
       use hexadecimal encoding, rgb(), rgba()
    c) Create div with div and text inside. Put 2 pictures
      into the inner div. Copy all the set. Make somwhere
      in the first copy half-transparent background.
      Make the second copy be half-transparent as a whole.
    d) Bring some "Google Font" and change
       font-family, font-weight and font-style
       of the part of the texts.
    e) Add at the body below the tag <script> (without
      the attribute "src") and perform there directly
      the next mission:
        /* Use 3 variables: firstName (for the name),
           lastName (for the family name),
           nameFirst (may get values "yes", "no").
           Set their values by prompt or by yourself.
           If nameFirst equals "yes" show the name and the family name
           at the console, if equals "no",
           show the family name and the name at the console */


2. Number systems.
   There are examples of using the algorithms at
   from-binary-to-decimal.jpeg,
   from-decimal-to-binary.jpeg

   a) Convert 1011001000 from binary to decimal
   b) Convert 302 from decimal to binary
   c) Use the algorithm of division by 16 and finding remainders,
      convert from decimal into hexadecimal:
      7562
      18224
   d) Convert from hexadecimal to decimal:
      B9
      2AD64

3. Create html page like html_practice_exercise_6.PNG.
   Use property font-size.

4. Transparency. Create five divs of the same
   color but with the different transparency - inside each other. Possible
   output you see at html_practice_exercise_7_transparency.JPG. Colors - your choice

5. Planet table. Go over the table tutorial and create the planet table

6. Tomatoes.

   Create 2 variables:
   let countTomatoLovers = 10;
   let countTomatoHaters = 3;

   Show how many tomato lovers and tomato haters we've got
   (you can use console.log() or document.write()).

   Ask a person for some name of a vegetable.

   Check the vegetable, and if it is "tomato",
   add 1 to tomato lovers, like this:
   countTomatoLovers =  countTomatoLovers  + 1;

   If it is not "tomato", add 1 to tomato haters.

   Show how many tomato lovers and tomato haters we've got now.

7. Declare a variable and prompt a user for the first name.

   Get the answer of the user for the second question:
      Do you brush your hair?

   If the answer is "yes","YES","Yes","Ye","Yea", etc.,
   tell him: "<name of the user>, well done!" and show some happy emojee.

   If the answer is "NO","No","no", "naah", etc.,
   tell him: "<name of the user>, your hairdresser is crying" and show some sad emojee.

   If the answer not like "yes" or "no",
   inside the block of "else" prompt for the 3rd question:
   "<name of the user>, do you have hair at all?"

   React to "yes" and "no".

   Anyway after the "if" put in the console: "Regards to your hairdresser!"

8. Ask user to enter 3 different numbers.

   Check that all the inputs are numbers (see the hint after all
   the exercises).

      Check if the second number is not is not equal to the first.
      If it is equal, use function alert() to tell the user that
      it was wrong input. For example,
      alert('The first and the second numbers are equal. \nWrong input!')

      Check if the third number is equal to the first or to the second.
      If it is the case, show alert that says, that it is wrong input,
      as the 3rd number is equal to the 1st or to the 2nd.

      If the input is OK,
      Show at the console the maximal number of the 3.


9. Leap year. You program gets a year. It should use % and
   answer if the given year is a leap year. If a year
   is not divisible by 4 then it is not leap,
   if it is divisible by 4 but not by 100 - it is leap,
   if it is divisible by 400 - it is leap (like 2000 was),
   if it is divisible by 100 but not by 400 - it is not leap
   (like 1900 was).

Hint for 8.

   if (isNaN(num1) || isNaN(num2) ...
