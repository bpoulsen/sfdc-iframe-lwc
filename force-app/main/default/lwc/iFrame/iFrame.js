import {LightningElement, api} from 'lwc';

export default class X7SIframe extends LightningElement {

    @api url;
    loading = false;

    /**
     * show loading spinner while iFrame content loads
     */
    connectedCallback() {
        this.loading = true;
    }

    /**
     * create iFrame and add to DOM
     */
    renderedCallback() {

        const spinnerContainer = this.template.querySelector('.slds-spinner_container');
        const containerElem = this.template.querySelector('.iframe-container');
        const iframe = document.createElement('iframe');

        // onload() before setting 'src'
        iframe.onload = function() {
            console.log('iframe is loaded');
            spinnerContainer.classList.add("slds-hide"); // hide spinner
        };
        iframe.src = this.url; // iFrame src; add this URL to CSP
        iframe.id = 'iframe-1';
        iframe.width = '100%';
        iframe.setAttribute('frameborder', '0');

        containerElem.appendChild(iframe); // add iFrame to DOM
    }

}