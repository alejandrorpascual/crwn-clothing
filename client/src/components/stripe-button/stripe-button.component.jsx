import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // price in cents
  const publishableKey = 'pk_test_47fJDYi7r997gtk8inykNQ5V00ulKRhthE';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment succesful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an inssue with your payment. Please make sure you use the provided credit card');
    });
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${  price }`}
      amount={ priceForStripe }
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;