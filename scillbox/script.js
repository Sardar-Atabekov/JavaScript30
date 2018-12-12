




// В Javascript
	let button=document.querySelectorAll('.btn-order');

	let popup=document.querySelector('.popup');

	for (var i = 0; i < button.length; i++) {	
		button[i].addEventListener('click' , function () {
			popup.classList.add('_is-shown');
		});
	}

		
	
	
	



function checkParams() {
	let name = document.getElementById('form-name').value;
	let phone = document.getElementById('form-phone').value;
	let chekAccept = document.getElementById('check-accept:checked').value || '';

	if(name.length != 0 && phone.length != 0 && chekAccept) {
		document.getElementsByClassName('popup__btn-send').removeAttr('disabled');
	} else {
		document.getElementsByClassName('popup__btn-send').attr('disabled', 'disabled');
	}


}
/*
popup.addEventListener('click', function () {
			if (popupthis.classList.contains('_is-shown')) {
				popup.classList.remove('_is-shown');
			}
		});


*/
	$('.popup').click(function(e) {
		if(this === e.target) {
			$('.popup').removeClass('_is-shown');
		}
	});




function checkParams() {
	var name = $('#form-name').val();
	var phone = $('#form-phone').val();
	var chekAccept = $('#check-accept:checked').val() || '';

	if(name.length != 0 && phone.length != 0 && chekAccept) {
		$('.popup__btn-send').removeAttr('disabled');
	} else {
		$('.popup__btn-send').attr('disabled', 'disabled');
	}
}
