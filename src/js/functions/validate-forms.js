import JustValidate from 'just-validate';
import Inputmask from "inputmask";

export const validateForms = (selector, rules, onSuccess, onFail) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('.mask-input');

  if (!form) {
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    for (let item of rules) {

      if(item.tel) {
        item.rules.push({
          rule: 'function',
          errorMessage: 'Введите корректный номер телефона',
          validator: function() {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length >= 10;
          },
        });
      }
    }
  }

  const validation = new JustValidate(selector, {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: 'var(--color-red)',
      marginTop: '4px',
      fontSize: '14px',
      lineHeight: '22.4px'
    },
  });

  for (const item of rules) {
    const {ruleSelector, rules, errorsContainer} = item

    validation.addField(ruleSelector, rules, {errorsContainer});
  }

  validation.onFail(() => {
    onFail()
  })

  validation.onSuccess(event => {
    onSuccess()

    event.target.reset()
  })
};