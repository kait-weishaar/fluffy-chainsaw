import React from 'react';

const Footer = () => {
    return(
        <footer className = "flex-row justify-space-around">
            <ul className = "flex-row no-bullets align-center">
                <li className = "mr-35">Find me on <a href = "https://github.com/kait-weishaar" target = "_blank" rel="noreferrer" className = "info-link">GitHub<img src="https://img.icons8.com/ios/80/000000/github.png" alt="github-logo" class="icon"/></a></li>
                <li className = "mr-35">Connect on <a href = "www.linkedin.com/in/kaitlin-weishaar-880995178" target = "_blank" rel = "noreferrer" className = "info-link">LinkedIn<img src="https://img.icons8.com/fluent/80/000000/linkedin-circled.png" alt="linkedin-logo" class="icon"/></a></li>
                <li>Reach out via <a href = "mailto:kweishaar@hawk.iit.edu" target = "_blank" rel="noreferrer" className = "info-link">email</a></li>
            </ul>
        </footer>
    );
}

export default Footer;