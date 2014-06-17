'use strict';

/* Controllers */

angular.module('calendar.controllers', [])
    .controller('CalendarController', ['$scope', function($scope) {
        var date = moment(),
            monthEnd = date.endOf('month').day(),
            monthLength = date.endOf('month').date(),
            monthStart = date.startOf('month'),
            weeks = [[]],
            i,
            j;

        $scope._weekdays = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");
        $scope._months = "January February March April May June July August September October November December".split(" ");

        for (i = 0; i < monthStart.day(); i++) {
            weeks[0].push('');
        }

        for (i = 1, j = 0; i < monthLength + 1; i++) {
            if (weeks[j].length === 7) {
                weeks.push([]);
                j++;
            }

            weeks[j].push(i);
        }

        for (i = 0; i < 6 - monthEnd; i++) {
            weeks[j].push('');
        }

        console.log(weeks);
        $scope._weeks = weeks;
    }])
    .controller('MyCtrl2', ['$scope', function($scope) {

    }]);
