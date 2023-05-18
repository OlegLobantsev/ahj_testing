import ValidateForm from './ValidateForm';

export default class CheckCardFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
        <ul class="cards">
            <li class="cards-item"><span class="card visa" title="Visa">Visa</span></li>
            <li class="cards-item"><span class="card master" title="Mastercard">Mastercard</span></li>
            <li class="cards-item"><span class="card mir" title="МИР">МИР</span></li>
            <li class="cards-item"><span class="card amex" title="American Express">American Express</span></li>
            <li class="cards-item"><span class="card discover" title="Discover">Discover</span></li>
            <li class="cards-item"><span class="card jcb" title="JCB">JCB</span></li>
            <li class="cards-item"><span class="card diners_club" title="Diners Club">Diners Club</span></li>
        </ul>
        <form id="form" novalidate="novalidate">
            <div class="form-group">
                <input class="form-group__input" id="card-number" name="card-number" type="text" placeholder="Credit card number">
                <div class="tooltip">Enter credit card number</div>
                <button class="form-group__button" type="submit" id="submitform">Click to Validate</button>
            </div>
        </form>
        <div class="result">
            <div class="result-validate luhn-succes">The number was checked by the Luhn algorithm</div>
            <div class="result-validate luhn-error">The number did not pass verification</div>
            <div class="result-validate no-bank">Unknown card</div>
        </div>            
        `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    this.form = new ValidateForm();
  }

  static get inputSelector() {
    return '.form-group__input';
  }

  static get submitSelector() {
    return '.form-group__button';
  }
}
