import Card from './Card'

export default {
  title: 'Components/Common/Card',
  component: Card,
}

export const Default = () => (
  <Card urlImage="/photo04.jpeg" title="I am the long long title" />
)

const Template = (args) => <Card {...args} />

export const CardWithExternalURLImage = Template.bind()

CardWithExternalURLImage.args = {
  urlImage:
    'https://images.pexels.com/photos/9749273/pexels-photo-9749273.jpeg',
  title: 'im before',
}

export const CardWithAlternativeDesigne = Template.bind()

CardWithAlternativeDesigne.args = {
  urlImage:
    'https://images.pexels.com/photos/9749273/pexels-photo-9749273.jpeg',
  title: 'im before',
  tag: 'open source',
  designAlternative: true,
}
