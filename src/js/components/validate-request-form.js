import {validateForms} from "../functions/validate-forms";
import {Modal} from '../vendor/modal';
import vars from '../_vars';

const {errorMessage} = vars

const modal = new Modal()

const rules = [
  {
    ruleSelector: ".validate-name",
    rules: [
      {
        rule: 'required',
        errorMessage: errorMessage
      }
    ]
  },
  {
    tel: true,
    ruleSelector: ".validate-tel",
    rules: [
      {
        rule: 'required',
        errorMessage: errorMessage
      },
    ]
  },
  {
    ruleSelector: ".validate-checkbox",
    errorsContainer: '.g-checkbox',
    rules: [
      {
        rule: 'required',
      },
    ],
  }
]

const onSuccess = () => {
  modal.close()
  modal.open("thank")
}

document.addEventListener("DOMContentLoaded", () => validateForms('#request-form', rules, onSuccess))