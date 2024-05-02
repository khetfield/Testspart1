// checkout.test.js

const checkout = require('./checkout');

describe('Shopping Cart Checkout', () => {
  test('Shows error message for empty cart', () => {
    // show error for empty cart
  });

  test('Prompts user to create account or continue as guest', () => {
    // prompt user to create account or stay as guest
  });

  test('Sends logged in user to payment and shipping info page', () => {
    // direct logged in user to payment and shipping info page
  });

  test('sends user to create account page after choosing to create account', () => {
    // direct user to create account page after selecting create account
  });

  test('sends user to login page after selecting login', () => {
    // direct user to login page after selecting login
  });

  test('show order summary', () => {
    // show order summary at each page
  });

  test('send confim email after checkout', () => {
    // send confirm email after a successful checkout
  });

  test('show checkout errors if any present', () => {
    // show checkout errors if there are any present
  });

  test('reminder email for incomplete checkout', () => {
    // send reminder email for incomplete checkout
  });
});
