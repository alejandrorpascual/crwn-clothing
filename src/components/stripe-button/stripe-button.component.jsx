import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // price in cents
  const publishableKey = 'pk_test_47fJDYi7r997gtk8inykNQ5V00ulKRhthE';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
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