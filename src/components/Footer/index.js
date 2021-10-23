import React from 'react';
import {CFooter, CLink} from '@coreui/react';


const Footer = () => {
    return(
        <CFooter>
        <div className="image" name="Links">
                <a href="https://github.com/kait-weishaar"><img src="https://img.icons8.com/ios-filled/50/000000/github.png"/></a>
                <a href="www.linkedin.com/in/kaitlin-weishaar-880995178"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"/></a>
                <a href="https://www.instagram.com/kaitweishaar/"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v2.png"/></a>
        </div>
        <div>
            <CLink href="https://coreui.io">CoreUI</CLink>
            <span>&copy; 2021 creativeLabs.</span>
        </div>
        <div>
            <span>Powered by </span>
            <CLink href="https://coreui.io">CoreUI</CLink>
        </div>
    </CFooter>
    );
}

export default Footer;