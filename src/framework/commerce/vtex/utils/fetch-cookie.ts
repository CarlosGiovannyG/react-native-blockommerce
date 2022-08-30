import getSetCookies from "./get-set-cookies";

const ENDPOINT_INIT = 'https://trocqa.serviciostroccencosud.com.co/jwt/api';

const FetchCookie = async () => {
  const data = await fetch(`${ENDPOINT_INIT}/7u3fCWEa4ngJXVTqAJ4ksPC`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  });
  try {
    const set_cookies = getSetCookies(data.headers);

    return set_cookies;
  } catch (error) {
    console.log(error);
  }
};

export default FetchCookie;