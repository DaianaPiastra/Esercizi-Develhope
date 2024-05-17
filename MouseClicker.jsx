export function MouseClicker() {
	function handleButtonClick(event) {
		console.log(event.target.srcset)

	}

	return (
		<div>
			<button name="one" onClick={handleButtonClick}>
            <img data-v-24a05c19="" srcset="https://img.icons8.com/?size=50&amp;id=581&amp;format=png 1x, https://img.icons8.com/?size=100&amp;id=581&amp;format=png 2x" width="20" height="20" alt="cuore icon"/> 
				Click me
			</button>
		</div>
	)
}
