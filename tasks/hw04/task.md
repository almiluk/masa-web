0. Create at the hosting tigris/your-name/hw04 dir
   and put there the homework results

1. Attach js file to any html file.

    a) Declare a variable and assign it a value of first name
       (reminder: the name is a string, so it should be within quotes or double quotes)

    b) Declare a variable and assign it a value of last name

    c) Declare a variable of the current year

    d) Declare a variable and assign it a value of birth year

    e) Calculate the age of the person and print out to
       the console: "Hello, <firstName> <lastName>, you are <age> years old."

        For example, if the person's name is "John", last name is "Smith",
        birth year is 1990, there should be output:

        "Hello, John Smith, you are 32 years old."

    f) Check if the full name (firstName + lastName) of the person
       is not equal to 'John Smith', and if not equal, say:
       'You've got an unusual name'

    g) Check if the age of the person is greater or equal to 16,
       tell her: you can learn to drive!
       Otherwise tell her: driving is postponed for a little bit

    h) Show the datatype of the current year variable

    i) Use one console.log() to show a list of 3 of your favourite foods
       while each food is shown on the next line

       The HINT to i) is at the end of the page

DO NOT FORGET TO CONVERT STRING from prompt()
TO NUMBER if needed


2. /* There are 2 variables with the values: name of the person
         and their birth year.
      Use two more variables, to get the current date and
             to calculate the age.
      If the age is not dividible by 10, congratulate
           the person at the console
      (or by document.write(str)), like in the example:
             "Yosi, congratulations, you're 16!"
      If the age is ended by 0 (round number),
      congratulate the person  at the console
      (or by document.write(string)) like this:
      "Yosy, congratulations with your 40th anniversary!".
      If this person is also older than 60, show at the console
      (or by document.write(string)) too: "Оооо, you're like Methuselach!" */

3. Birthdays. Get day, month and year of birth for two persons.
   (No need to make all the prompts,
    you can just set them like this:

    var year1=1999, year2=1998, month1="May", month2="May",
        day1=22, day2=22)

   If they were born on the same day, the program says:
   You both were born on the same day exactly!
   If they were born on the same day but in different years,
   the program says: you've got the same birth date!

4. a) Prompt the user for 3 numbers.
      It's given that no two numbers are equal.
      Show at the console the numbers from the smallest to the biggest,
      like 6 < 8 < 122.

      or

   b) CHALLENGE
      Some of the numbers may be equal. Show, if needed the equality, like:
      6 = 6 < 122

5. It was unusual for us to add together binary numbers.
   But if we would need to add together larger binary numbers like
   111011 and 101010, HOW would you perform it?

6. Get an integer number by prompt(). Perform validation
  (make sure that the input is valid - not empty, number,
  integer - by Number.isInteger().
  Example of usage:
        if (Number.isInteger(num) === true)
               console.log('this is integer'))

   Use ternary operator and tell if the number is even or odd.

7. Ternary operator practice.
   a) var adminPassword = 'Rxjel$#1hs';
      var admin1 = "Yosi", admin2 = "Noa", admin3 = "Yael"

      Ask the user their username and
      ask to enter a password.

      If the username is equal to one of the admin's names
      and if the password is equal to adminPassword,
      show message "You're redirected to the admin area"

      If it is wrong, alert "Access denied"

   b) Ask the user to enter a word in upper case.
      Say if it is OK, or not in upper case.

      Hint to how to make this check see below all the exercises.

   c) The program gets 3 numbers. It is given that none of them
      is zero. Use ternary operator to decide
      (without multiplying them!!!) if their product (произведение)
      will be positive or negative

8. Like Wiki. Create 2 short "like wiki"
   pages. Don't work on it too much, as
   it is an exercise, but funny is appreciated.
   a) Remove default margins and padding from the elements.
   b) Create underlined section names.
   c) Create "Table of contents" and create at least 1 link
      to some inner section and 1 link
      to some section of the second page.
   d) Create at least 3 paragraphs and inside spans and links.
      Apply the same class to 2 paragraphs.
   b) Apply some identical properties to the direct children
      of these classes. For color properties use
      shorthand hexadecimal encoding (like #7D9)
   e) Use 2 Google fonts - with different weight and style -
      for at least 2 different parts of text
   f) Use float to surround a table and a picture with a text.
   g) Insert a picture inside some div and make it a link to somewhere.
   h) Insert a picture inside some table and make it a link to nowhere.
   i) Use px, cm, mm, inches and % for some sizes
   j) Apply some identical properties to some list of classes
   k) Put the files of your Wiki into tigris/your-name/wiki directory


      To be continued ...

9. Show opening hours of museum.

   Get current Date by "new Date()".
   Use function currentDate.getDay().
   If it returns 1, it's Monday, the museum is closed.
   If it returns 0 or 4 - it's Sunday or Wednesday,
   it's open half day from 8:00 till 12:00,
   In the other days it should be open from 8:00 till 20:00.

   Use switch.

10. Our application should get a month and output it’s season
   in accordance with this specification:

      Winter: December, January and February
      Spring: March, April and May
      Summer: June, July and August
      Autumn: September, October and November

   Use switch.

Hint for 1 i): when at the HTML page use <br>,
               when at the console use \n
               to get to the new line

Hint for 7 b): if word is equal to word in Upper Case, then the
               original word is given in Upper Case
     (we assume here that this is a word anyway, only the case is unknown)

     if (word.toUpperCase() === word)
