this.When(/^I do something$/, function (next) {
    next;
});

this.When(/^I do another thing$/, function (next) {
    next;
});

//Comments test
//this.When(/^I check one line commets doesn't affect steps$/, function (next) {next;});

/*
this.When(/^I check multi line commets doesn't affect steps$$/, function (next) {
    next;
});
*/

//Duplicates tests 
this.When(/^I do something$/, function (next) {
    next;
});