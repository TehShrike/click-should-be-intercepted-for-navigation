declare module 'click-should-be-intercepted-for-navigation' {
	declare function eventIsModifiedByKeyPress(event: Event): boolean;
	declare function isLeftClick(event: Event): boolean;

	function shouldInterceptEvent(event: Event): boolean;
	export default shouldInterceptEvent;
}
