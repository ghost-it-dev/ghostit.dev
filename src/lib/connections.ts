import { SiGithub, SiX, SiLinkedin, SiInstagram, SiFacebook, SiCredly } from "@icons-pack/react-simple-icons";

interface ConnectionData {
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	friendlyName: string;
	key: string;
}

const connectionsIconArray: ConnectionData[] = [
	{ key: 'github', friendlyName: 'GitHub', icon: SiGithub },
	{ key: 'x', friendlyName: 'X', icon: SiX },
	{ key: 'linkedin', friendlyName: 'LinkedIn', icon: SiLinkedin },
	{ key: 'instagram', friendlyName: 'Instagram', icon: SiInstagram },
	{ key: 'facebook', friendlyName: 'Facebook', icon: SiFacebook },
	{ key: 'credly', friendlyName: 'Credly', icon: SiCredly }
];

export { connectionsIconArray };