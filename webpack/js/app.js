import '../scss/app.scss';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import 'jquery-validation';
import 'jquery-validation-unobtrusive';

/* Components */
import ExampleJsComponent from './components/exampleJsComponent';

/* Vue */
import ExampleVueApp from './vue/exampleVueApp';

window.onload = () => {
    
    new ExampleJsComponent();

    new ExampleVueApp();

    /*
        Custom jquery-validation handling for check boxes must equal true
        Decorate C# model bool properties with
        [Range(typeof(bool), 'true', 'true', ErrorMessage = 'Add your error message')]
        to make their corresponding checkbox validate to 'must equal true'
    */
    var defaultRangeValidator = $.validator.methods.range;
    $.validator.methods.range = function (value, element, param) {
        if (element.type === 'checkbox') {
            // if it's a checkbox return true if it is checked
            return element.checked;
        } else {
            // otherwise run the default validation function
            return defaultRangeValidator.call(this, value, element, param);
        }
    }

    /* Prevent Enter key from submitting form */
    $('form input').on('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            return false;
        }
    });

};