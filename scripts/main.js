const app = Vue.createApp(
{
	components: {
		'GenericComponent': window.GenericComponent,
		'ProjectCard': window.ProjectCard	
	}
}
	);
app.mount("#app");

$(document).ready((event)=>{
	const Observer = new IntersectionObserver((entries) =>{
	entries.forEach((e)=>{
		if (e.isIntersecting){
			e.target.style.opacity = "1";
			e.target.style.tranform = "translate(0)";
		}
	})
}, {threshold:0.3});

$(".animate").each((idx, ele)=>{
	Observer.observe(ele);
});});
