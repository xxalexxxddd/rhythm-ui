import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select, optionsKnob} from '@storybook/addon-knobs';
import RuiButton from './src';
import Readme from './README.md';

const typeOptions = {
	Default: 'default',
	Primary: 'primary',
	Secondary: 'secondary',
	Tertiary: 'tertiary',
};
const variantsOptions = {
	Fill: 'fill',
	Outline: 'outline',
	Ghost: 'ghost',
};
const sizeOptions = {
	Small: 'small',
	Medium: 'medium',
	Large: 'large',
};

const optionsObj = {
	display: 'radio',
};

storiesOf('Button', module)
	.addParameters({
		readme: {
			// Show readme at the addons panel
			sidebar: Readme,
		},
	})
	.addDecorator(withKnobs)
	.add('Playground', () => (
		<Fragment>
			<h1> Buttons </h1>
			<p>
				Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way
			</p>
			<p> Play around with these buttons using the variables in the side panel </p>
			<RuiButton
				type={select('Types', typeOptions)}
				variant={select('Variants', variantsOptions)}
				size={optionsKnob('Size', sizeOptions, 'medium', optionsObj)}
			>
				{text('Button Label', 'Default')}
			</RuiButton>
		</Fragment>
	))
	.add('Types', () => (
		<Fragment>
			<RuiButton> Default </RuiButton>
			<RuiButton type="primary">Primary</RuiButton>
			<RuiButton type="secondary">Secondary</RuiButton>
			<RuiButton type="tertiary">Tertiary</RuiButton>
		</Fragment>
	))
	.add('Variants', () => (
		<Fragment>
			<RuiButton variant="fill">Fill (default)</RuiButton>
			<RuiButton variant="outline">Outline</RuiButton>
			<RuiButton variant="ghost">Ghost</RuiButton>
		</Fragment>
	))
	.add('Behaviour', () => (
		<Fragment>
			<RuiButton behaviour="button">Button (default)</RuiButton>
			<RuiButton behaviour="submit">Form Submit</RuiButton>
			<RuiButton behaviour="reset">Form Reset</RuiButton>
			<RuiButton behaviour="anchor">Anchor</RuiButton>
			<RuiButton href="#">Href</RuiButton>
		</Fragment>
	))
	.add('Disabled', () => (
		<Fragment>
			<RuiButton disabled>Disabled</RuiButton>
			<RuiButton variant="outline" disabled>Outline</RuiButton>
			<RuiButton variant="ghost" disabled>Ghost</RuiButton>
		</Fragment>
	))
	.add('Sizes', () => (
		<Fragment>
			<RuiButton size="small">Small</RuiButton>
			<RuiButton size="normal">Normal (default)</RuiButton>
			<RuiButton size="large">Large</RuiButton>
		</Fragment>
	));
