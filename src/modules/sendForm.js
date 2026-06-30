export const sendForm = (onSuccess) => {
  const forms = document.querySelectorAll('form');

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      if (!input.classList.contains('success')) {
        success = false;
      }
    });
    return success;
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
        const body = Object.fromEntries(new FormData(form));
        sendFormToApi(body)
          .then((data) => {
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
