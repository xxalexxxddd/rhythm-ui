---
package: "@rhythm-ui/accordion"
title: "Accordion"
category: "elements"
---

# Accordion

The purpose of the accordion component is to control `accordion-item` components. Any number of expand-collapse components may be nested inside an accordion component. This component behaves in two different ways according to the `behaviour` attribute. The value of this attribute is either `single` or `multiple`, where `multiple` is the default. A value of `single` indicates that only one expand-collapse component can be expanded at once. A value of `multiple` indicates that there are no restrictions when it comes to the number of expanded expanded-collapse components that can be expanded.

An accordion component may optionally have a heading and a button that expands or collapses each expand-collapse component nested. Please note that it only makes sense to display the aforementioned button when the value of the behaviour attribute is `multiple`.

## Install
<pre> "@rhythm-ui/accordion" </pre>

## Accessibility
This component adheres to section [3.1 Accordion (Sections With Show/Hide Functionality)](https://www.w3.org/TR/wai-aria-practices/#accordion) from the W3C Guidelines. 

The `accordion` component in combination with `accordion-item` support the keyboard behaviour as specified in the W3C guideline. While one of the the accordion items is in focus the `keydown` event listener on the component will prevent the default key behaviour of the home, end, up, and down keys and substitute it with the behaviour as listed in the spec.
Supported keyboard interactions are:
- <kbd>Tab</kbd>, <kbd>Shift</kbd> + <kbd>Tab</kbd>, <kbd>Up</kbd>, and <kbd>Down</kbd> to navigate between adjacent accordion items
- <kbd>Home</kbd> to navigate to the first accordion item
- <kbd>End</kbd> to navigate to the last accordion item
- <kbd>Space</kbd> and <kbd>Enter</kbd> to open or close an accordion item

As a best practice it is advised to provide a heading for the accordion group and provide the correct aria-level to the `accordion-item` using the `level` attribute based on the content hierarchy of your website. By default this is set to 3, based on the assumption that there will be a section heading, however if this is not the case this should be overwritten.

For more details on the `accordion-item` please review the `expand-collapse` component as this is a wrapper for this component

## Example

### Example of an accordion with a value of `single` for the behaviour attribute.

```html preview
<rui-accordion behaviour="single">
    <rui-accordion-item level="2" open>
        <span slot="summary-content">
            Expander summary
            <svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" slot="icon" class="icon">
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
                        <path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
                    </g>
                </g>
            </svg>
        </span>
        <p slot="details-content">Expanded content</p>
    </rui-accordion-item>
    <rui-accordion-item level="2">
        <span slot="summary-content">
            Expander summary
            <svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" slot="icon" class="icon">
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
                        <path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
                    </g>
                </g>
            </svg>
        </span>
        <p slot="details-content">Expanded content</p>
    </rui-accordion-item>
    <rui-accordion-item level="2">
        <span slot="summary-content">
            Expander summary
            <svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" slot="icon" class="icon">
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
                        <path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
                    </g>
                </g>
            </svg>
        </span>
        <p slot="details-content">Expanded content</p>
    </rui-accordion-item>
    <rui-accordion-item level="2">
        <span slot="summary-content">
            Expander summary
            <svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" slot="icon" class="icon">
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
                        <path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
                    </g>
                </g>
            </svg>
        </span>
        <p slot="details-content">Expanded content</p>
    </rui-accordion-item>
    <rui-accordion-item>
        <span slot="summary-content">
            Expander summary
            <svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" slot="icon" class="icon">
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
                        <path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
                    </g>
                </g>
            </svg>
        </span>
        <p slot="details-content">Expanded content</p>
    </rui-accordion-item>
</rui-accordion> 
```

### Example of an accordion with a value of `multiple` for the behaviour attribute.

Please note that there are two slots allocated for a button. The `button-collapse` slot is used by a button that collapses expand-collapse components. The `button-expand` slot is used by a button that expands expand-collapse components.

```html preview
<rui-accordion behaviour="multiple">
    <h2 slot="heading">
        Accordion heading
    </h2>
    <rui-button behaviour="button" className="button" slot="button-toggle">
		Expand/Collapse all
		<svg width="8px" height="5px" viewBox="0 0 8 5" slot="icon" className="icon">
			<g stroke="none" stroke-width="1" fill-rule="evenodd">
				<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
					<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
				</g>
			</g>
		</svg>
	</rui-button>
    <rui-accordion-item class="accordion__item">
        <span slot="summary-content">
            Expander summary
            <svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" slot="icon" class="icon">
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
                        <path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
                    </g>
                </g>
            </svg>
        </span>
        <p slot="details-content">Expanded content</p>
    </rui-accordion-item>
    <rui-accordion-item class="accordion__item">
        <span slot="summary-content">
            Expander summary
            <svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" slot="icon" class="icon">
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
                        <path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
                    </g>
                </g>
            </svg>
        </span>
        <p slot="details-content">Expanded content</p>
    </rui-accordion-item>
    <rui-accordion-item class="accordion__item">
        <span slot="summary-content">
            Expander summary
            <svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" slot="icon" class="icon">
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
                        <path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
                    </g>
                </g>
            </svg>
        </span>
        <p slot="details-content">Expanded content</p>
    </rui-accordion-item>
</rui-accordion> 
```

## Events

## Attributes

## Styling variables
