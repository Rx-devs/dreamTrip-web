import { FaDiscord, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Layout from "../layouts/Layout";

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'DreamTrip CEO',
    twitterUrl: '#',
    linkedinUrl: '#',
    discordUrl: '#'
  },
  // More people...
]


function About({ }) {
  return (
    <>
      <Layout>
        <div className="bg-white">
          <div className="mx-auto py-10 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
            <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
              <div className="space-y-5 sm:space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">About Us</h2>
                <p className="text-base text-gray-500">
                  DreamTrip will find your best holiday destinations.
                  Making the world a better place through constructing elegant hierarchies.
                </p>
              </div>
              <div className="lg:col-span-2">
                <ul
                  role="list"
                  className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
                >
                  {people.map((person) => (
                    <li key={person.name} className="sm:py-8">
                      <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                        <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                          <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                        </div>
                        <div className="sm:col-span-2">
                          <div className="space-y-4">
                            <div className="text-lg leading-6 font-medium space-y-1">
                              <h3>{person.name}</h3>
                              <p className="text-indigo-600">{person.role}</p>
                            </div>
                            <div className="text-base">
                              <p className="text-gray-500">
                                {person.bio} <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illo molestiae consequuntur esse corrupti inventore consequatur exercitationem cum. Deserunt, quae.
                              </p>
                            </div>
                            <ul role="list" className="flex space-x-5">
                              <li>
                                <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                                  <span className="sr-only">Twitter</span>
                                  <FaTwitter className="w-5 h-5" />
                                </a>
                              </li>
                              <li>
                                <a href={person.discordUrl} className="text-gray-400 hover:text-gray-500">
                                  <span className="sr-only">Discord</span>
                                  <FaDiscord className="w-5 h-5" />
                                </a>
                              </li>
                              <li>
                                <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                  <span className="sr-only">LinkedIn</span>
                                  <FaLinkedin className="w-5 h-5" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>


      </Layout>
    </>
  )
};
export default About;
