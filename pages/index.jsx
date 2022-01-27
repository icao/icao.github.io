import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from '@components/Common/Header/Header'
import Home from '@components/Layout/Home/Home'
import Title from '@components/Common/Title/Title'
import Projects from '@components/Layout/Projects/Projects'
import Footer from '@components/Layout/Footer/Footer'
import Hero from '@components/Layout/Hero/Hero'
import Legend from '@components/Common/Legend/Legend'
import Icao from '@components/Layout/Icao/Icao'
import Skills from '@components/Layout/Skills/Skills'

export default function Index() {
  const refFooter = useRef(null)
  const [isFooterIntersected, setIsFooterIntersected] = useState(false)

  function callback(entries) {
    if (entries[0].isIntersecting) {
      setIsFooterIntersected(true)
    } else {
      setIsFooterIntersected(false)
    }
  }
  const options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.9,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)

    if (refFooter.current) {
      observer.observe(refFooter.current)
    }

    return () => {
      if (refFooter.current) {
        observer.unobserve(refFooter.current)
      }
    }
  }, [refFooter, options])

  return (
    <div>
      <Head>
        <title>ICAO | César aparicio | Front End Developer</title>
        <meta
          name="description"
          content="I am a Front End Developer and Design Lover"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#141414" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header transparent={isFooterIntersected} />

      <main>
        <Home />

        <div id="icao">
          <div className="container ">
            <section className="section">
              <div className="section__title">
                <Title
                  text="Sobre mi ›"
                  textEmphasis="ICAO"
                  positionEmphasisAfter
                />
              </div>

              <Icao />
            </section>
          </div>
        </div>

        {/* <Hero>
          <div className="container">
            <Legend text="Cuando yo cambio, el mundo cambia" center />
          </div>
        </Hero> */}

        <div id="skills">
          <div className="container ">
            <section className="section">
              <div className="section__title">
                <Title
                  text="Habilidades"
                  textEmphasis="Mis"
                  positionEmphasisBefore
                />
              </div>
              <Skills />
            </section>
          </div>
        </div>
        <div id="resume">
          <div className="container ">
            <section className="section">
              <Title
                text="Experiencia"
                textEmphasis="Mi"
                positionEmphasisBefore
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                obcaecati facere voluptate, dolore aut necessitatibus quo
                quaerat blanditiis quam aliquid, nemo officiis accusamus fuga.
                placeat sunt praesentium odio obcaecati animi natus repellendus
                atque veniam non molestiae, nemo ipsa! Eaque eligendi nostrum
                dolore dolor, quidem, natus, voluptatibus fugit earum
                dignissimos numquam expedita similique voluptas vel enim aliquid
                voluptates magnam quam. Perspiciatis sed saepe dignissimos eos
                quasi voluptates asperiores nam sit, ipsam voluptatibus id cum
                doloremque iusto porro accusamus? Eveniet, neque sed qui
                praesentium a cum illum iure deleniti perspiciatis dolore,
                officiis perferendis quis distinctio exercitationem delectus
                impedit doloremque. Ducimus quas eveniet eius atque accusamus
                tempore amet recusandae nihil? Quasi, hic perspiciatis.
                Adipisci, voluptatibus odio accusamus praesentium aliquid,
                nostrum ipsa iusto fugiat dolorum architecto a totam ratione,
                exercitationem enim eius animi? Laboriosam reprehenderit culpa
                quidem, aliquam nam iure, cum eaque nesciunt adipisci ab
                deleniti nobis sed, enim tenetur? Quo ut, sunt distinctio quia
                repellendus ex quis pariatur iste. Maiores id omnis voluptatem
                fugiat voluptate ex dolorem aliquid amet doloremque iusto
                suscipit harum culpa provident quos beatae quasi exercitationem
                a necessitatibus labore, quisquam quibusdam commodi quae. Aut
                aliquam, perferendis impedit modi corrupti perspiciatis
                praesentium eligendi, odit eius suscipit magnam, mollitia
                ratione adipisci similique repellendus maxime labore deleniti.
                Accusamus, error? Itaque mollitia, eius fugit officiis
                distinctio nobis. Illum doloremque labore, ipsam libero
                doloribus itaque ipsum sunt, quas ullam quia eaque, velit nemo.
                Provident alias commodi deserunt asperiores magni, consequatur
                possimus neque delectus odit accusantium facilis eos culpa
                dolor, ab porro quia quos rerum officiis est quod consequuntur
                in sunt nostrum! Quis, voluptatibus optio? Amet et nihil
                perspiciatis asperiores non reiciendis ea commodi distinctio
                nesciunt rem officia hic, repudiandae inventore sed
                exercitationem, harum voluptates consequuntur quod dolorem ab.
                Quod earum molestiae excepturi deleniti dignissimos animi alias,
                magnam in at provident nemo necessitatibus voluptas repudiandae
                quisquam corrupti officia architecto? Eum dignissimos, sint
                eveniet, hic temporibus error, minima optio mollitia officiis
                voluptas vero quibusdam architecto repellendus consequuntur
                possimus quidem ipsam adipisci. Nulla fuga neque illum quaerat
                quidem ad blanditiis quod corporis, similique magni, quasi
                repellat dicta ut, fugiat excepturi voluptates autem dolorem
                ipsam pariatur dignissimos maiores! Incidunt amet inventore
                saepe magni eius tempora libero unde labore consequatur, laborum
                natus ducimus non nulla sed animi temporibus eligendi tempore
                reprehenderit minus iste iusto odit voluptatibus! Voluptate
                illo, inventore dolores voluptas libero nulla soluta. Ipsum quo
                quas qui, totam atque, commodi nisi, iure accusamus magni nulla
                voluptas minima optio est. Numquam assumenda mollitia
                consectetur ipsam accusamus voluptatum totam nobis aperiam
                dignissimos pariatur vel velit sapiente aut, reprehenderit
                deleniti ab quo molestias qui a expedita maiores similique,
                voluptatem impedit. Quae quia incidunt dolorem reiciendis quo
                quas officiis illo quis maiores, aperiam distinctio, itaque ipsa
                earum libero vel doloribus inventore possimus! Quaerat
                consequuntur dolores repudiandae sit iure esse voluptatem enim
                architecto! Sint laudantium repellat, ullam, quidem commodi
                maiores adipisci velit iusto expedita deleniti necessitatibus
                aut ab repudiandae maxime quae dolore perspiciatis excepturi
                autem reprehenderit unde? Quidem ab officiis suscipit temporibus
                fugit doloremque commodi neque vel, nihil impedit quas magnam?
                Consequuntur architecto eaque tempora aperiam vel quibusdam
                similique ipsa eveniet molestiae. Eaque sint rem doloribus
                assumenda quas, suscipit quasi, eius recusandae rerum error
                consequuntur hic itaque nisi, laboriosam similique soluta
                adipisci numquam pariatur. Consequuntur nam esse doloribus,
                molestiae amet, mollitia, tempora iste velit veniam culpa
                pariatur quasi explicabo provident omnis! Consectetur explicabo
                sed animi at molestias pariatur cumque eos, voluptas nostrum
                dignissimos doloribus, ipsam natus omnis vel quasi aut porro ad?
                Voluptates fugiat placeat exercitationem corporis repudiandae
                ratione autem iusto rem. Repellat sequi quo error nobis nihil
                laboriosam, nostrum suscipit quos assumenda sunt eveniet
                provident, eum repellendus non dolore velit? Eveniet minima
                dolorem minus possimus sunt beatae eos non atque libero dolore
                praesentium animi eligendi accusantium velit dicta quis
                quibusdam voluptatem vero illo quam culpa, illum pariatur
                asperiores deserunt! Quis quae, neque fugit culpa repellendus
                doloribus, blanditiis vero ea, sapiente laboriosam corrupti
                magnam quia maxime! Quam et facilis libero dolor nobis atque
                quas cumque molestias ullam hic, ex quisquam iusto quo suscipit
                doloremque nisi est nulla at. Quam distinctio iste iure
                corporis, vero neque, nisi amet natus ut beatae voluptatem
                mollitia rerum cumque itaque, ipsa sequi numquam nostrum
                reiciendis quis. Animi est facilis quasi earum soluta distinctio
                a reiciendis mollitia, aut itaque facere doloribus recusandae
                doloremque! Pariatur ad impedit nemo accusantium optio excepturi
                voluptatum asperiores placeat quibusdam vel! Sunt, voluptatem?
                Saepe architecto quam, quia optio maxime aliquam animi veritatis
                libero ullam, reprehenderit ab ipsa autem in! Ab nisi esse quos
                cumque quisquam rem ex numquam odit. Eveniet vitae possimus
                praesentium ratione voluptatum provident laborum debitis? Quam
                veritatis voluptate minus temporibus nobis numquam sunt
                perferendis ducimus consectetur nam accusamus, beatae tempore
                commodi at sit sequi excepturi. Ut, libero eveniet architecto,
                in porro quis neque doloremque cumque dignissimos, minus atque
                sint illo optio similique! Quod consectetur quas debitis aliquid
                omnis quos commodi fugiat corporis eum nostrum atque est ab,
                corrupti autem molestiae, quia accusantium deleniti ullam
                expedita velit maxime cumque veniam non. Minus laboriosam minima
                labore nobis aut ipsa eius molestiae fugit! Ducimus.
              </p>
            </section>
          </div>
        </div>

        <div id="projects">
          <div className="container ">
            <section className="section">
              <div className="section__title">
                <Title
                  text="Proyectos"
                  textEmphasis="Mis"
                  positionEmphasisBefore
                />
              </div>
              <Projects />
            </section>
          </div>
        </div>
      </main>
      <Hero>
        <div className="container">
          <Legend
            text="Levantate una y otra vez, hasta que los coorderos se conviertan en
          leones."
            author="Robin Hood - Movie 2010"
            right
          />
        </div>
      </Hero>
      <div ref={refFooter}>
        <Footer />
      </div>
      {/* Uncomment this line to debug the intersection observer */}
      {/* <script src="https://unpkg.com/intersection-observer-debugger" /> */}
    </div>
  )
}
