
const linkStyling = {color: 'blue', textDecoration: 'underline'}

const divStyling = {
    padding: '30px'
}
export default function Contact() {
    return (
        <div style={divStyling} >
            <div>
                <h2>Contact me</h2>
                <a style={linkStyling} href={'mailto:armanjaffer@gmail.com'}>Email: armanjaffer [at] gmail.com</a><br/>
            </div>
            <div>
                <h2>Socials</h2>
                <a style={linkStyling} href={'https://twitter.com/grumpy_arman'}>Twitter</a><br/>
                <a style={linkStyling} href={'https://www.linkedin.com/in/armanjaffer/'}>Linkedin</a><br/>
                <a style={linkStyling} href={'https://www.facebook.com/arman.jaffer.16/'}>Facebook</a><br/>
            </div>
            <div>
            <h2>Schedule time with me</h2>
                <a style={linkStyling} href={'https://calendly.com/armanjaffer/30min'}>Calendly</a><br/>
            </div>
        </div>
    )
}