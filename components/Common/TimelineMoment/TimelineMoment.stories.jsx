import TimelineMoment from './TimelineMoment'

export default {
  title: 'Components/Common/TimelineMoment',
  component: TimelineMoment,
}

export const Default = () => (
  <TimelineMoment arrowUp>
    <div style={{ color: 'white' }}>
      <h1>Hello world!</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </TimelineMoment>
)

const Template = (args) => (
  <TimelineMoment {...args}>
    <div style={{ color: 'white' }}>
      <h1>Hello world!</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </TimelineMoment>
)

export const TimelineMomentWithArrowUp = Template.bind()

TimelineMomentWithArrowUp.args = {
  arrowUp: true,
}

export const TimelineMomentWithArrowDown = Template.bind()

TimelineMomentWithArrowDown.args = {
  arrowDown: true,
}

export const TimelineMomentWithArrowLeft = Template.bind()

TimelineMomentWithArrowLeft.args = {
  arrowLeft: true,
}

export const TimelineMomentWithArrowRight = Template.bind()

TimelineMomentWithArrowRight.args = {
  arrowRight: true,
}
