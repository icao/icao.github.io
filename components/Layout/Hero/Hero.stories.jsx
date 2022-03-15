import Hero from './Hero'

export default {
  title: 'Components/Common/Hero',
  component: Hero,
}

export const Default = () => (
  <Hero>
    <div style={{ color: 'white', padding: '5em' }}>
      <h2>Hi Hero!</h2>
      <p>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Cumque, libero vitae! Non minus tempora atque saepe
        dolores deleniti in officiis. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Alias sunt necessitatibus et repudiandae ipsam
        inventore totam autem quod dolorum architecto aperiam asperiores eaque
        repellendus commodi officia adipisci, doloremque esse, enim, modi ad
        exercitationem. Ipsam maiores cupiditate voluptatibus modi illo quaerat
        voluptate nesciunt earum nemo. Consequatur non modi autem tempora quasi.
      </p>
    </div>
  </Hero>
)
