var throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(inputformHandler, 500));
formRef.addEventListener('submit', onSubmit);

const KEY_STORAGE = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(KEY_STORAGE)) || {
  email: '',
  message: '',
};
formRef.elements.email.value = formData.email;
formRef.elements.message.value = formData.message;

function inputformHandler(ev) {
  formData[ev.target.name] = ev.target.value;
  localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}

function onSubmit(ev) {
  ev.preventDefault();
  localStorage.removeItem(KEY_STORAGE);
  ev.currentTarget.reset();
}
