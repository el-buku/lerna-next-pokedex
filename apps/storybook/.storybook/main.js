module.exports = {
  stories: [
    "../../../packages/**/src/**/*.stories.mdx",
    "../../../packages/**/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  previewHead: (head) => `
  ${head}
  <link href="https://fonts.googleapis.com/css2?family=VT323:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Press Start 2P:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
  <style>
  h1 {
    font-size: 3rem;
    font-family: "Press Start 2P", sans-serif;
  }

  h2 {
    font-size: 2rem;
    font-family: "VT323", sans-serif;
  }

  h3 {
    font-size: 1.1rem;
    font-family: "VT323", sans-serif;
  }

  body {
    font-family: "VT323", sans-serif;
  }
  </style>

  `,
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  },

  babel: async (options)=>({...options, sourceType:"module", presets:[
    ['react-app', { flow: false, typescript: true }],
    // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
    // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
    require.resolve('@emotion/babel-preset-css-prop'),
  ]})
}
