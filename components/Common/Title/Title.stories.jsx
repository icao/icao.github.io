import Title from './Title'

export default {
  title: 'Components/Common/Title',
  component: Title,
}

const Template = (args) => <Title {...args} />

export const Default = () => <Title text="I am a title" />

export const TitleWithEmphasisTextBefore = Template.bind()

TitleWithEmphasisTextBefore.args = {
  text: 'I am a other title',
  textEmphasis: 'im before',
  positionEmphasisBefore: true,
}

export const TitleWithEmphasisTextAfter = Template.bind()

TitleWithEmphasisTextAfter.args = {
  text: 'I am a other title',
  textEmphasis: 'im after',
  positionEmphasisAfter: true,
}
