//bring in the tags element
const tagsEl = document.getElementById("tags")
//bring in the text area
const textArea = document.getElementById("textarea")

//when page loads automatically highlight the text box
textarea.focus()

//Add the Event listeners 

textarea.addEventListener("keyup", (e) => {
	createTags(e.target.value)
})

function createTags (input){
	//console.log(input)
	const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim())

	//take tags element and clear it
	tagsEl.innerHTML = ""

	tags.forEach(tag => {
		const tagEl = document.createElement("span")
		tagEl.classList.add("tag")
		tagEl.innerText = tag
		tagsEl.appendChild(tagEl)
	})
}