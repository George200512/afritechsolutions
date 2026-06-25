window.GenericComponent = {
	props: ["type", "title", "description"],
	template: `
		<div :class='type+"-container"'>
		<div class="heading">
		<slot></slot>
		<p class="ttl">{{title}}</p>
		</div>

		<div class="descr">{{description}}</div>
		</div>
	`,
}

window.ProjectCard = {
	props: ["href", "name", "description", "skills_involved"],
	template: `
		<div class="project-container">
		<a :href="href" class="site-name"><h3>{{name}}</h3></a>
		<p class="p-description">{{description}}</p>
		<div class="skills-used">
		<p class="skills-label">Skills Used: </p>
		
		<ul class="skills">
		<li class="skill" v-for="skl in skills_involved" :key="skl">{{skl}}</li>
		</ul>
		</div>
		</div>
		`
}