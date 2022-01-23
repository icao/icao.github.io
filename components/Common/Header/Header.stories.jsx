import Header from './Header'

export default {
  title: 'Components/Common/Header',
  component: Header,
}

export const HeaderDefault = () => (
  <div>
    <Header />
    <div id="home" />
    <div id="icao" />
    <div id="skills" />
    <div id="resume" />
    <div id="projects" />
  </div>
)
