'use client'

import { fetchProviders } from "@/services/content.service";
import { Provider } from "../models/provider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [providers, setProviders] = useState<Provider[] | null>(null);
  const [search, setSearch] = useState<string>('');
  const [filteredProviders, setFilteredProviders] = useState<Provider[] | null>(null);

  const router = useRouter();

  const handleProviderClick = (provider: Provider) => router.push(`/provider/${provider.name.toLowerCase()}`);

  useEffect(() => {
    if (!providers) {
      return;
    }
    if (search === '') {
      setFilteredProviders(providers);
      return;
    }
    const filtered = providers.filter((provider) => provider.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredProviders(filtered);
  }, [search, providers]);

  useEffect(() => {
    fetchProviders().then((data) => {
      setProviders(data);
      setFilteredProviders(data);
    });
  }, []);

  const links = [
    { name: 'Overview', href: '#' },
    { name: 'Casino content', href: '#' },
    { name: 'Business models', href: '#' },
    { name: 'Contact us', href: '#' },
  ]
  const stats = [
    { name: 'Gaming providers', value: '320+' },
    { name: 'Casino games', value: '26,789+' },
    { name: 'Content providers', value: '320+' },
    { name: 'Local & global jackpots', value: '479+' },
  ]

  if (!providers) {
    return 
  }

  return (
    <>
      <main className="flex flex-col items-center flex-1 w-full min-h-screen mb-12">

        <section className="relative w-full py-24 overflow-hidden bg-gray-900 isolate sm:py-32">
          <img
            src="https://images.unsplash.com/photo-1515687652280-bf0bb698562a?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center brightness-[0.25]"
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <Image src='./logoipsum.svg' alt='logo' width='0' height='0' className="w-full h-auto" />
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
            </div>
            <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 text-base font-semibold leading-7 text-white gap-x-8 gap-y-6 sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
              <dl className="grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
        <section className="p-12">
          <div className='mb-8'>
            <h1 className='text-4xl font-bold'>Gaming Providers</h1>
            <p className='mt-4 mb-8'>We offer a wide range of gaming providers to suit your needs. We have over 320 gaming providers and 26,789+ casino games available. We also offer local and global jackpots with 479+ available.</p>
            <div className='flex items-center justify-center'>
              <div className="relative mt-2 rounded-md shadow-sm min-h-6 min-h-12 sm:min-w-[400px]">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block min-h-12 sm:min-w-[100%] rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-md sm:leading-6"
                  placeholder="Search providers"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-center gap-8'>
            {filteredProviders?.map((provider: Provider) => (
              <div key={provider.name} className="flex flex-col justify-between items-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm w-[350px] h-[250px] hover:shadow-lg" onClick={() => handleProviderClick(provider)}>
                <div className="h-[100px] mt-8">
                  <img src={provider.logo} alt={provider.name} className="h-full" />
                </div>
                <h2 className="text-xl">{provider.name}</h2>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="pt-8 bg-gray-100">
        <div className="flex flex-wrap justify-center justify-between max-w-screen-xl px-4 mx-auto text-gray-800 sm:px-6">
          <div className="p-5">
            <div className="text-xs font-medium text-gray-500 uppercase">Home</div>
            <a className="block my-3" href="/#">Services <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">Products <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">About Us <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">Pricing <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">Partners <span className="p-1 text-xs text-teal-600">New</span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-xs font-medium text-gray-500 uppercase">Resources</div>

            <a className="block my-3" href="/#">Documentation <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">Tutorials <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">Support <span className="p-1 text-xs text-teal-600">New</span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-xs font-medium text-gray-500 uppercase">Support</div>

            <a className="block my-3" href="/#">Help Center <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">Privacy Policy <span className="p-1 text-xs text-teal-600"></span>
            </a>
            <a className="block my-3" href="/#">Conditions <span className="p-1 text-xs text-teal-600"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-xs font-medium text-gray-500 uppercase">Contact us</div>

            <a className="block my-3" href="/#">XXX XXXX, Floor 4 San Francisco, CA
              <span className="p-1 text-xs text-teal-600"></span>
            </a>

            <a className="block my-3" href="/#">contact@company.com
              <span className="p-1 text-xs text-teal-600"></span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
