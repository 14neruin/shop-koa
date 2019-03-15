export function Basket(){
	this.products = []

	this.get = () => {
		let xhttp = new XMLHttpRequest()
		xhttp.open("GET", `/api/basket`, true)
		xhttp.send()
		xhttp.onload = () => {
			this.products = JSON.parse(xhttp.response)
		}
	}

	this.add = (id) => {
		let xhttp = new XMLHttpRequest()
		xhttp.open("POST", `/api/addtobasket${id}`, true)
		xhttp.send()
		xhttp.onload = () => this.get()
	}

	this.delete = (id) => {
		let xhttp = new XMLHttpRequest()
		xhttp.open("DELETE", `/api/deletetobasket${id}`, true)
		xhttp.send()
		xhttp.onload = () => {
			this.get()
			//Заглушка, это решение не подходит для ооп
			if(window.location.pathname == "/basket" || window.location.pathname == "/order")
				window.location.replace(window.location.href)
			else
				showAjax(document.getElementById("showbasket"), "/mbasket")
			//endcomment
		}
	}

	this.correct = (id, col) => {
		let xhttp = new XMLHttpRequest()
		xhttp.open("PUT", `/api/editbasket${id}?col=${col}`, true)
		xhttp.send()
		xhttp.onload = () => {
			this.get()
			//нужно решить, это решение не подходит для ооп
			if(window.location.pathname == "/basket" || window.location.pathname == "/order")
				window.location.replace("/basket")
			else
				showAjax(document.getElementById("showbasket"), "/mbasket")

			if(JSON.parse(xhttp.response).status == true)
				document.getElementById('basketinfo').textContent = this.count() + Number(col)
			this.get()
		}
	}

	this.count = () => {
		let count = 0
		for(let product of this.products){
			count += product.col
		}
		return count
	}

	this.prodcount = (id) => {
		for(let product of this.products){
			if(product.id == id) 
				return product.col
		}
	}

	this.get()
}