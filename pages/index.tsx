import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import projectConfig from '../config/projectConfig';
import topImage from '../public/assets/1920x600.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{projectConfig.nftName}</title>
      </Head>

      <Image src={topImage} alt={projectConfig.nftName} />

      <div className="bg-black-800 container mx-auto">
        <Prose>
          <h1 className="text-5xl font-bold mb-2">{projectConfig.nftName}</h1>
          <p className="text-xl">
            VESSELS are the first project from the V01D.
            Vessel holders receive access to V01D IRL events, including our launch party at NFT.NYC 2022.
            Check out our roadmap for more info.
          </p>
        </Prose>
      </div>

      <div className="container mx-auto">
        <Prose>
          <Minting/>
        </Prose>
      </div>

      <div className="container mx-auto">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-black container mx-auto">
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
