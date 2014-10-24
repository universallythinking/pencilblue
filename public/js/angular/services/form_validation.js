angular.module('validation', [])
.service('validationService', function() {
    this.isFormValid = function(form) {
        return form.$valid;
    };

    this.isFieldValid = function(field, validationType) {
        if(typeof validationType === 'undefined') {
            validationType = 'required';
        }

        return !field.$error[validationType];
    };
});
