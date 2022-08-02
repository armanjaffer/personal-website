import { useEffect, useState } from "react";


const container_styles = {
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center center",
	backgroundAttachment: "fixed",
	fontFamily: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace",

}

const content_styles = {
	lineHeight: 2,
	padding: "60px"
}

const pictures = [
	"url(https://drive.google.com/uc?export=view&id=17p5hqlBzGhpqMbtK_zgwWS-5oqbPAd9T)",
	"url(https://drive.google.com/uc?export=view&id=1vdHNDlgmV86z-_VRLjv0zKnjA25EurGc)"
]

const fontColors = [
	"white",
	"blue"
]

const footerDiv = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textDecoration: 'underline',
	fontWeight: 'bold',
	color: 'blue'
}

export default function AboutMe() {
	const [click, setClick] = useState(0);

	const handleClick = event => {
		click = (click + 1) % pictures.length;
		setClick(click);
	}

	return (
		<div onClick={handleClick} style={container_styles} >
			<div style={{ backgroundImage: pictures[click], color: fontColors[click], backgroundAttachment: "fixed" }}>
				<div style={content_styles}>
					<h1>a lil about me...</h1>
					<h2>TLDR</h2>
					<p>
						I'm just another guy that's trying to make his mark on the world. Not quite sure what that looks like but I dabble in building tech, politics, and everything in between. Right now I'm excited about founding a startup that can leverage technology in a novel and useful way to help humanity move forward.
					</p>
					<h2>Some of my experiences...</h2>
					<li>Product Manager at the&nbsp;
						<a href={"https://chanzuckerberg.com/"} style={{ color: fontColors[click + 1 % 2], textDecoration: "underline" }}>Chan Zuckerberg Initiative</a>
						&nbsp;(2019-2022)
					</li>
					<li>Tech Policy Fellow at the&nbsp;
						<a href={"https://www.aspentechpolicyhub.org/team/arman-jaffer/"} style={{ color: fontColors[click + 1 % 2], textDecoration: "underline" }}>Aspen Institute</a>
						&nbsp;(2021)
					</li>
					<li>Software Engineer at the&nbsp;
						<a href={"https://chanzuckerberg.com/"} style={{ color: fontColors[click + 1 % 2], textDecoration: "underline" }}>Chan Zuckerberg Initiative</a>
						&nbsp;(2017-2018)
					</li>
					<li>Technology Policy at The&nbsp;
						<a href={"https://obamawhitehouse.archives.gov/administration/eop/ostp/divisions/cto#:~:text=The%20mission%20of%20the%20Office,the%20future%20of%20our%20Nation."} style={{ color: fontColors[click + 1 % 2], textDecoration: "underline" }}>Office of the CTO at the White House</a>
						&nbsp;(2017)
					</li>
					<li>Software Engineering Intern at&nbsp;
						<a href={"https://amp.dev/"} style={{ color: fontColors[click + 1 % 2], textDecoration: "underline" }}>Google</a>
						&nbsp;(2016)
					</li>
					<h2>Personally, I believe...</h2>
					<li> <b>The personal is political.</b> Saying stuff like "don't get political" is BS because politics surrounds us. There's some that acknowledge our realities (even if it's uncomfortable) and some that don't.</li>
					<li> <b>Technologists need to do better.</b> Too many people in tech are averse to thinking critically about their work and the capitalist systems that have harnessed 'mainstream innovation' into a 9-5 job in big tech. They have nice managers and coworkers and avoid thinking about the cognitive dissonance between their purported values and their work.
					</li>
					<li> <b> People should embrace chaos.</b> I find life more enjoyable when everything isn't nicely tied up. It can be messy, but I try to lean into things that might make for a good story.
					</li>
					<div style={footerDiv}>
						<a href={"/"}><h2>Back</h2></a>
					</div>
				</div>
			</div>
		</div>
	);
}