import Legend from './Legend'

export default {
  title: 'Components/Common/Legend',
  component: Legend,
}

const Template = (args) => <Legend {...args} />

export const Default = () => <Legend text="I'm a legend" />

export const LegendWithAuthor = Template.bind()
LegendWithAuthor.args = {
  text: 'I am a other cool legend with author',
  author: 'Jhon Doe',
}

export const CenterAlignmentLegend = Template.bind()
CenterAlignmentLegend.args = {
  text: 'I am a other cool legend centered',
  author: 'Jhon Doe',
  center: true,
}

export const RightAlignmentLegend = Template.bind()
RightAlignmentLegend.args = {
  text: 'I am a other cool legend to right',
  author: 'Jhon Doe',
  right: true,
}
