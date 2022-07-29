// A pure JS scipt to generate a random person
function randomPerson() {
  var firstName = randomFirstName();
  var lastName = randomLastName();
  var email = randomEmail(firstName, lastName);
  var phone = randomPhone();
  var state = randomState();
  var zip = randomZip();
  var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    state: state,
    zip: zip
  };
  return person;
}

{
    function randomFirstName() {
        var firstNames = ["John", "Jane", "Mary", "Bob", "Tom", "Sue", "Bill", "Joe", "Mary", "Mike", "Adam", "Steve", "Linda", "Carol", "Mary", "Bob", "Mike", "Adam", "Steve", "Linda", "Carol"];
        var firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        return firstName;
    }

    function randomLastName() {
        var lastNames = ["Smith", "Jones", "Williams", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson"];
        var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        return lastName;
    }

    function randomEmail(firstName, lastName) {
        var email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@gmail.com";
        return email;
    }

    function randomPhone() {
        var phone = "";
        for (var i = 0; i < 10; i++) {
            phone += Math.floor(Math.random() * 10);
        }
        return phone;
    }

    function randomState() {
        var states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
        var state = states[Math.floor(Math.random() * states.length)];
        return state;
    }

    function randomZip() {
        var zip = "";
        for (var i = 0; i < 5; i++) {
            zip += Math.floor(Math.random() * 10);
        }
        return zip;
    }
}

console.log(randomPerson());
