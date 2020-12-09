import tropes from '../../tropes'
import Square from './square'


const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {

		// Generate random number  
		let j = Math.floor(Math.random() * (i + 1));

		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}


const Home = () => {

	const moddedTropes = tropes.split('\n');
	const shuffled = shuffleArray(moddedTropes).slice(0, 24)
	shuffled.splice(12, 0, `
	⭐️⭐️⭐️⭐️
	FREE 
	SPACE
	⭐️⭐️⭐️⭐️`);

	const bingo = ["B", "I", "N", "G", "O"]


	return (
		<section class="flex board">

			{bingo.map(item => <Square special>{item}</Square>)}
			{shuffled.map(item => <Square>{item}</Square>)}
		</section>
	)
}

export default Home;