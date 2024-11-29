import { app } from "../script.js";


export const buildFooter = () => {
    if (!document.getElementById('footer')) {
        const footerElement = document.createElement('footer');
        footerElement.id = 'footer';
        app.appendChild(footerElement);
    }
    

    const footer = document.getElementById('footer');
    footer.innerHTML = '';

    const footerInfoDiv = document.createElement('div');
    footerInfoDiv.id = 'footerInfoDiv';
    footer.appendChild(footerInfoDiv);

    const footerLogo = document.createElement('img');
    footerLogo.src = 'assets/images/logo.svg';
    footerLogo.alt = 'logo';
    footerLogo.id = 'footerLogo';
    footerInfoDiv.appendChild(footerLogo);

    const footerAddress = document.createElement('address');
    footerAddress.textContent = 'Øster Uttrup Vej 1';
    footerInfoDiv.appendChild(footerAddress);

    const footerCity = document.createElement('p');
    footerCity.textContent = '9000 Aalborg';
    footerInfoDiv.appendChild(footerCity);

    const footerCVR = document.createElement('p');
    footerCVR.textContent = 'CVR: 12345678';
    footerInfoDiv.appendChild(footerCVR);

    const footerEmail = document.createElement('p');
    footerEmail.id = 'footerEmail';
    footerEmail.textContent = 'EMAIL: info@wallywood.dk';
    footerInfoDiv.appendChild(footerEmail);

    const footerPhone = document.createElement('p');
    footerPhone.textContent = 'MOBIL: +45 9812 3456';
    footerInfoDiv.appendChild(footerPhone);

    const footerSocialDiv = document.createElement('div');
    footerSocialDiv.id = 'footerSocialDiv';
    footer.appendChild(footerSocialDiv);

    const footerSocials = document.createElement('img');
    footerSocials.src = 'assets/images/socials.svg';
    footerSocials.alt = 'socials';
    footerSocials.id = 'footerSocials';
    footerSocialDiv.appendChild(footerSocials);

    // const footerPinterest = document.createElement('img');
    // footerPinterest.src = 'assets/images/pinterest.svg';
    // footerPinterest.alt = 'pinterest';
    // footerPinterest.id = 'footerPinterest';
    // footerSocialDiv.appendChild(footerPinterest);

    // const footerInstagram = document.createElement('img');
    // footerInstagram.src = 'assets/images/instagram.svg';
    // footerInstagram.alt = 'instagram';
    // footerInstagram.id = 'footerInstagram';
    // footerSocialDiv.appendChild(footerInstagram);

    // const footerFacebook = document.createElement('img');  
    // footerFacebook.src = 'assets/images/facebook.svg';
    // footerFacebook.alt = 'facebook';
    // footerFacebook.id = 'footerFacebook';
    // footerSocialDiv.appendChild(footerFacebook);

    // const footerTwitter = document.createElement('img');
    // footerTwitter.src = 'assets/images/twitter.svg';
    // footerTwitter.alt = 'twitter';
    // footerTwitter.id = 'footerTwitter';
    // footerSocialDiv.appendChild(footerTwitter);

}
