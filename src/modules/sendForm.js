export const sendForm = (onSuccess) => {
  const forms = document.querySelectorAll('form');
  const calculatorResult = document.querySelector('#calc-total');
  
  const validate = (list) => {
    let success = true;
    list.forEach((input) => {
      if (!input.classList.contains('success')) {
        success = false;
      }
    });
    return success;
  };

  const clearForm = (formElements) => {
    formElements.forEach((input) => {
      input.classList.remove('success', 'error');
    });
  };

  const sendFormToApi = (body) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
      }
      return res.json();
    });
  };

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      const formInput = form.querySelectorAll('input:not([type="hidden"])');
      e.preventDefault();
      if (validate(formInput)) {
        const formData = new FormData(form);
        if (calculatorResult && calculatorResult.value) {
          formData.append('calculator-total', calculatorResult.value);
        }

        const body = Object.fromEntries(formData);
        console.log(body);
        sendFormToApi(body)
          .then((data) => {
            clearForm(formInput);
            form.reset();
            onSuccess();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  });
};
