import Card from './Card'

// FIXME: Resuelveme cuando se recuelva el bug, en la version de storybook con next image
// NOTE: Existe un proyecto donde funionaba con una version vieja donde se ve involuvrado el yarn lock
// VER en: C:\Users\icaOS\Desktop\nextjs-example

export default {
  title: 'Components/Common/Card',
  component: Card,
}

export const Default = () => (
  <Card urlExternalImage="/me.jpg" title="im before" isURLExternal />
)

const Template = (args) => <Card {...args} />

export const CardWithExternalURLImage = Template.bind()

CardWithExternalURLImage.args = {
  urlExternalImage:
    'https://cdn.pixabay.com/photo/2022/04/18/02/24/architecture-7139263_960_720.jpg',
  title: 'im before',
  isURLExternal: true,
}

export const CardWithAlternativeDesigne = Template.bind()

CardWithAlternativeDesigne.args = {
  urlExternalImage:
    'https://images.pexels.com/photos/9749273/pexels-photo-9749273.jpeg',
  title: 'im before',
  tag: 'open source',
  designAlternative: true,
  isURLExternal: true,
}
