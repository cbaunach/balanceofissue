stdlib.balanceOf does not return precision past javascript number type. BalanceOf should return 18446744073709551615 as a bigNumber, but instead returns 18446744073709552000

This is an example of an account with a 0 decimal asset () and a 19 decimal asset () and showcases how the stdlib cannot get their full precision level.

To run this example, use `node index.js` and it will print out an example of the issue. To verify that the account has the correct balances the index.js file includes links back to the account and tokens used.