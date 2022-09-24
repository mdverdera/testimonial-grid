import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Testimonial Grid</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Global Container */}
      <div className="container mx-auto max-w-7xl p-2 md:p-10">
        {/* Grid Container */}
        <div className="grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2">
          {/* Box 1 */}

          <div className="relative p-10 rounded-xl bg-purple-600 md:col-span-2">
            {/* Quotes Image */}
            <picture>
              <img
                src="/img/bg-pattern-quotation.svg"
                alt=""
                className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
              />
            </picture>

            {/* Box Header */}
            <div className="flex z-10 space-x-4 ">
              <picture>
                <img
                  src="/img/image-daniel.jpg"
                  alt="daniel"
                  className="rounded-full ring-2 ring-purple-300"
                />
              </picture>

              <div className="text-sm">
                <h4 className="opacity-90">Daniel Clifford</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* Large Text */}
            <p className="relative z-10 mt-6 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quas consequuntur inventore architecto non, facere iste, accusamus
              neque aliquam placeat magnam doloribus numquam! Rerum, dicta a
              dolore doloribus excepturi amet!
            </p>
            {/* Small Text */}
            <p className="mt-6 opacity-50 line-clamp-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              iure cum nobis veniam hic in. Ipsa, aut debitis aspernatur saepe
              dolor praesentium. Illum voluptatem officia optio eligendi itaque
              aliquam animi. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Minus omnis eaque dolorem impedit ducimus cumque tempora
              neque id cum accusantium, tempore saepe consequuntur suscipit at
              deserunt vel numquam. Ipsum, provident.
            </p>
          </div>

          {/* Box 2 */}

          <div className=" p-10 rounded-xl bg-gray-600">
            {/* Box Header */}
            <div className="flex  space-x-4 ">
              <picture>
                <img
                  src="/img/image-jonathan.jpg"
                  alt="jonathan"
                  className="rounded-full ring-2 ring-purple-300"
                />
              </picture>

              <div className="text-sm">
                <h4 className="opacity-90"> Jonathan Walters</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* Large Text */}
            <p className="  mt-6 text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              neque ratione, harum quidem deleniti, modi accusantium autem
              molestias incidunt magni veritatis cum! Numquam harum nam velit
              libero possimus sed reiciendis.
            </p>
            {/* Small Text */}
            <p className="mt-6 opacity-50 line-clamp-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
              provident! Laborum totam repudiandae expedita molestias.
              Asperiores iure numquam eveniet laudantium?
            </p>
          </div>

          {/* Box 3 */}

          <div className="hidden p-10 rounded-xl bg-white text-gray-900 md:block md:row-span-2">
            {/* Box Header */}
            <div className="flex  space-x-4 ">
              <picture>
                <img
                  src="/img/image-kira.jpg"
                  alt="kira"
                  className="rounded-full ring-2 ring-purple-300"
                />
              </picture>

              <div className="text-sm">
                <h4 className="opacity-90"> Kira Whittle</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* Large Text */}
            <p className="  mt-6 text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
              animi!
            </p>
            {/* Small Text */}
            <p className="mt-6 opacity-50 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              ad ut nihil enim tempora debitis, id maiores veniam odit facere
              tenetur incidunt mollitia nobis autem asperiores cum nulla a
              saepe. Ab sequi id at et ipsa reiciendis eius quaerat perspiciatis
              inventore, illo corporis a sapiente, tempora velit optio soluta,
              doloremque maxime possimus. Facilis tempore ab beatae nobis
              commodi fugit a illo dolor deleniti neque, quibusdam itaque iure
              in blanditiis veniam, enim id quam sapiente? Aspernatur quae quos
              est ut incidunt optio harum, distinctio deserunt culpa voluptas
              eius, architecto quibusdam omnis maxime pariatur reiciendis quam
              itaque consequatur iste iusto adipisci similique.
            </p>
          </div>

          {/* Box 4 */}

          <div className=" p-10 rounded-xl bg-white text-gray-900">
            {/* Box Header */}
            <div className="flex  space-x-4 ">
              <picture>
                <img
                  src="/img/image-jeanette.jpg"
                  alt="jeanette"
                  className="rounded-full ring-2 ring-purple-300"
                />
              </picture>

              <div className="text-sm">
                <h4 className="opacity-90"> Jeanette Harmon</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* Large Text */}
            <p className="  mt-6 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              vitae inventore eaque.
            </p>
            {/* Small Text */}
            <p className="mt-6 opacity-50 line-clamp-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              qui at consequuntur facere recusandae soluta eveniet vitae nisi
              esse? Architecto eum tempora quisquam repudiandae nulla nisi unde
              totam saepe aliquam reprehenderit, dolore, sunt ad. Ad recusandae
              reiciendis debitis expedita sequi perspiciatis nihil voluptatibus
              a rerum provident eaque, voluptatum sit maiores.
            </p>
          </div>

          {/* Box 5 */}

          <div className=" p-10 rounded-xl bg-gray-900 md:col-span-2">
            {/* Box Header */}
            <div className="flex  space-x-4 ">
              <picture>
                <img
                  src="/img/image-patrick.jpg"
                  alt="patrick"
                  className="rounded-full ring-2 ring-purple-300"
                />
              </picture>

              <div className="text-sm">
                <h4 className="opacity-90"> Patrick Abrams</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* Large Text */}
            <p className="  mt-6 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, provident. Cupiditate quod officia, facilis rem eveniet
              minus earum.
            </p>
            {/* Small Text */}
            <p className="mt-6 opacity-50 line-clamp-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium magni dolore deleniti aut. Provident tenetur cum
              maxime sed corrupti id odit eos aspernatur atque aut, fuga
              doloremque harum at quas, consequatur praesentium quod maiores,
              labore enim sapiente dolorem eligendi. Incidunt.
            </p>
          </div>

          {/* Box 6 */}

          <div className=" p-10 rounded-xl bg-white text-gray-900 md:hidden">
            {/* Box Header */}
            <div className="flex  space-x-4 ">
              <picture>
                <img
                  src="/img/image-kira.jpg"
                  alt="kira"
                  className="rounded-full ring-2 ring-purple-300"
                />
              </picture>

              <div className="text-sm">
                <h4 className="opacity-90"> Kira Whittle</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* Large Text */}
            <p className="  mt-6 text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
              animi!
            </p>
            {/* Small Text */}
            <p className="mt-6 opacity-50 line-clamp-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis error doloremque sit omnis animi modi fugiat
              provident quam voluptatum iure architecto dolore mollitia eos
              cumque maxime aut, numquam illum tempore. Architecto ex
              consequuntur, error voluptatum explicabo alias vel blanditiis
              soluta eos itaque reprehenderit quod fugit quis voluptate qui
              sequi ipsam commodi odio? Perspiciatis quam placeat, eos
              necessitatibus reprehenderit incidunt culpa, odit iusto aperiam
              repudiandae praesentium dolorem adipisci! Culpa quod ex eveniet
              cumque sunt voluptatibus excepturi nostrum? At culpa magni
              voluptates, exercitationem eaque veniam sapiente eveniet
              voluptatum fuga quam illum consequuntur sunt, cumque sint aliquid
              laborum incidunt, vero repellendus itaque omnis laudantium
              suscipit in tempora explicabo. Architecto, reprehenderit rerum. Ut
              minima, voluptatem sit nemo placeat dolorem dolore, accusantium
              labore fuga enim, aspernatur error voluptates corrupti deleniti
              beatae? Blanditiis, suscipit hic optio fugit nesciunt provident
              explicabo impedit voluptatum minus maiores. Nemo consequuntur
              quibusdam hic assumenda ullam aliquam distinctio quia. Sequi
              dolorum inventore facere eius assumenda recusandae? Molestiae a
              nisi voluptates, soluta maiores nobis. Error ipsam magni excepturi
              ullam alias harum, veritatis sed amet aspernatur magnam vel porro
              commodi recusandae delectus repellat ipsum iure repudiandae
              incidunt suscipit. Alias, rem. Est nemo labore nulla laudantium
              sunt molestiae delectus eius dolorem. Dolorum reiciendis
              voluptates corrupti accusamus maxime dolor sequi quidem ab
              eligendi itaque delectus quas, ea fuga ex ad quae praesentium
              quam, odit perspiciatis culpa eaque non id assumenda! Error, enim!
              Aliquam natus consequuntur dignissimos reiciendis ipsum fuga
              obcaecati dolor atque quis dolorem. Tenetur omnis quam quas ab
              amet, maxime recusandae, doloribus modi aspernatur vel veritatis
              nesciunt sed. Animi possimus maxime neque, nulla sequi ducimus,
              tempora quisquam aliquam amet dolorem libero ratione ullam vitae
              cupiditate qui, facilis id nesciunt laudantium earum excepturi
              exercitationem minus commodi necessitatibus hic? Ratione non
              blanditiis quidem, fugit reiciendis incidunt delectus deleniti
              earum, necessitatibus totam esse cupiditate veritatis
              voluptatibus, et quisquam deserunt obcaecati nesciunt ea assumenda
              velit aut nihil itaque nemo. Dicta quis eaque in, provident ipsa
              maxime odit, dolorum eos impedit consectetur harum quidem
              voluptates vel repudiandae iusto ipsum. Eius libero placeat, vel
              laboriosam eligendi illum est enim beatae corrupti tenetur
              corporis. Aspernatur minus quisquam incidunt numquam ducimus sequi
              provident quam sunt praesentium atque. Ea animi aspernatur aperiam
              qui iure ipsa asperiores tempora consequatur est culpa? Quod
              dignissimos, totam inventore alias dicta ducimus maxime porro
              perferendis praesentium fugiat eligendi repellendus voluptate
              soluta, ratione blanditiis. Impedit quaerat doloremque fuga itaque
              eaque laborum adipisci, animi libero sunt perferendis veniam,
              beatae illo corporis ducimus nulla expedita ut! Eius, dignissimos
              dolorem rem esse molestiae voluptatum error quis reprehenderit
              magnam, nihil qui et! Voluptatibus reprehenderit iste magnam
              error, unde accusantium hic cum exercitationem dicta harum
              quisquam officia velit nisi tenetur, libero, veniam assumenda
              consectetur placeat deleniti ratione illo. Totam at eaque
              praesentium accusantium doloribus soluta, quasi perspiciatis,
              animi dolorem officia iste corrupti neque eos quod debitis
              voluptates cupiditate magni impedit fugiat, repellendus deserunt
              tenetur sint esse? Esse, doloribus consequatur nihil excepturi
              fugiat eaque corporis illum fuga saepe, beatae maxime. Praesentium
              blanditiis sequi vitae fugit aut sed velit id deleniti, incidunt
              impedit, quos ex soluta omnis est doloremque delectus laudantium
              cum asperiores tempore, similique voluptas quaerat? Dolores saepe
              quam ratione molestiae incidunt quas perferendis minima debitis
              voluptate aperiam dicta reprehenderit accusamus exercitationem
              dolorem et laudantium impedit voluptatem fugit, non sit. Quidem
              provident dolorem non nisi doloribus! Voluptatum saepe
              perspiciatis culpa quidem eos alias suscipit dolor deserunt
              quibusdam, quae exercitationem dolorem quia aut possimus
              consequatur rem. Mollitia quisquam culpa dicta voluptates nemo
              facilis voluptate nulla exercitationem ipsam provident, magni
              repellendus, iure eos totam neque quae deserunt laboriosam aperiam
              quam placeat quasi eius eligendi? Quo cumque commodi inventore
              molestiae natus, consequuntur eveniet possimus dicta architecto
              modi officia temporibus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
