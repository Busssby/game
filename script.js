		let item1 = document.querySelector('.item1')
		let it1 = document.querySelector('.it1')
		let item2 = document.querySelector('.item2')
		let it2 = document.querySelector('.it2')
		let item3= document.querySelector('.item3')
		let it3 = document.querySelector('.it3')
		let home = document.querySelector('.home')


		let game2 = document.querySelector('.door1')
		let guy = document.querySelector(".guy")
		let right = document.querySelector('.right')
		let left = document.querySelector('.left')
		
		let out = document.querySelector('.out')

		let school = document.querySelector('.school')

		let score = 0
		
		item1.onclick=function(){
			
			item1.style.display="none"
			score=score+1
			it1.style.textDecoration="line-through"
			if (score==3) {
				alert('now go to school!')

				game2.style.display = "block"
			}
		}
		item2.onclick=function(){
			
			item2.style.display="none"
			score=score+1
			it2.style.textDecoration="line-through"
			if (score ==3) {
				alert('now go to school!')

				game2.style.display = "block"
			}
		}
		item3.onclick=function(){
			
			item3.style.display="none"
			score=score+1
			it3.style.textDecoration="line-through"
			if (score == 3) {
				alert('now go to school!')

				game2.style.display = "block"
			}
		}

		let timscore = document.querySelector('.timscore')
		let interv1 = 
		time = 15
		function Timer(){
			time=time-1
			timscore.innerHTML = time
				if((time < 0) && (score < 3)){
					alert('u fool :(')
				}
		}
		clearInterval(interv1)
		interv1 = setInterval(Timer, 3500)





	let createDog = function(){
				let posy = [200, 500, 800]
				let dog = document.createElement('div')
				document.body.appendChild(dog)
				let randomY = Math.round(Math.random()*2)
				dog.classList.add('dog')
				dog.style.top = posy[randomY] + "px"
				school.before(dog)

				let tap = 0
				
				let dogGo = function(){
					tap = tap + 100
					dog.style.left = tap + "px"
				}
		
				let txt = document.querySelector('.omg')
		
				let textAp = function(){
					txt.innerHTML = "О нет, собаки! Беги от них!"
				}
				setTimeout(textAp, 200)
		
				int = setInterval(dogGo, 500)

				let finish = function() {
					clearInterval(int)
					dog.classList.remove("dog") 
				}

				setTimeout(finish, 11000)

			}

	game2.onclick = function(){
		home.style.display = "none"
		game2.style.display = "none"
		right.style.display = "block"
		left.style.display = "block"
		guy.style.display = "block"
		
		intV = setInterval(createDog, 2000)
		let step = 200
	right.onclick = function(){
		step = step + 50
		guy.style.left = step + "px"
		if (step == 2300) {
			alert("Ура! Ты в школе!")
			out.style.display = "none"
			clearInterval(intV)
			school.style.display = "block"
			alert("Ты в школе! Беги в класс!")
		}
	}

	left.onclick = function(){
		step = step - 50
		guy.style.left = step + "px"
		alert("Не туда!")
		}
	}
		let door2 = document.querySelector('.door2')
		let klass = document.querySelector('.klass')
		let talk = document.querySelector('.talk')
		let teacher = document.querySelector('.teacher')
		let game_3 = document.querySelector('.game_3')

		door2.onclick = function () {
			klass.style.display = "block"
			school.style.display = "none"
			teacher.style.display = "block"
			let app = function(){
				talk.style.display = "block"
				teacher.style.backgroundImage = "url(stand.png)"
			}
			setTimeout(app, 1000)

			let game3 = function(){
				talk.style.display = "none"
				teacher.style.display = "none"
				game_3.style.display = "block"
				let player1 =  true;
				let player2 =  false;
				
				let player1_choise = null;
				let player2_choise = null;
				
				let text = document.querySelector('.info');
				let choice_player1 = document.querySelector('.choice-player-1');
				let choice_player2 = document.querySelector('.choice-player-2');
				
				document.addEventListener('keydown', function(arg){
				
					if (player1 == true && player2 == false) {
						if (arg.code == 'KeyA') {
							console.log('игрок 1 нажал на А')
							player1_choise = 'камень'
							text.innerHTML = 'Ход 2-го игрока'
							player2 = true
							player1 = false
						}
					
						else if(arg.code == 'KeyS'){
							console.log('игрок 1 нажал на S')
							player1_choise = 'ножницы'
							text.innerHTML = 'Ход 2-го игрока'
							player2 = true
							player1 = false
						}
					
						else if(arg.code == 'KeyD'){
							console.log('игрок 1 нажал на D')
							player1_choise = 'бумага'
							text.innerHTML = 'Ход 2-го игрока'
							player2 = true
							player1 = false
						}
					}
					if (player1 == false && player2 == true) {
							let posy = ['бумага', 'ножницы', 'камень']
							let randomY = Math.round(Math.random()*2)
							player2_choise = posy[randomY]
							
							player2 = false
							setTimeout(show_choise, 1000)
							setTimeout(finish, 2000)
					}
				})
				
				function show_choise(){
					if (player1_choise == 'камень') {
						choice_player1.style.backgroundImage = 'url(1.jpg)'
						choice_player1.style.backgroundSize = '100%'
					}
				
					else if (player1_choise == 'ножницы') {
						choice_player1.style.backgroundImage = 'url(2.jpg)'
						choice_player1.style.backgroundSize = '100%'
					}
				
					else if (player1_choise == 'бумага') {
						choice_player1.style.backgroundImage = 'url(3.jpg)'
						choice_player1.style.backgroundSize = '100%'
					}
				
					if (player2_choise == 'камень') {
						choice_player2.style.backgroundImage = 'url(1.jpg)'
						choice_player2.style.backgroundSize = '100%'
					}
					else if (player2_choise == 'ножницы') {
						choice_player2.style.backgroundImage = 'url(2.jpg)'
						choice_player2.style.backgroundSize = '100%'
					}
				
					else if (player2_choise == 'бумага') {
						choice_player2.style.backgroundImage = 'url(3.jpg)'
						choice_player2.style.backgroundSize = '100%'
					}
					
				}
				
				function finish(){
					if (player1_choise == player2_choise) {
						alert('Ничья!')
					} else if (player1_choise == 'камень' && player2_choise == 'ножницы') {
						alert('Ты Победил!')
					}
					else if (player1_choise == 'ножницы' && player2_choise == 'бумага') {
						alert('Ты Победил!')
					}
					else if (player1_choise == 'бумага' && player2_choise == 'камень') {
						alert('Ты Победил!')
					}
					else if (player1_choise == 'камень' && player2_choise == 'ножницы') {
						alert('Ты Победил!')
					} 
					else{
						alert('Победил учитель :(')
					}
					
				
				}
			}

			setTimeout(game3, 3000)
						
		}