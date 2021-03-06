const fs = require('fs'); // eslint-disable-line
const PATH = 'components/{{pascalCase name}}';
const REACT_PATH = 'adapters/react/{{pascalCase name}}React';
const VUE_PATH =  'adapters/vue/{{pascalCase name}}Vue';
const PLOP_PATH = 'plopTemplates/Component';
const PLOP_REACT = 'plopTemplates/reactAdapters';
const PLOP_VUE = 'plopTemplates/vueAdapters';

const reactActions = [
	{
		type: 'add',
		path: `${REACT_PATH}/src/{{pascalCase name}}.tsx`,
		templateFile: `${PLOP_REACT}/src/Component.tsx.hbs`
	},
	{
		type: 'add',
		path: `${REACT_PATH}/src/I{{pascalCase name}}.tsx`,
		templateFile: `${PLOP_REACT}/src/IComponent.tsx.hbs`
	},
	{
		type: 'add',
		path: `${REACT_PATH}/src/index.tsx`,
		templateFile: `${PLOP_REACT}/src/index.tsx.hbs`
	},
	{
		type: 'add',
		path: `${REACT_PATH}/.babelrc`,
		templateFile: `${PLOP_REACT}/.babelrc.hbs`
	},
	{
		type: 'add',
		path: `${REACT_PATH}/package.json`,
		templateFile: `${PLOP_REACT}/package.json.hbs`
	},
	{
		type: 'add',
		path: `${REACT_PATH}/{{pascalCase name}}.stories.tsx`,
		templateFile: `${PLOP_REACT}/index.stories.tsx.hbs`
	},
	{
		type: 'add',
		path: `${REACT_PATH}/README.md`,
		templateFile: `${PLOP_REACT}/README.md.hbs`
	},
	{
		type: 'add',
		path: `${REACT_PATH}/tsconfig.json`,
		templateFile: `${PLOP_REACT}/tsconfig.json.hbs`
	},
	// import react adaptor in gatsby site so markdown files will display
	{
		type: 'modify',
		path: 'www/src/templates/Component/Component.tsx',
		pattern: /(@@ GENERATOR IMPORT COMPONENT)/g,
		template: "$1\nimport '@rhythm-ui/{{packageName name}}-react';",
	},
	/**
	 * Adds new dependency to gatsby site package.json
	 * ASSUMPTIONS for this to work:
	 * 1. at least one other @rhythm-ui/some-react-component exists in file
	 * 2. the newly added package is not the last package listed (as it adds a comma
	 * 	  and this will not be valid json if added at end)
	 */
	{
		type: 'modify',
		path: 'www/package.json',
		pattern: /("@rhythm-ui\/[a-zA-Z-]*": "\^[0-9]*.[0-9]*.[0-9]*",)/,
		template: "$1\n\"@rhythm-ui/{{packageName name}}-react\": \"^0.1.0\",",
	}
];

const vueActions = [
	{
		type: 'add',
		path: `${VUE_PATH}/README.md`,
		templateFile: `${PLOP_VUE}/readme.md.hbs`
  },
  {
		type: 'add',
		path: `${VUE_PATH}/src/{{pascalCase name}}.vue`,
		templateFile: `${PLOP_VUE}/src/Component.vue.hbs`
  },
  {
		type: 'add',
		path: `${VUE_PATH}/src/index.ts`,
		templateFile: `${PLOP_VUE}/src/index.ts.hbs`
  },
  {
		type: 'add',
		path: `${VUE_PATH}/.babelrc`,
		templateFile: `${PLOP_VUE}/.babelrc.hbs`
  },
  {
		type: 'add',
		path: `${VUE_PATH}/package.json`,
		templateFile: `${PLOP_VUE}/package.json.hbs`
  },
  {
		type: 'add',
		path: `${VUE_PATH}/{{pascalCase name}}.stories.tsx`,
		templateFile: `${PLOP_VUE}/index.stories.tsx.hbs`
  },
  {
		type: 'add',
		path: `${VUE_PATH}/tsconfig.json`,
		templateFile: `${PLOP_VUE}/tsconfig.json.hbs`
	},
];

const isNotEmpty = name => {
	return ( value ) => {
		return value.length === 0 ? `${name} is required` : true;
	}
};

const checkFile = file => {
	try {
		fs.accessSync(file, fs.constants.R_OK);
		return true;
	} catch (err) {
		return false;
	}
};

const checkComponent = () => {
	const choices = [];
	fs
		.readdirSync('./components')
		.forEach(file => {
			if (!checkFile(`adapters/react/${file}React`)) {
				choices.push(file)
			}
		});
	return choices
};

const ensureRui = text => `rui ${text.replace(/Rui/gi, "")}`;

// converts 'rui component name' and for a package we just need 'component-name'
const packageName = text => text.replace(/rui/gi, "").trim().split(' ').join('-').toLowerCase();

module.exports = plop => {
	plop.setHelper('packageName', packageName);
    plop.setGenerator('component', {
        description: 'create a new component',

        //prompts are user inputs that provided as arguments to the templates
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your component name?',
                // validate the field is not empty
                validate: isNotEmpty( 'name'),
								//format the component to have Rui
								filter: ensureRui
            },
            {
                type: 'list',
                name: 'adapter',
                message: 'Do you also need an adapter?',
                choices: ['Not yet', 'React', 'Vue'],
            },
        ],
        actions: data => {
            let actions = [];
            actions = actions.concat([
                {
                    type: 'add',
                    path: `${PATH}/tsconfig.json`,
                    templateFile: `${PLOP_PATH}/tsconfig.json.hbs`
                },
                {
                    type: 'add',
                    path: `${PATH}/.babelrc`,
                    templateFile: `${PLOP_PATH}/.babelrc.hbs`
                },
                {
                    type: 'add',
                    path: `${PATH}/package.json`,
                    templateFile: `${PLOP_PATH}/package.json.hbs`
                },
                {
                    type: 'add',
                    path: `${PATH}/readme.md`,
                    templateFile: `${PLOP_PATH}/readme.md.hbs`
                },
                //src files - component, css and index
                {
                    type: 'add',
                    path: `${PATH}/src/{{pascalCase name}}.ts`,
                    templateFile: `${PLOP_PATH}/src/Component.ts.hbs`
                },
                {
                    type: 'add',
                    path: `${PATH}/src/{{pascalCase name}}.css.ts`,
                    templateFile: `${PLOP_PATH}/src/Component.css.ts.hbs`
                },
                {
                    type: 'add',
                    path: `${PATH}/src/index.ts`,
                    templateFile: `${PLOP_PATH}/src/index.ts.hbs`
                },
				{
					type: 'add',
					path: `${PATH}/tests/{{pascalCase name}}.test.ts`,
					templateFile: `${PLOP_PATH}/tests/Component.test.ts.hbs`
				},
				{
					type: 'add',
					path: `${PATH}/tests/tsconfig.json`,
					templateFile: `${PLOP_PATH}/tests/tsconfig.json.hbs`
				}
            ]);
            if (data.adapter === 'React' || data.adapter === 'Both') {
                actions = actions.concat(reactActions)
            }
            if (data.adapter === 'Vue' || data.adapter === 'Both') {
                actions = actions.concat(vueActions)
            }
            return actions
        },
    });

    plop.setGenerator('adapter', {
        description: 'Create an adapter that wraps the html component',

        //prompts are user inputs that provided as arguments to the templates
        prompts: [
			{
				type: 'list',
				name: 'name',
				message: 'Please chose your component',
				choices: () => {
					return checkComponent()
				},
			},
            {
                type: 'list',
                name: 'adapter',
                message: 'Please chose an adapter',
								choices: ['React', 'Vue'],
            },
        ],

        actions: data => {
            let actions = [];
            if (data.adapter === 'React' || data.adapter === 'Both') {
                actions = actions.concat(reactActions)
            }
            if (data.adapter === 'Vue' || data.adapter === 'Both') {
                actions = actions.concat(vueActions)
            }
            return actions
        },
    })
};




