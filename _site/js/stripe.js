$(document).ready(function() {

    var stripe = Stripe('pk_test_0enkPvP7x4Cmh6AIrS4yaOdI');
    var elements = stripe.elements();
    // Custom styling can be passed to options when creating an Element.
var style = {
  base: {
    // Add your base input styles here. For example:
    fontSize: '16px',
    color: "#32325d",
  }
};

// Create an instance of the card Element
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>
card.mount('#card-element');


});
