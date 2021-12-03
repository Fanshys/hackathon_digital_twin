export default {
  default: {
    $error: 'Поле заполнено неверно',
  },
  email: {
    required: 'Введите email',
    email: 'Некорректный email, пример: ivan@mail.ru',
  },
  phone: {
    required: 'Введите телефон',
    vPhone: 'Некорректный телефон, пример: +7 (911) 111-11-11',
  },
  name: {
    required: 'Введите имя',
    lettersAndSpaces: 'Имя может состоять только из букв',
    minLength: 'Имя слишком короткое',
  },
  license: {
    sameAs: 'Примите пользовательское соглашение',
  },

  password: {
    required: 'Введите пароль',
  },

  domain: {
    required: 'Введите домен',
  },

  correctName: {
    required: 'Введите название правки',
  },
};
