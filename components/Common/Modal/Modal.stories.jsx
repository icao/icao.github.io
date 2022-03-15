import Modal from './Modal'

export default {
  title: 'Components/Common/Modal',
  component: Modal,
}

export const Default = () => (
  <Modal showModal={() => {}}>
    <div style={{ color: 'white' }}>
      <h2>Soy un modal ajustable a mi padre</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        dignissimos eum culpa quos, temporibus expedita deleniti quidem voluptas
        ea fuga! Eaque ullam laboriosam assumenda ut molestias sapiente animi ea
        debitis architecto minima deleniti pariatur delectus quibusdam non, ab
        adipisci saepe sed accusantium voluptatum officiis modi fugiat. Sit
        voluptatem vel nesciunt eum ab molestias ipsa aspernatur temporibus
        nihil provident cum ea tenetur quisquam nisi tempore dolore sint minus
        nobis blanditiis perspiciatis, quia maiores corrupti impedit. Explicabo
        incidunt tempore, quam tenetur fugiat harum dolore doloremque animi ab
        inventore beatae perferendis unde commodi. Quia laborum corporis earum
        excepturi modi numquam doloribus, ex laboriosam.
      </p>
    </div>
  </Modal>
)
