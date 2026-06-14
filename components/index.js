window.GenericComponent = {
	props: ["type", "title", "description"],
	data(){
		return {
			type,
			title,
			description
		}
	},
	template: `
		<div class={{type+"-container"}}>
		<h2>
		<slot></slot>
		<p class="ttl">{{title}}</p>
		</h2>

		<div class="descr">{{description}}</div>
		</div>
	`,
}

window.ProjectCard = {
	props: ["href", "name", "description", "skills_involved"],
	data() {
		return {
			href,
			name,
			description,
			skills_involved
		}
	},
	template: `
		<div class="project-container">
		<a :href="href" class="site-name"><h3 v-text="name"></h3></a>
		<p class="p-description" v-text="description"></p>
		<div class="skills-used">
		<p class="skills-label">Skills Used: </p>
		
		<ul class="skills">
		<li class="skill" v-for="for skl in skills_involved" :key="skl" v-text="skl"></li>
		</ul>
		</div>
		</div>
		`
}