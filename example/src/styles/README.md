# UIGuide

_UIMaterial for standard build in react-native-framework_



#
## Starting 🚀

These instructions will make it easier for you to build blocks as styles, in addition to provide standardization to the many screens that will be worked on, it will help keep your project clean and comfortable.

## Usage

| Module | Descripción | Parameters
| --- | --- | --- |
| Styles | the correct way to create a folder for custom styles, is when a custom construction of the screen is needed, that does not interact directly with the components unless required , you will save it in the folder 'containers', you must use 'Dash case' | example-styles  |
| Default Styles | To be able to style a component you will have to be aware if necessary, since the UIguide provides general styles. If you want to alter the style of these in a personalized way, keep in mind not to alter in a particular way, but to create a standard for that style in the default folder |   component-style
| Screens | The screens should keep unique styles, so that you do not get confused when working in a group, repeating styles or screens where the styles conflict. | styles/containers

# System
_UIGuide uses some subsistems that provides a logic in order to use it_

## Starting 🚀

'WithStyles'is a function that manages a system of global styles in the theme file, this is responsible for providing sizes, typography, and colors, it is important to keep these when creating styles for example

````

  export const defaultStoreLinkStyle = withStyles(({ palette, typography spacing }) => ({
    primaryLink: {
      container: {
        borderRadius: spacing[4],
        backgroundColor: palette.primary[palette.type],
      },
    },
    secondaryLink: {
      container: {
        borderRadius: spacing[4],
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: palette.secondary[palette.type],
      },
    },
  }));

````

## Usage

| Function | Description | Parameters
| --- | --- | --- |
| palette | handles a globalized and standardized color scheme with which the ui system can be handled comfortably |  palette."color pattern"[palette.type]  |
| typography | keeps guide of the sizes, font type, font weight and font family, to keep the font styles together in the framework | ...typography."theme",
| spacing | manages the distance and sizes between elements in a uniform way in the framework, this tool will be used to standardize the size in components | spacing["number"]

