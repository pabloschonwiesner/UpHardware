
let anchoPantalla = screen.width

if(anchoPantalla > 600) {
	dDireccion.addEventListener('mouseover', mostrarTexto)
	dTelefono.addEventListener('mouseover', mostrarTexto)
	dMail.addEventListener('mouseover', mostrarTexto)
	containerDatos.addEventListener('mouseout', ocultarTodos)
} 

function mostrarTexto (elem) {
	elem = elem.target.id
	switch(elem) {
		case 'dDireccion': 
			mostrarDireccion()
			break
		case 'dTelefono':
			mostrarTelefono()
			break
		case 'dMail':
			mostrarMail()
			break
		default: ocultarTodos()
	}
}

function ocultarTodos () {
	pDireccion.style.display = 'none'
	pTelefono.style.display = 'none'
	pMail.style.display = 'none'
}

function mostrarDireccion () {
	ocultarTodos()
	pDireccion.style.display = 'initial'
}

function mostrarTelefono () {
	ocultarTodos()
	pTelefono.style.display = 'initial'
}

function mostrarMail () {
	ocultarTodos()
	pMail.style.display = 'initial'
}