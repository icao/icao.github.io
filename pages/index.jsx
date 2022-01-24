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
            <section className=" section">
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
            <section className=" section">
              <Title
                text="Habilidades"
                textEmphasis="Mis"
                positionEmphasisBefore
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis sequi distinctio aut, error exercitationem voluptatum
                nobis, molestias tempora consectetur hic ipsa quas alias
                provident ducimus amet aperiam non ratione at eum. Vel natus
                voluptatem optio deserunt magnam incidunt et nam laborum error
                id, reiciendis fuga quibusdam nostrum minus asperiores esse
                itaque perspiciatis eveniet saepe sunt numquam laboriosam labore
                hic eum. Dignissimos cum optio recusandae quas reiciendis ipsum
                tempore, aut labore voluptatum dolor consectetur nemo dolorum
                enim sunt aperiam repellat sequi quis odio ad id aliquid impedit
                numquam. Debitis possimus reiciendis odit accusantium deleniti
                sunt consequatur sed beatae, est dolorum voluptas exercitationem
                eos at! Deserunt eaque dolore, cumque culpa quam officiis minima
                quod exercitationem iure iusto, expedita veritatis a asperiores
                autem! Dolore esse nesciunt odio cumque laudantium suscipit
                praesentium impedit nisi totam, numquam assumenda magnam
                perspiciatis. Perspiciatis suscipit fugiat alias sit nam
                reprehenderit, laudantium iure eaque temporibus in, deleniti ad
                dolore error molestias. Ab, cum. Ipsam accusantium dolores
                maiores dolore, consectetur voluptas sit debitis, odio nulla
                cupiditate ullam hic nisi reiciendis, quos harum perferendis
                quis explicabo tenetur similique iusto sint! Consequatur
                laudantium atque est! Labore alias, provident magni impedit
                iusto officiis temporibus, error porro odit, ad omnis blanditiis
                voluptatibus numquam modi quisquam. Voluptates soluta earum
                molestias, exercitationem vitae numquam officiis vel eos
                adipisci itaque dicta atque repellendus dignissimos totam nisi
                sed. Nihil tempore quam explicabo animi iste ipsum vero nobis
                iure exercitationem quos dicta repellat excepturi culpa nemo
                ratione placeat, laboriosam commodi provident? Placeat laborum
                corporis sed sunt ut velit nam adipisci. Blanditiis laboriosam
                sit eligendi optio! Eius numquam magni est magnam voluptatibus
                nobis autem eaque possimus eveniet pariatur tempora provident ab
                odio deserunt dolor minus aspernatur dolores molestiae tenetur
                id qui, ducimus necessitatibus. Magni dolore reprehenderit
                similique expedita dolorum delectus eum vero qui atque ad nihil
                nemo maiores dignissimos laboriosam ea deserunt animi dolorem
                sed, neque nostrum molestiae quidem exercitationem accusantium
                itaque? Doloribus rerum laudantium dolores exercitationem nihil
                temporibus quisquam, ullam dolor explicabo, ratione, fugit
                adipisci velit. Tenetur cum iure aliquam architecto debitis
                maxime illum enim esse at doloremque eligendi est excepturi
                inventore facilis quod voluptatem perferendis dolore blanditiis
                aperiam, ex recusandae sequi qui aliquid! Illo voluptates non
                mollitia in, dolorem reprehenderit modi illum, nostrum libero
                ut, quod accusamus facere consequuntur quo! Architecto, rem
                quibusdam. Odit est mollitia optio corporis in repellendus illo
                quod assumenda dolorum atque? Doloribus vero aliquam, nisi
                neque, corporis culpa quia quaerat delectus eius, quasi placeat
                exercitationem a optio eum nostrum obcaecati. Animi incidunt,
                nam expedita maxime, odio illo eaque nesciunt repudiandae,
                commodi facere inventore quis ipsam quaerat omnis corporis
                blanditiis illum iure tenetur rerum exercitationem voluptate?
                Optio ipsum libero repellat repudiandae sint! Sed ipsa ipsum cum
                expedita placeat a repellat neque quasi quisquam reprehenderit
                illum nobis deserunt voluptates omnis sit aliquid fugiat
                repellendus velit ab molestiae reiciendis, amet similique
                corrupti non! Quia iste et numquam nihil magnam ab? Quos facilis
                hic alias officiis voluptas beatae aut at iure? Perspiciatis,
                mollitia, reprehenderit esse ipsum quo ipsa veniam reiciendis
                rem eum quibusdam temporibus quis aliquid iste iure expedita
                ipsam repellendus. Dignissimos totam cumque inventore vitae
                cupiditate iure mollitia autem praesentium, repellat
                voluptatibus optio nam facilis, neque non consequuntur
                laudantium ratione nemo harum nesciunt? Sint saepe nesciunt
                explicabo recusandae. Reprehenderit cum praesentium error at
                incidunt doloremque nemo blanditiis odio. Quam excepturi nihil
                dolor optio, quae soluta magni natus deserunt unde? Sint
                assumenda modi delectus sit alias porro accusamus, sequi
                sapiente, iure tempore debitis? Illum eaque, fugiat enim non
                autem maxime quibusdam adipisci dolores atque a quis aut
                perferendis pariatur sapiente vero consequuntur perspiciatis
                excepturi dolorem iste totam expedita illo ratione! Magni beatae
                eaque quo nulla voluptatibus fuga dolorem obcaecati quisquam,
                necessitatibus iusto debitis illum, earum placeat quasi ea id
                quae commodi veniam? Amet adipisci culpa saepe voluptas repellat
                fuga numquam, perferendis consequuntur at? Quam, et illum autem
                quidem laboriosam voluptas sit totam eius exercitationem
                architecto rerum ut esse iure voluptates. Rerum obcaecati
                veritatis dolor voluptates distinctio odio! Sapiente voluptas
                ipsum natus sunt molestiae sed consectetur rerum vero architecto
                reiciendis. Modi molestias ipsa eaque quod pariatur obcaecati
                adipisci nemo? Dolorem quam iste, odio asperiores veritatis
                sequi atque suscipit libero sapiente facilis. Vero animi
                doloremque officia, odio omnis dolores totam rerum tempore.
                Omnis accusantium similique libero eius natus sed, deleniti,
                pariatur sint quos consequuntur alias hic sit est quo? Optio
                aliquid, maiores neque assumenda deserunt vero totam, amet,
                impedit reprehenderit cum asperiores facere delectus placeat?
                Sint unde, neque, magnam nihil odit blanditiis quo provident,
                fuga amet magni minus ad distinctio omnis quis? Asperiores fuga
                ipsam repudiandae officiis explicabo, facere cumque, dolorem aut
                obcaecati numquam cum quod nostrum officia animi inventore
                voluptatem voluptates magni unde. Doloribus totam cum possimus
                saepe sint, mollitia magnam repellendus provident atque enim
                iste praesentium, veniam velit dolorem deleniti in facilis optio
                rem harum. Officia consectetur nemo iusto sint, amet facere
                aperiam voluptas laboriosam in mollitia nisi inventore saepe
                eius nostrum unde qui quisquam omnis voluptates ea, cumque nobis
                dolorum dolor? Nemo accusamus dolorum quasi et voluptate qui
                perferendis dolores modi harum. Exercitationem natus veniam
                ipsam nihil mollitia sapiente explicabo quibusdam nam sunt
                minima earum praesentium quae quo rerum placeat illum, molestiae
                nemo eius eum ut expedita cum. Nam ullam saepe reprehenderit
                libero reiciendis? Reprehenderit repudiandae earum dignissimos
                sit officiis perspiciatis sequi rem illum maiores. Officia odit,
                accusamus quod aliquid id repellat, nesciunt dolores amet
                voluptatum dolorem nobis qui tempora. Quis eius voluptate
                consequuntur, quasi ipsa corrupti soluta necessitatibus fugit
                veniam ab voluptas magni vero molestias laboriosam molestiae ad
                praesentium enim sit fugiat. Nostrum, deserunt dignissimos illo
                consequatur repudiandae placeat dolore voluptatibus ipsum porro
                fuga dolores necessitatibus eaque praesentium et similique odit
                voluptate fugit odio molestias rem ullam vel incidunt sint!
                Tempora dignissimos nam, ducimus deleniti ad itaque harum
                dolores quis numquam optio ratione nostrum vitae, voluptate,
                quos vel error esse incidunt ipsa enim? Eius quisquam aspernatur
                tempora officiis consequatur! Inventore necessitatibus cum quas
                magni quos. Aliquam modi ipsam debitis, rem fugiat eum esse
                ratione cum, dolorem ullam praesentium quas fugit corrupti
                eveniet asperiores animi minus aspernatur illo? Minima, culpa
                nemo harum at non qui accusamus aliquid! Iste, consequuntur!
                Atque perferendis optio animi excepturi? Soluta culpa autem
                minima cum nam asperiores, modi, deleniti magnam possimus
                expedita laudantium eaque aliquid error nobis, debitis hic. Vel
                voluptate porro dignissimos error totam velit suscipit qui odit,
                obcaecati similique, officiis nam. Laudantium nesciunt
                voluptatibus cumque minima eaque at, fugiat magni eius?
              </p>
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
