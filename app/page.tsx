import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Register your IP',
    },
    {
      label: 'Mint a License',
    },
  ],
  image: 'https://i.imgur.com/kmsP6EM.jpeg',
  post_url: 'https://zizzamia.xyz/api/frame',
});

export const metadata: Metadata = {
  title: 'storyprotocol.xyz',
  description: 'LFG',
  openGraph: {
    title: 'storyprotocol.xyz',
    description: 'The Story Protocol Frame',
    images: ['https://i.imgur.com/kmsP6EM.jpeg'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>storyprotocol.xyz</h1>
    </>
  );
}
