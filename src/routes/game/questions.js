export const questions = [
	'Gripe',
	'Covid 19',
	'Pnemonia'
];

export const getShuffledQuestions = () => {
	const array = [...questions];
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};
