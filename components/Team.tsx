import Image from 'next/image';

import Creator from '../public/assets/creator.png';

export default function Team() {
  return (
    <div className="text-center">
      <h2 className="text-2xl text-gray-100 mb-4">Multimedia Ops + Installation Ops</h2>
      <Image
        src={Creator}
        alt="peenpoon"
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="mt-4">
        <a
          href="https://twitter.com/peenpoontweets"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-500 hover:text-blue-400"
        >
          <span className="bg-gray-900 rounded-full px-4 py-2">@peenpoontweets</span>
        </a>

      </p><h2 className="text-2xl text-gray-100 mb-4">Social Operations + DAO Strategy</h2>
      <Image
        src={Creator}
        alt="lomedia.eth"
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="mt-4">
        <a
          href="https://twitter.com/laurenmwash"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-500 hover:text-blue-400"
        >
          <span className="bg-gray-900 rounded-full px-4 py-2">@laurenmwash</span>
        </a>

        </p><h2 className="text-2xl text-gray-100 mb-4">Event Operations + Frontend Dev</h2>
      <Image
        src={Creator}
        alt="koikai.eth"
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="mt-4">
        <a
          href="https://twitter.com/AKaiMorton"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-500 hover:text-blue-400"
        >
          <span className="bg-gray-900 rounded-full px-4 py-2">@akaimorton</span>
        </a>
        
      </p>
      
    </div>
  );
}
