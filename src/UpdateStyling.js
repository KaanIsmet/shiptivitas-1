const UpdateStyling (cardElement, statusStyling) {
	cardElement.removeList('.Card-grey', '.Card-blue', '.Card-green')
	cardElement.addList(statusStyling)
}

export default UpdateStyling
