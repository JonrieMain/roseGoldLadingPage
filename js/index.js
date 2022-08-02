const sideHeader = document.querySelector('.sideHeader');
const nav = document.querySelector('#navTrig');
nav.addEventListener('click', ()=>{
	if(sideHeader.classList.contains('close')){

		/* open */
		sideHeader.style.left="0";

		/* add remove*/
		sideHeader.classList.remove('close')
		sideHeader.classList.add('open')

		/* change */
		nav.classList.remove('fa-bars')
		nav.classList.add('fa-x')

	}else{
		/* close */
		sideHeader.style.left="-150%";

		/* add remove*/
		sideHeader.classList.add('close')
		sideHeader.classList.remove('open')

		/* change */
		nav.classList.add('fa-bars')
		nav.classList.remove('fa-x')

	}
})