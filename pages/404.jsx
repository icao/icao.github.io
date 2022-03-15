import Image from 'next/image'
import background from '@public/images/bg3.jpg'

export default function Custom404() {
  const textContainer = {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }

  const text = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700',
    fontSize: 'clamp(40px, 10vw, 200px)',
    textAlign: 'center',
    margin: '0',
    color: '#e7eeff',
  }

  const subText = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700',
    fontSize: 'clamp(20px, 6vw, 60px)',
    textAlign: 'center',
    margin: '0',
    color: '#e7eeff',
  }

  return (
    <>
      <Image
        alt="background"
        src={background}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
      />
      <div style={textContainer}>
        <h1 style={text}>404</h1>
        <h2 style={subText}>Page Not Found</h2>
      </div>
    </>
  )
}
