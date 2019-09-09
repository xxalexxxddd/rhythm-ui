/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiHeaderMobile.css'

export class RuiHeaderMobile extends LitElement {

	/**
	 *
	 * The styles for desktop header
	 * @remarks
	 * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	 */
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiHeaderMobile')];
	}

	/* #endregion */

	/* #region Methods */

	/**
	 * Render method
	 * @slot This is a slot test
	 */
	public render(): TemplateResult {
		return html`
			<slot></slot>
		`;
	}

	/* #endregion */
}

export default RuiHeaderMobile;