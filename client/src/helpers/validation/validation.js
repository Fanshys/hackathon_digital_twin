import {
  required, minLength, sameAs, email as vEmail,
} from 'vuelidate/lib/validators';
import { lettersAndSpaces, phone as vPhone } from './customValidators';

const name = {
  required,
  minLength: minLength(2),
  lettersAndSpaces,
};

const correctName = {
  required,
};

const checkbox = {
  required,
  sameAs: sameAs(() => true),
};

const email = {
  required,
  email: vEmail,
};

const phone = {
  required,
  vPhone,
};

const password = {
  required,
};

const domain = {
  required,
};

export {
  name, checkbox, email, phone, password, domain, correctName,
};
