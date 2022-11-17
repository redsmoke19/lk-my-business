import unActive from './un-active';

export default () => {
  const falagInputFields = [];
  const formInputs = document.querySelectorAll('.form__field input, .form__field textarea');

  formInputs.forEach((formInput, i) => {
    if (formInput.value.length > 0) {
      formInput.closest('.form__field').classList.add('filled');
    }

    formInput.addEventListener('input', () => {
      if (formInput.validity.valid) {
        formInput.closest('.form__field').classList.remove('invalid');
        formInput.closest('.form__field').classList.add('valid');
      }

      if (!falagInputFields[i]) {
        formInput.addEventListener('change', () => {
          if (formInput.validity.valid) {
            formInput.closest('.form__field').classList.remove('invalid');
            formInput.closest('.form__field').classList.add('valid');
          } else if (!formInput.validity.valid && formInput.value.length > 0) {
            formInput.closest('.form__field').classList.add('invalid');
            formInput.closest('.form__field').classList.remove('valid');
          } else {
            formInput.closest('.form__field').classList.remove('invalid');
            formInput.closest('.form__field').classList.remove('valid');
            formInput.closest('.form__field').classList.remove('filled');
          }
        });

        formInput.addEventListener('blur', () => {
          if (formInput.validity.valid) {
            formInput.closest('.form__field').classList.remove('invalid');
            formInput.closest('.form__field').classList.add('valid');
          } else if (!formInput.validity.valid && formInput.value.length > 0) {
            formInput.closest('.form__field').classList.add('invalid');
            formInput.closest('.form__field').classList.remove('valid');
          } else {
            formInput.closest('.form__field').classList.remove('invalid');
            formInput.closest('.form__field').classList.remove('valid');
            formInput.closest('.form__field').classList.remove('filled');
          }
        });

        formInput.addEventListener('focus', () => {
          formInput.closest('.form__field').classList.remove('invalid');
        });

        falagInputFields[i] = true;
      }
    });
  });

  const passwordToggles = document.querySelectorAll('.form__show-password');

  passwordToggles.forEach((passwordToggle) => {
    const passwordInput = passwordToggle.closest('.form__field').querySelector('input[type="password"');

    if (passwordInput) {
      passwordToggle.addEventListener('click', () => {
        if (passwordToggle.classList.contains('active')) {
          passwordToggle.classList.remove('active');

          passwordInput.type = 'password';
        } else {
          passwordToggle.classList.add('active');

          passwordInput.type = 'text';
        }
      });
    }
  });

  const formSelects = document.querySelectorAll('.form__field--select');

  const formSelectOrganisationRows = document.querySelectorAll('.form__row--organisation');

  const organisationFieldToggle = (value) => {
    if (value === 3) {
      formSelectOrganisationRows.forEach((formSelectOrganisationRow) => {
        const inputField = formSelectOrganisationRow.querySelector('input');
        inputField.value = '';
        inputField.required = true;

        formSelectOrganisationRow.classList.add('show');
      });
    } else {
      formSelectOrganisationRows.forEach((formSelectOrganisationRow) => {
        const inputField = formSelectOrganisationRow.querySelector('input');
        inputField.value = '';
        inputField.required = false;

        formSelectOrganisationRow.classList.remove('show');
      });
    }
  };

  formSelects.forEach((formSelect) => {
    const formSelectInputText = formSelect.querySelector('input[type="text"]');
    const formSelectInputId = formSelect.querySelector('input[type="hidden"]');

    const setValueInputs = (text, value) => {
      if (formSelectInputText && formSelectInputId) {
        formSelectInputText.closest('.form__field').classList.add('valid');
        formSelectInputText.value = text;
        formSelectInputId.value = value;
      }
    };

    const setActiveItem = (element, elements) => {
      unActive(elements, 'active');

      element.classList.add('active');

      setValueInputs(element.textContent, element.dataset.value);

      formSelectInputText.closest('.form__field').classList.add('selected');

      organisationFieldToggle(parseInt(formSelectInputId.value, 10));
    };

    const formSelectList = formSelect.querySelector('.form__select');
    const formSelectListItems = formSelectList?.querySelectorAll('li');

    if (formSelectInputId.value) {
      const formSelectListItem = []
        .filter
        .call(formSelectListItems, (it) => it.dataset.value === formSelectInputId.value)[0];

      setActiveItem(formSelectListItem, formSelectListItems);
    }

    formSelectListItems.forEach((formSelectListItem) => {
      formSelectListItem.addEventListener('click', () => {
        setActiveItem(formSelectListItem, formSelectListItems);
      });
    });

    formSelect.addEventListener('click', () => {
      formSelect.classList.toggle('active');

      formSelectList?.classList.toggle('active');
    });
  });
};
