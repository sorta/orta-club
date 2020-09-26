import Service from '@ember/service';
import { isArray } from '@ember/array';
import { assert } from '@ember/debug';

export default class ValidationService extends Service {
  get emailRegex() {
    return /\S+@\S+\.\S+/;
  }

  // Validators
  email(emailAddress) {
    return emailAddress && this.emailRegex.test(emailAddress);
  }

  present(value) {
    return !!value;
  }

  getValidatorData(obj) {
    if (typeof obj === 'string') {
      return [obj];
    } else if (isArray(obj)) {
      return obj;
    } else {
      assert('Unreadable Validator', false);
    }
  }

  getValidationData(obj) {
    if (Object.hasOwnProperty.call(obj, 'validators')) {
      const name = obj['name'];
      const validators = this.getValidatorData(obj.validators);
      return {
        name,
        validators,
      };
    } else {
      const validators = this.getValidatorData(obj);
      return {
        validators,
      };
    }
  }

  // service
  validateModel(model) {
    assert('Must pass a model', !!model);
    const { validations } = model;
    assert(
      'Model must have validations',
      !!validations || Object.keys(validations).length,
    );

    // const options = argOpts || {};

    const errors = [];

    for (const key in validations) {
      const propValidationData = this.getValidationData(validations[key]);
      const prop = model.get(key);

      for (const validator of propValidationData.validators) {
        const validationFn = this.get(validator);
        if (!validationFn(prop)) {
          const name = propValidationData['name'] || key;
          errors.push({
            validator,
            prop,
            key,
            name,
          });
        }
      }
    }

    return errors;
  }
}
