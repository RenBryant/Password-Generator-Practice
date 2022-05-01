# Password-Generator-Practice

![Image of the password generator. It's a title, a box, and a button](./assets/Images/Password-gen-pic-new.JPG)

[Deployed Link](https://renbryant.github.io/Password-Generator-Practice/)

This is a password generator that was created to practice Javascript. I was given a starter code and told to make the Javascript
work so that a random password will be given at the push of a button.

FIrst I added the function to generate the password, made sure the button works, and that the characters will display on the screen.

Then I added arrays for numbers, special characters, upper case letters, and lower case letters. Another empty array with every one of these was
created after that.

Then I added a validation of the length to be between 8 and 128, and if not then the page would spit out an alert and an undefined password.

I gave the user the option to choose between what characters they want to use for their password with prompts and concats. If the user doesn't
want any of the four options, it spits out an alert and then gives the user an undefined password.

Then I made a for Loop that will spit out the options for the password based on what they chose.

I made the password that is displayed in the end random by using using Math.floor(Math.random).

Thanks for checking in on my repository!
