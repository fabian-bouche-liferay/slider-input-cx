import React from 'react';
import ReactDOM from 'react-dom';
import LiferaySliderInput from './LiferaySliderInput';

class LiferaySliderInputWebComponent extends HTMLElement {
    connectedCallback() {
        if (!this.querySelector('.react-root')) {
            const reactRoot = document.createElement('div');
            reactRoot.className = 'react-root';
            this.appendChild(reactRoot);
        }

        ReactDOM.render(<LiferaySliderInput 
            name={this.getAttribute("name")}
            value={this.getAttribute("value")}
            fragmentEntryLinkNamespace={this.getAttribute("fragment-entry-link-namespace")}
            step={this.getAttribute("step")}
            min={this.getAttribute("min")}
            max={this.getAttribute("max")}
            unit={this.getAttribute("unit")}
            />, this.querySelector('.react-root'));
    }

    disconnectedCallback() {
        ReactDOM.unmountComponentAtNode(this.querySelector('.react-root'));
    }
}

const LIFERAY_SLIDER_INPUT_ELEMENT_ID = 'liferay-slider-input';

if (!customElements.get(LIFERAY_SLIDER_INPUT_ELEMENT_ID)) {
    customElements.define(LIFERAY_SLIDER_INPUT_ELEMENT_ID, LiferaySliderInputWebComponent);
}