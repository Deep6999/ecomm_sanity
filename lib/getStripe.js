import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51LdgU1SGkjukwFPyz7xIkchpCJsXPAPGzY5AcgDxEKiGl8DNxjGiTaO5ObftoUzOhPjcycufNiXlj1HYx0fuX6dD00N5xcbO7Y"
    );
  }

  return stripePromise;
};

export default getStripe;
