export const validation = () => {
  const allForms = document.querySelectorAll('form');

  const checkStatus = (element, regExp) => {
    const value = element.value;

    const isValid = regExp.test(value);

    element.classList.toggle('success', isValid);
    element.classList.toggle('error', !isValid);
    console.log(isValid);
    return isValid;
  };

  allForms.forEach((form) => {
    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
      const inputAttribute = input.getAttribute('name');
      if (inputAttribute === 'phone') {
        const regExp = /^\+?[0-9]{11,16}$/;
        input.addEventListener('input', () => {
          checkStatus(input, regExp);
        });
      } else if (inputAttribute === 'fio') {
        input.addEventListener('input', () => {
          const regExp = /^[А-Яа-яЁёA-Za-z\s]+$/;
          checkStatus(input, regExp);
        });
      }
    });
  });
};
