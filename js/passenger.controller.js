angular.module('passenger.controller',[])
    .controller('passengerController', ['$scope', function($scope) {

        var getPassengerDefault = function() {
            return {
                'prefix': '',
                'firstName': '',
                'lastName': '',
                'dob': null
            };

        };

        this.numberOfPassengers = 3;
        this.passengerEditId = 1;
        this.editMode = true;
        this.passengerEdit = getPassengerDefault();
        this.passengers = [
            {
                'prefix': 'Mr',
                'firstName': 'Petter ddd',
                'lastName': 'Ross',
                'dob': new Date(1995, 11, 17)
            }
        ];
        this.getPassengerEditId = function(){
            if(this.editMode) {
                return this.passengerEditId + 1;
            } else {
                return this.passengers.length + 1;
            }
        };
        this.showForm =function(){
            if (this.passengers.length < this.numberOfPassengers || this.editMode){
                return true;
            } else {
                return false;
            }
        };
        this.add = function(form){
            if(form.$valid) {
                if (this.editMode) {
                    this.passengers[this.passengerEditId] = this.passengerEdit;
                } else {
                    this.passengers.push(this.passengerEdit);
                }
                this.resetEdit();
            }
            return false;
        };
        this.removeItem = function(item){
            this.passengers.splice(item, 1);
        };
        this.editItem = function(item){
            this.editMode = true;
            this.passengerEditId = item;
            this.passengerEdit = this.passengers[item];
        };
        this.resetEdit = function(){
            this.passengerEdit = getPassengerDefault();
            this.editMode = false;
            return false;
        };
        this.hideItem = function(item){
            if (this.editMode && item >= this.passengerEditId ){
                return true;
            } else {
                return false;
            }
        };
        this.getIconsArray = function(){
            return new Array(this.numberOfPassengers);
        };
        this.activateIcon = function(item){
            return (typeof this.passengers[item] !== 'undefined');
        }

    }]);