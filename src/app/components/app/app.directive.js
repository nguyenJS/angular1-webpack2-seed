export default function appDirective() {
	return {
		restrict: 'E',
		template: `<ui-view class="main-layout"></ui-view>`,
	};
}
