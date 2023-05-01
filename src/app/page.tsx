/* eslint-disable @next/next/no-img-element */
"use client"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Example() {
  const data = [
    {
      label: "Sakura",
      value: "Sakura",
      desc: `Cherry blossoms in Japan are an iconic flower.
      This amazing flower can be used as a graceful gift to a loved one.
      There are two Hanakotoba for this flower, namely a beautiful soul and a beautiful woman.
      However, certain types of Sakura flowers have different meanings.
      Some Japanese people think that Sakura flowers have the meaning "don't forget me".`,
    },
    {
      label: "Ume",
      value: "Ume",
      desc: `Ume are similar to Sakura flowers because they have stacked flower petals.
      The ume tree is concentrated in Tenjin's coolies because it means the flower that glorifies the divine of Learning, Sugawara no Michizane.
      In general, ume flowers mean noble, patient and loyal.
      however, there are other meanings too, you know, depending on the origin of the color.`,
    },

    {
      label: "Higanbana",
      value: "Higanbana",
      desc: `Flowers originating from China and Japan have an interesting Hanakotoba, namely passion. 
      But it can also be interpreted as resignation and independence.
      When the flowers that have these various types bloom, the leaves will fall until all the petals fall.
      Even so, this flower for sick people is an act that is less than perfect. Red Spider Lily is a flower that grows in the cemetery area which is used as a guardian of supernatural beings.
      In addition, the flowers contain poison.`,
    },

    {
      label: "Himawari",
      value: "Himawari",
      desc: `The common meaning according to Hanakotoba for sunflower is "I only see you".
      however, if the number and color of the flowers are not aligned, then the meaning will change.
      Everything describes a person's feelings of love.`,
    },

    {
      label: "Botan",
      value: "Botan",
      desc: `Peony is of Chinese origin, but this flower in general can grow in all parts of the country.
      Peonies mean the king of flowers because of their dashing appearance.
      in Japan, peonies usually grow in shrine areas.
      Hanakotoba for this flower is "rich" and "famous".`,
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">In traditional
              <br className="hidden lg:inline-block" />ceremonies and celebrations
            </h1>
            <p className="mb-8 leading-relaxed">In addition to the two things above, you can find Hanakotoba in traditional
              Japanese ceremonies and ceremonies, such as weddings, funerals, and ceremonies for teenagers who are approaching adulthood.
              Because the Hanakotoba culture is very strong in meaning, care needs to be taken in the flowers in every ceremony.
              This is to avoid misunderstandings from other parties.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://thumbs.dreamstime.com/b/plum-blossom-branch-isolated-white-background-traditional-chinese-elements-icon-symbol-logo-web-chinese-new-year-design-174847889.jpg" />
          </div>
        </div>
      </section> <Tabs id="custom-animation" value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Japan Wonderfull</h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
                Donec nulla nulla, commodo mollis nisl non, lobortis molestie velit. Etiam sed facilisis nisl. Proin vitae placerat dolor, in pellentesque mauris.
                Nam varius id est in elementum. Nam ornare accumsan tellus a sollicitudin. Integer euismod ex in pellentesque ornare.
                Suspendisse aliquet, eros id maximus convallis, dui ante rhoncus lacus, et rutrum lectus metus vitae lacus.
                Vivamus vel mattis ipsum, in semper sem. Cras et ornare nisl, vel porttitor urna. Donec eros nisl, feugiat non purus ac,
                tincidunt egestas purus. Praesent mattis, orci non ornare luctus, est erat tristique ligula, vitae consectetur magna nibh ut est.
                Donec ut lacinia dolor, ac tempus lectus. Integer pharetra euismod dui placerat posuere.
              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block"
                    src="https://asset.kompas.com/crops/19cFZ6kmY3DYKeMwgW8skZC8kaQ=/130x0:1570x1440/750x500/data/photo/2022/08/05/62ec71ed261ac.jpg" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block"
                    src="https://cdn.idntimes.com/content-images/community/2019/02/amayori-plum-blossom-1956fc01c3267e3cb697c4a09eb70307.jpg" />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block"
                    src="https://blog.cakap.com/wp-content/uploads/2020/11/Webp.net-resizeimage-16.jpg" />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block"
                    src="https://img.jalan2kejepang.com/uploads/2016/06/Padang-Bunga-Himawari.jpg" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block"
                    src="https://asset.kompas.com/crops/kZC3PG_Rx31PHEIK5Z-qwNq02iM=/118x255:1651x1277/750x500/data/photo/2021/07/02/60de7f2cd33ec.jpg" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block"
                    src="https://images.unsplash.com/photo-1555050551-82f8d95a0614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}