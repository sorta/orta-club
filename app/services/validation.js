import Service from '@ember/service';
import { isArray } from '@ember/array';
import { assert, warn } from '@ember/debug';

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

  number(value) {
    return !isNaN(value);
  }

  // Model helpers
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

  getValidationSet(model, name) {
    const setName = name || 'main';
    const validationSet = model.get(`validationSets.${setName}`);
    return validationSet;
  }

  // service
  validateModel(model, options = {}) {
    assert('Must pass a model', !!model);

    const validationSetName = options['validationSet'] || 'main';
    const validationSet = this.getValidationSet(model, validationSetName);
    assert(
      `Validation Set not found: ${validationSetName}`,
      !!validationSet && Object.keys(validationSet).length,
    );

    const errors = [];

    for (const key in validationSet) {
      const propValidationData = this.getValidationData(validationSet[key]);
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

    if (errors.length) {
      warn(`Validation failed: ${JSON.stringify(errors)}`, {
        id: 'validation.validateModel',
      });
    }
    return errors;
  }
}
