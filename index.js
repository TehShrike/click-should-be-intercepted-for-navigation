function eventIsModifiedByKeyPress(event) {
	return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}
function isLeftClick(event){
	return event.button === 0
}
function isTargetingSomewhereElse(anchorElement) {
	return anchorElement.target && anchorElement.target !== '_self'
}

module.exports = function shouldIntercept(event) {
	return !event.defaultPrevented
		&& !eventIsModifiedByKeyPress(event)
		&& isLeftClick(event)
		&& !isTargetingSomewhereElse(event.target)
}
