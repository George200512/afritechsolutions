const app = Vue.createApp(
{
	components: {
		'GenericComponent': window.GenericComponent,
		'ProjectCard': window.ProjectCard	
	}
}
	);
app.mount("#app");
console.log(window.GenericComponent, window.ProjectCard)