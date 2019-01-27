/*Copyright (C) Dubai Police 2018*/

/*--------------------Date and Time ----------------------------------*/

var monthName = new Array('January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var hourap = new Array(12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

function showTime() {
	var dateObj = new Date();
	var day = dateObj.getDate(),
		month = dateObj.getMonth(),
		year = dateObj.getFullYear(),
		hour = dateObj.getHours(),
		minutes = (dateObj.getMinutes() <= 9 ? '0' + dateObj.getMinutes() : dateObj.getMinutes());
	var string = hourap[hour] +
		':' + minutes +
		' ' + (hour <= 11 ? 'AM' : 'PM') +
		'<br />' + (day <= 9 ? '0' + day : day) +
		'/' + (month + 1 <= 9 ? '0' + (month + 1) : month + 1) +
		'/' + year;
	var timeDiv = document.getElementById('time');
	if (timeDiv !== null) {
		timeDiv.innerHTML = string;
		timeDiv.setAttribute('datetime', year + '-' + (month + 1 <= 9 ? '0' + (month + 1) : month + 1) + '-' + day + ' ' + hour + ':' + minutes);

	};
};
setInterval(showTime, 1000);

/*----------------------------------------calendar----------------------------------------------*/

// date
updateDate();

function updateDate() {
	var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var timeNow = new Date(),
		locale = 'pt-pt',
		day = addZero(timeNow.getDate()),
		month = timeNow.toLocaleString(locale, {
			month: 'short'
		}),
		year = timeNow.getFullYear();

	var tdate = weekday[timeNow.getDay()] + ", " + day + " " + (month.charAt(0).toUpperCase() + month.slice(1));
	$(".t-date").html(tdate);
	//console.log(tdate);
}

// add zero
function addZero(num) {
	return (num >= 0 && num < 10) ? "0" + num : num + "";
}





/*--------------------------------------------------------------File upload----------------------------------------------*/


+

function ($) {
	'use strict';

	// UPLOAD CLASS DEFINITION
	// ======================

	var dropZone = document.getElementById('drop-zone');
	var uploadForm = document.getElementById('js-upload-form');

	var startUpload = function (files) {
		console.log(files)
	}

	uploadForm.addEventListener('submit', function (e) {
		var uploadFiles = document.getElementById('js-upload-files').files;
		e.preventDefault()

		startUpload(uploadFiles)
	})

	dropZone.ondrop = function (e) {
		e.preventDefault();
		this.className = 'upload-drop-zone';

		startUpload(e.dataTransfer.files)
	}

	dropZone.ondragover = function () {
		this.className = 'upload-drop-zone drop';
		return false;
	}

	dropZone.ondragleave = function () {
		this.className = 'upload-drop-zone';
		return false;
	}

}(jQuery);

/*------------------------------------------------------------------Tool tip-------------------------------------------------------------*/