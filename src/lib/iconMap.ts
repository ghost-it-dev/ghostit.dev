import {
	SiAngular, SiCplusplus, SiCsharp, SiCss3, SiDotnet, SiFacebook, SiGit, SiGithub,
	SiHtml5, SiInstagram, SiJavascript, SiLinkedin, SiMysql, SiNextdotjs, SiPython,
	SiReact, SiRust, SiSvelte, SiTypescript, SiVite, SiVuedotjs, SiX
} from '@icons-pack/react-simple-icons';

// Type definition for a single skill
interface SkillData {
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	friendlyName: string;
}

// Type definition for the skills map
type SkillsMap = Record<string, SkillData>;

// Type definition for the connections icon map
type ConnectionsIconMap = Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>;

// Combined mapping for both friendly names and icons
const skillsData: SkillsMap = {
	react: { icon: SiReact, friendlyName: 'React' },
	git: { icon: SiGit, friendlyName: 'Git' },
	angular: { icon: SiAngular, friendlyName: 'Angular' },
	vite: { icon: SiVite, friendlyName: 'Vite' },
	mysql: { icon: SiMysql, friendlyName: 'MySQL' },
	dotnet: { icon: SiDotnet, friendlyName: '.NET' },
	svelte: { icon: SiSvelte, friendlyName: 'Svelte' },
	vue: { icon: SiVuedotjs, friendlyName: 'Vue.js' },
	next: { icon: SiNextdotjs, friendlyName: 'Next.js' },
	typescript: { icon: SiTypescript, friendlyName: 'TypeScript' },
	javascript: { icon: SiJavascript, friendlyName: 'JavaScript' },
	html: { icon: SiHtml5, friendlyName: 'HTML' },
	css: { icon: SiCss3, friendlyName: 'CSS' },
	rust: { icon: SiRust, friendlyName: 'Rust' },
	python: { icon: SiPython, friendlyName: 'Python' },
	csharp: { icon: SiCsharp, friendlyName: 'C#' },
	cpp: { icon: SiCplusplus, friendlyName: 'C++' },
};

const connectionsIconMap: ConnectionsIconMap = {
	github: SiGithub,
	x: SiX,
	linkedin: SiLinkedin,
	facebook: SiFacebook,
	instagram: SiInstagram,
};

// Create a skillsIconMap dynamically
const skillsIconMap: SkillsMap = Object.keys(skillsData).reduce((map, key) => {
	map[key] = skillsData[key];
	return map;
}, {} as SkillsMap);

export { connectionsIconMap, skillsIconMap };
